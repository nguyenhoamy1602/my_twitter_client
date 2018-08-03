#!/bin/bash

ECR="164201395711.dkr.ecr.ap-northeast-1.amazonaws.com/intern-my-web-app"
ECS_SERVICE="intern-my-frontend-service"
TAG="client-latest"
IMAGE_NAME="my-twitter-client"
DECORATOR="================================================================"

echo $DECORATOR
echo "Log in to AWS"
eval "$(shobo-aws-sts-cli -role-to-switch arn:aws:iam::164201395711:role/intern-devops-terraform)"

echo $DECORATOR
echo "Start building images"
docker build -t $IMAGE_NAME .

echo $DECORATOR
echo "Tag and Push new image to ECR"
docker tag $IMAGE_NAME $ECR:$TAG

echo $DECORATOR
echo "Get Auth"
auth=$(aws ecr get-login --no-include-email)
$auth

echo $DECORATOR
echo "Push Image to ECR"
docker push $ECR:$TAG

#echo "Destroy service"
#cd /Users/nguyen.hoamy/workspace/hde-devops-training/tf/dev
#terraform destroy -auto-approve -target $ECS_SERVICE 

#echo "Build up service"
#terraform apply -auto-approve

echo $DECORATOR
echo "Force new ECS service deployment"
aws ecs update-service --service $ECS_SERVICE --cluster intern-my-cluster --force-new-deployment
