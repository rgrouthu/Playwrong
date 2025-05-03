pipeline {
  agent none

  stages {
    stage('Run Playwright Tests in Parallel') {
      parallel {
        Shard1 {
          agent any
          steps {
            checkout scm
            bat 'npm ci'
            bat 'npx playwright install --with-deps'
            bat 'npx playwright test --shard=1/3'
          }
        }

        Shard2 {
          agent any
          steps {
            checkout scm
            bat 'npm ci'
            bat 'npx playwright install --with-deps'
            bat 'npx playwright test --shard=2/3'
          }
        }

        Shard3 {
          agent any
          steps {
            checkout scm
            bat 'npm ci'
            bat 'npx playwright install --with-deps'
            bat 'npx playwright test --shard=3/3'
          }
        }
      }
    }
  }
}
