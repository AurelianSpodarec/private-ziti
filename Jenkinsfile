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
        IS_ACTUAL_PRODUCTION = (env.BRANCH_NAME == 'main').toString()
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    env.ENV_FILE_CREDENTIALS_ID = (env.BRANCH_NAME == 'main') ? 'b156afaf-7f89-4c7c-9490-9a9a7eafe28b' : 'b156afaf-7f89-4c7c-9490-9a9a7eafe28b'
                    def buildArgs = ''
                    dir('docker-compose') {
                        def branchToProject = [
                            'staging': 'staging',
                            'main': 'prod'
                        ]

                        ENV_FILE_DESTINATION = ".env.${branchToProject[env.BRANCH_NAME] ?: 'prod'}"
                        
                        git credentialsId: "${DOCKER_COMPOSE_CREDENTIALS_ID}", url: "${DOCKER_COMPOSE_REPO_URL}", branch: "main"
                    
                        // Create .env File
                        withCredentials([file(credentialsId: "${env.ENV_FILE_CREDENTIALS_ID}", variable: 'ENV_FILE_SOURCE')]) {
                            sh "cp $ENV_FILE_SOURCE $ENV_FILE_DESTINATION"
                        }
                    
                        if (!fileExists("$ENV_FILE_DESTINATION")) {
                            error("File $ENV_FILE_DESTINATION not found.")
                        }

                        // Loading variables to Jenkins environment
                        def envFileContent = readFile("$ENV_FILE_DESTINATION")
                        def envVars = envFileContent.split('\n')
                        buildArgs = envVars.findAll { line -> // Use findAll to filter out empty lines and comments
                            line = line.split('#')[0].trim()
                            !line.isEmpty()
                        }.collect { line ->
                            def pair = line.split('=', 2)
                            if (pair.length > 1) {
                                "--build-arg ${pair[0].trim()}=${pair[1].trim()}"
                            }
                        }.join(' ')
                    }
                    // Building Docker image
                    sh "docker build ${buildArgs} -t ${env.IMAGE_NAME}:latest ."

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
                    env.ENV_FILE_CREDENTIALS_ID = (env.BRANCH_NAME == 'main') ? '4853f2b5-af66-45e7-915f-3ce98eb89f14' : '85b6802a-38c8-4825-a043-0cbc55517e07'
                    
                    // Checkout Docker Compose configuration
                    dir('docker-compose') {
                        def branchToProject = [
                          'staging': 'staging',
                          'main': 'prod'
                        ]

                        ENV_FILE_DESTINATION = ".env.${branchToProject[env.BRANCH_NAME]}"
                        
                        git credentialsId: "${DOCKER_COMPOSE_CREDENTIALS_ID}", url: "${DOCKER_COMPOSE_REPO_URL}", branch: "main"

                        if (fileExists("$ENV_FILE_DESTINATION")) {
                            sh "rm ${ENV_FILE_DESTINATION}"
                        }
                    
                        // Create .env File
                        withCredentials([file(credentialsId: "${env.ENV_FILE_CREDENTIALS_ID}", variable: 'ENV_FILE_SOURCE')]) {
                            sh "cp $ENV_FILE_SOURCE $ENV_FILE_DESTINATION"
                        }
                    
                        if (!fileExists("$ENV_FILE_DESTINATION")) {
                            error("File $ENV_FILE_DESTINATION not found.")
                        }

                        sh "sed -i '/${env.SERVICE}:/,/^[^ ]/{s|image: ${env.IMAGE_NAME}:.*|image: ${env.IMAGE_NAME}:${env.BUILD_ID}|}' docker-compose.frontend.yaml"
                        
                        // Loading variables to Jenkins environment
                        def envFileContent = readFile(".env.${branchToProject[env.BRANCH_NAME]}")
                        def envVars = envFileContent.split('\n')
                        envVars.findAll { line -> // First, filter out unwanted lines
                            line = line.split('#')[0].trim() // Remove comments and trim whitespace
                            !line.isEmpty() // Keep only lines that are not empty after removing comments and trimming
                        }.each { line -> // Then, process each remaining line
                            def pair = line.split('=', 2)
                            if (pair.length > 1) {
                                env[pair[0].trim()] = pair[1].trim() // Set each valid environment variable
                            }
                        }

                        sh "docker compose -f docker-compose.frontend.yaml --project-name ${branchToProject[env.BRANCH_NAME] ?: 'unknown'} up -d --no-deps --force-recreate ${env.SERVICE}"
                    }
                }
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
                def jobUrl = "${env.JENKINS_URL}job/ziti.io/job/${env.BRANCH_NAME}/${env.BUILD_NUMBER}/console"
                
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
