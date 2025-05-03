pipeline {
  agent none

  stages {
    stage('Run Playwright Tests in Parallel') {
      agent any
      steps {
        script {
          parallel (
            "Shard 1": {
              node {
                checkout scm
                bat 'npm ci'
                bat 'npx playwright install --with-deps'
                bat 'npx playwright test --shard=1/3'
              }
            },
            "Shard 2": {
              node {
                checkout scm
                bat 'npm ci'
                bat 'npx playwright install --with-deps'
                bat 'npx playwright test --shard=2/3'
              }
            },
            "Shard 3": {
              node {
                checkout scm
                bat 'npm ci'
                bat 'npx playwright install --with-deps'
                bat 'npx playwright test --shard=3/3'
              }
            }
          )
        }
      }
    }
  }
}
