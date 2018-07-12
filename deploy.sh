#!/bin/bash

ECR="164201395711.dkr.ecr.ap-northeast-1.amazonaws.com/intern-my-web-app"
ECS_SERVICE="aws_ecs_service.service"
TAG="client-latest"
IMAGE_NAME="my-twitter-client"

echo "Start building images"
docker build -t $IMAGE_NAME .

echo "Tag and Push new image to ECR"
docker tag $IMAGE_NAME $ECR:$TAG
echo "Get Auth"
auth=$(aws ecr get-login --no-include-email)
$auth
echo "Push Image to ECR"
docker push $ECR:$TAG

echo "Destroy service"
cd /Users/nguyen.hoamy/workspace/hde-devops-training/tf/dev
#terraform destroy -auto-approve -target $ECS_SERVICE 

echo "Build up service"
terraform apply -auto-approve


