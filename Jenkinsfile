pipeline {
  agent {
    docker {
      image 'node:16-alpine'
      args '-v $HOME/.npm:/root/.npm' // optional caching
    }
  }

  environment {
    PROJECT_DIR = 'digital-watch'
  }

  stages {

    stage('Checkout Code') {
      steps {
        checkout scm
      }
    }

    stage('Install Packages') {
      steps {
        sh '''
          export NPM_CONFIG_CACHE=/tmp/npm-cache
          npm install live-server
        
        
        '''
      }
    }
                    
            
                    

    stage('Check node & NPM') {
      steps {
        sh '''
           node -v
           npm -v
        
        '''
      }
    }

    stage('Install Live Server' ) {
      steps {
        sh '''
          npm config set cache "$HOME/.npm"
          npm install live-server
          npx live-server &
           
        '''
      }
    }

    stage('Syntax Check (Optional)') {
      steps {
        sh '''
          echo "Checking JavaScript files..."
          if ls *.js >/dev/null 2>&1; then
            npx eslint *.js || true
          else
            echo "No JS files found"
          fi
        '''
      }
    }

    stage('Archive Files') {
      steps {
        archiveArtifacts artifacts: '**/*', fingerprint: true
      }
    }

    // Optional: Serve for preview (locally, not useful in remote CI without GUI)
    // stage('Serve Locally') {
    //   steps {
    //     sh 'live-server --port=8080'
    //   }
    // }

  }

  post {
    success {
      echo 'Pipeline completed successfully.'
    }
    failure {
      echo 'Pipeline failed.'
    }
  }
}

