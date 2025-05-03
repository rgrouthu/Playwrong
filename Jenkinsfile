pipeline {
  agent none

  stages {
    stage('Shard 1 of 3') {
      agent { label 'playwright-agent' }
      steps {
        checkout scm
        sh 'npm ci'
        sh 'npx playwright install --with-deps'
        sh 'npx playwright test --shard=1/3'
      }
    }

    stage('Shard 2 of 3') {
      agent { label 'playwright-agent' }
      steps {
        checkout scm
        sh 'npm ci'
        sh 'npx playwright install --with-deps'
        sh 'npx playwright test --shard=2/3'
      }
    }

    stage('Shard 3 of 3') {
      agent { label 'playwright-agent' }
      steps {
        checkout scm
        sh 'npm ci'
        sh 'npx playwright install --with-deps'
        sh 'npx playwright test --shard=3/3'
      }
    }
  }
}
