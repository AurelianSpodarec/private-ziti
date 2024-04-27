pipeline {
    agent { label 'ziti-jenkins-agent' }

    environment {
        APP_REPO_URL = 'git@bitbucket.org:zitiio/ziti.io.git'
        APP_CREDENTIALS_ID = 'd41426f0-2e32-4328-a53e-d537fb1c7cfb'
        DOCKER_COMPOSE_REPO_URL = 'git@bitbucket.org:zitiio/docker-compose.git'
        DOCKER_COMPOSE_CREDENTIALS_ID = '59023cb5-fac2-48f8-998e-107cec2c3de0'
        PATH = "${env.HOME}/bin:${env.PATH}"
    }
    stages {
        stage('Validate Repo and Branch') {
            steps {
                script {
                    // Correctly format expected URL
                    def expectedUrl = 'bitbucket.org/zitiio/ziti.io'

                    // Normalize actual URL to remove authentication tokens and trim .git at the end
                    def actualUrl = env.GIT_URL.replaceAll('https://x-token-auth:[^@]+@', '').replaceAll("\\.git\$", "")

                    // Print URLs for debugging
                    echo "Normalized Expected Git URL: ${expectedUrl}"
                    echo "Normalized Actual Git URL: ${actualUrl}"

                    // Check if the normalized actual URL matches the expected URL
                    if (!actualUrl.equals(expectedUrl)) {
                        error "This pipeline is configured to run for ${expectedUrl} only. Found URL: ${actualUrl}"
                    }

                    // Validate the branch name
                    if (!["staging", "main"].contains(env.BRANCH_NAME)) {
                        error "Branch ${env.BRANCH_NAME} is not permitted to deploy. Only 'staging' and 'main' are allowed."
                    }
                }
            }
        }
        stage('Set Branch Specific Variables') {
            steps {
                script {
                    if (env.BRANCH_NAME == 'staging') {
                        env.DEPLOY_URL = 'https://stage.ziti.io'
                        env.IMAGE_NAME = 'staging-app-ziti'
                        env.SERVICE = 'staging-app-ziti'
                        env.ENV_FILE_CREDENTIALS_ID = '85b6802a-38c8-4825-a043-0cbc55517e07'
                    } else if (env.BRANCH_NAME == 'main') {
                        env.DEPLOY_URL = 'https://ziti.io'
                        env.IMAGE_NAME = 'main-app-ziti'
                        env.SERVICE = 'main-app-ziti'
                        env.ENV_FILE_CREDENTIALS_ID = '4853f2b5-af66-45e7-915f-3ce98eb89f14'
                    }
                }
            }
        }
        stage('Pre-Check') {
            steps {
                script {
                    env.START_TIME = new Date().time
                }
                sh 'docker --version'
            }
        }
        stage('Checkout Source Code') {
            steps {
                git credentialsId: "${APP_CREDENTIALS_ID}", url: "${APP_REPO_URL}", branch: "${env.BRANCH_NAME}"
            }
        }
        stage('Checkout Docker Compose') {
            steps {
                dir('docker-compose') {
                    git credentialsId: "${DOCKER_COMPOSE_CREDENTIALS_ID}", url: "${DOCKER_COMPOSE_REPO_URL}", branch: "${env.BRANCH_NAME}"
                }
            }
        }
        stage('Create .env File') {
            steps {
                withCredentials([file(credentialsId: "${env.ENV_FILE_CREDENTIALS_ID}", variable: 'ENV_FILE')]) {
                    dir('docker-compose') {
                        sh 'cp $ENV_FILE .env'
                    }
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${env.IMAGE_NAME}:latest ."
                    sh "docker tag ${env.IMAGE_NAME}:latest ${env.IMAGE_NAME}:${env.BUILD_ID}"
                }
            }
        }
        stage('Redeploy Service') {
            steps {
                script {
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
                if (["staging", "main"].contains(env.BRANCH_NAME)) {
                    // Check the build result and set the BUILD_STATUS accordingly
                    if (currentBuild.result == null || currentBuild.result == 'SUCCESS') {
                        BUILD_STATUS = 'Success'
                        color = '#36A64F'
                    } else {
                        BUILD_STATUS = 'Failed'
                        color = '#FF0000'
                    }

                    // Set end time and calculate duration
                    def endTime = new Date().time
                    def duration = env.START_TIME ? (endTime - Long.parseLong(env.START_TIME)) / 1000 : 'N/A'
                    def jobUrl = "${env.JENKINS_URL}job/ziti.io/job/${env.BRANCH_NAME}/${env.BUILD_NUMBER}/redirect"
                    
                    // Update the build status dynamically based on the result
                    BUILD_STATUS = currentBuild.result ?: 'Success'
                    
                    // Prepare message
                    def message = "${env.DEPLOY_URL} - #${env.BUILD_NUMBER} ${BUILD_STATUS} after ${duration} sec <${jobUrl}|(Open)>"

                    // Send Slack notification
                    slackSend (
                        color: color,
                        message: message
                    )
                }
            }
        }
    }
}
