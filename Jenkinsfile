pipeline {
    agent any
    environment {
        dockerhubrepo ="ykkupakkin/jokester"
        dockeruser="ykku-docker"
        dockerImage = ""
        appname="jkstr"
        envname = "Jkstr-env"
        bucketname= "elasticbeanstalk-eu-west-3-124429370407"
    }
    stages {
        stage('Install dependecies') {
            steps {
                sh 'npm --version'
                sh 'npm i'
                sh 'echo "Anton suited up"'
                sh 'npm test'
                sh 'echo "Anton sweeped the code"'
            }
        }
        stage('Deploy to Dockerhub') {
            steps {
                script{
                image = docker.build("ykkupakkin/jokester")
                }
                script{
                  docker.withRegistry('', "ykku-docker"){
                  image.push()
                  }
                }
                sh 'echo "Anton deployed to Docker"'
            }
        }
        stage('Deploy to ElasticBeanstalk') {
            steps {
                withAWS(credentials:"ykku-aws", region:"eu-west-3") {
                    sh 'aws s3 cp ./dockerrun.aws.json s3://${bucketname}/$BUILD_ID/dockerrun.aws.json --region eu-west-3'
                    sh 'aws elasticbeanstalk create-application-version \
                    --application-name "${appname}" \
                    --version-label "$BUILD_ID" \
                    --source-bundle S3Bucket="${bucketname}",S3Key="$BUILD_ID/dockerrun.aws.json" \
                    --auto-create-application --region "eu-west-3"'
                    sh 'aws elasticbeanstalk update-environment --region "eu-west-3" --application-name "${appname}" --environment-name "${envname}"'
                }
                sh 'echo "Elasticbeanstalk deployed'
            }
        }
    }
}