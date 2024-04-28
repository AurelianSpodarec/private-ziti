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
                    env.SERVICE = (env.BRANCH_NAME == 'staging') ? 'staging-app-ziti' : 'main-app-ziti'
                    env.ENV_FILE_CREDENTIALS_ID = (env.BRANCH_NAME == 'staging') ? '85b6802a-38c8-4825-a043-0cbc55517e07' : '4853f2b5-af66-45e7-915f-3ce98eb89f14'
                    
                    // Checkout Docker Compose configuration
                    dir('docker-compose') {
                        git credentialsId: "${DOCKER_COMPOSE_CREDENTIALS_ID}", url: "${DOCKER_COMPOSE_REPO_URL}", branch: "${env.BRANCH_NAME}"
                    }
                    
                    // Create .env File
                    withCredentials([file(credentialsId: "${env.ENV_FILE_CREDENTIALS_ID}", variable: 'ENV_FILE')]) {
                        dir('docker-compose') {
                            sh 'cp $ENV_FILE .env'
                        }
                    }
                    
                    // Deploy service
                    dir('docker-compose') {
                        sh "sed -i '/${env.SERVICE}:/,/^[^ ]/{s|image: ${env.IMAGE_NAME}:.*|image: ${env.IMAGE_NAME}:${env.BUILD_ID}|}' docker-compose.yaml"
                        sh "docker compose up -d --no-deps --force-recreate ${env.SERVICE}"
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
                def jobUrl = "${env.JENKINS_URL}job/${env.JOB_NAME}/${env.BRANCH_NAME}/${env.BUILD_NUMBER}/redirect"
                
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
