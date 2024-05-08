pipeline {
    agent { label 'ziti-jenkins-agent' }

    environment {
        START_TIME = new Date().time.toString()
        APP_REPO_URL = 'git@bitbucket.org:zitiio/ziti.io.git'
        APP_CREDENTIALS_ID = 'd41426f0-2e32-4328-a53e-d537fb1c7cfb'
        DOCKER_COMPOSE_REPO_URL = 'git@bitbucket.org:zitiio/docker-compose.git'
        DOCKER_COMPOSE_CREDENTIALS_ID = '59023cb5-fac2-48f8-998e-107cec2c3de0'
        PATH = "${env.HOME}/bin:${env.PATH}"
        IMAGE_NAME = "${env.BRANCH_NAME.replaceAll("[^a-zA-Z0-9_.-]", "-").toLowerCase()}-app-ziti"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${env.IMAGE_NAME}:latest ."

                    // Tag the image with the build ID
                    sh "docker tag ${env.IMAGE_NAME}:latest ${env.IMAGE_NAME}:${env.BUILD_ID}"
                }
            }
        }
        stage('Deploy') {
            when {
                anyOf {
                    branch 'staging'
                    branch 'main'
                }
            }
            steps {
                script {
                    env.DEPLOY_URL = (env.BRANCH_NAME == 'staging') ? 'https://stage.ziti.io' : 'https://ziti.io'
                    env.SERVICE = 'app-ziti'
                    env.ENV_FILE_CREDENTIALS_ID = (env.BRANCH_NAME == 'staging') ? '85b6802a-38c8-4825-a043-0cbc55517e07' : '4853f2b5-af66-45e7-915f-3ce98eb89f14'
                    
                    // Checkout Docker Compose configuration
                    dir('docker-compose') {
                        def branchToProject = [
                          'staging': 'staging',
                          'main': 'prod'
                        ]
                        
                        git credentialsId: "${DOCKER_COMPOSE_CREDENTIALS_ID}", url: "${DOCKER_COMPOSE_REPO_URL}", branch: "main"
                    
                        // Create .env File
                        withCredentials([file(credentialsId: "${env.ENV_FILE_CREDENTIALS_ID}", variable: 'ENV_FILE')]) {
                            sh "cp $ENV_FILE .env.${branchToProject[env.BRANCH_NAME] ?: 'unknown'}"
                        }
                    
                        // Deploy service
                        if (!fileExists(".env.${branchToProject[env.BRANCH_NAME]}")) {
                            error("File .env.${branchToProject[env.BRANCH_NAME]} not found.")
                        }

                        sh "sed -i '/${env.SERVICE}:/,/^[^ ]/{s|image: ${env.IMAGE_NAME}:.*|image: ${env.IMAGE_NAME}:${env.BUILD_ID}|}' docker-compose.frontend.yaml"
                        
                        // Loading variables to Jenkins environment
                        def envFileContent = readFile(".env.${branchToProject[env.BRANCH_NAME]}")
                        def envVars = envFileContent.split('\n')
                        envVars.each { line ->
                            def pair = line.split('=', 2)
                            if (pair.length > 1) {
                                env[pair[0].trim()] = pair[1].trim()
                            }
                        }

                        sh "docker compose -f docker-compose.frontend.yaml --project-name ${branchToProject[env.BRANCH_NAME] ?: 'unknown'} up -d --no-deps --force-recreate ${env.SERVICE}"
                    }
                }
            }
        }
        stage('Notify Sentry of deployment') {
            environment {
                script {
                    def branchToProject = [
                        'staging': 'staging',
                        'main': 'prod'
                    ]
                    SENTRY_AUTH_TOKEN = credentials('e4a6bc79-c567-4858-966f-54349a75a2f1')
                    SENTRY_ORG = ${env.SENTRY_ORG}
                    SENTRY_PROJECT = ${env.SENTRY_ORG}
                    SENTRY_ENVIRONMENT = ${branchToProject[env.BRANCH_NAME] ?: 'unknown'}
                }
            }
            steps {
                // Install Sentry CLI
                sh 'command -v sentry-cli || curl -sL https://sentry.io/get-cli/ | bash'

                sh '''
                    export SENTRY_RELEASE=$(sentry-cli releases propose-version)
                    sentry-cli releases new -p $SENTRY_PROJECT $SENTRY_RELEASE
                    sentry-cli releases set-commits $SENTRY_RELEASE --auto
                    sentry-cli releases files $SENTRY_RELEASE upload-sourcemaps /path/to/sourcemaps
                    sentry-cli releases finalize $SENTRY_RELEASE
                    sentry-cli releases deploys $SENTRY_RELEASE new -e $SENTRY_ENVIRONMENT
                '''
            }
        }
    }

    post {
        always {
            script {
                // Prune Docker images on build failure or non-deployment builds
                if (currentBuild.result != 'SUCCESS' || !["staging", "main"].contains(env.BRANCH_NAME)) {
                    sh "docker image prune -f --filter label=stage=intermediate"
                }

                // Determine action type and prepare links for Slack notification
                def actionType = ["staging", "main"].contains(env.BRANCH_NAME) ? "Deployment" : "Build"
                def linkTarget = ["staging", "main"].contains(env.BRANCH_NAME) ? env.DEPLOY_URL : "Branch ${env.BRANCH_NAME}"
                def jobUrl = "${env.JENKINS_URL}job/ziti.io/job/${env.BRANCH_NAME}/${env.BUILD_NUMBER}/redirect"
                
                // Determine the message color based on the build result
                def color = (currentBuild.result == null || currentBuild.result == 'SUCCESS') ? '#36A64F' : '#FF0000'

                // Set end time and calculate duration
                def endTime = new Date().time
                def duration = env.START_TIME ? (endTime - Long.parseLong(env.START_TIME)) / 1000 : 'N/A'
                
                // Prepare and send the Slack message
                slackSend (
                    color: color,
                    message: "${linkTarget} - #${env.BUILD_NUMBER} ${actionType} ${currentBuild.result ?: 'Success'} after ${duration} sec <${jobUrl}|(Open)>"
                )
            }
        }
    }

}
