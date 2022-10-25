post {
    success {
        echo 'success!'
        slackSend color: "#11cd4b", channel: "#sqa-challenge-isaias", message: "*Build Passed*\n Job: ${env.JOB_NAME}\n Build: ${env.BUILD_NUMBER}\n URL: ${env.BUILD_URL}"
    }
    failure {
        echo 'marked as failure'
        slackSend color: "#F50407", channel: "#sqa-challenge-isaias", message: "*Build Failed*\n Job: ${env.JOB_NAME}\n Build: ${env.BUILD_NUMBER}\n URL: ${env.BUILD_URL}"
    }
    unstable {
        echo 'marked as unstable'
        slackSend color: "#df6805", channel: "#sqa-challenge-isaias", message: "*Build Unstable*\n Job: ${env.JOB_NAME}\n Build: ${env.BUILD_NUMBER}\n URL: ${env.BUILD_URL}"
    }
    aborted {
        echo 'aborted'
        slackSend color: "#f3f024", channel: "#sqa-challenge-isaias", message: "*Build Aborted*\n Job: ${env.JOB_NAME}\n Build: ${env.BUILD_NUMBER}\n URL: ${env.BUILD_URL}"        
    }
}