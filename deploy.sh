#!/usr/bin/env bash
chmod +x deploy.sh
# more bash-friendly output for jq
JQ="jq --raw-output --exit-status"

configure_aws_cli(){
	aws --version
	aws configure set default.region eu-central-1
	aws configure set default.output json
}

deploy_cluster() {

    family="cenavita-docker"

    make_task_def
    register_definition
    if [[ $(aws ecs update-service --cluster cenavita-docker-cluster --service cenavita_docker_service --task-definition $revision | \
                   $JQ '.service.taskDefinition') != $revision ]]; then
        echo "Error updating service."
        return 1
    fi

	# $taskname = $(aws ecs list-tasks --cluster cenavita-docker-cluster --service-name cenavita_docker_service)
	
	# echo "Task name: $taskname"

	# aws ecs stop-task --cluster cenavita-docker-cluster --task $taskname
}

make_task_def() {
	task_template='[
		{
			"name": "cenavita-docker",
			"image": "017330959856.dkr.ecr.eu-central-1.amazonaws.com/cenavita-main-repo:latest",
			"essential": true,
			"memory": 128,
			"cpu": 1,
			"portMappings": [
				{
					"containerPort": 3000,
					"hostPort": 80
				}
			]
		}
	]'
	
	task_def=$(printf "$task_template")
}

push_ecr_image(){
	eval $(aws ecr get-login --region eu-central-1)
	docker push 017330959856.dkr.ecr.eu-central-1.amazonaws.com/cenavita-main-repo:latest
}

register_definition() {

    if revision=$(aws ecs register-task-definition --container-definitions "$task_def" --family $family | $JQ '.taskDefinition.taskDefinitionArn'); then
        echo "Revision: $revision"
    else
        echo "Failed to register task definition"
        return 1
    fi

}

configure_aws_cli
push_ecr_image
deploy_cluster