PROFILE="hackathon"
REGION="us-east-1"

CLIENT="hackathon"
PROJECT="hurricane-helper"
ENVIRONMENT="dev"

aws cloudformation deploy \
 --template-file template.yml \
 --stack-name $CLIENT-$PROJECT-$ENVIRONMENT \
 --parameter-overrides \
    Client=$CLIENT \
    Project=$PROJECT \
    Environment=$ENVIRONMENT \
    DefaultTtl=5 \
    MinTtl=5 \
    MaxTtl=5 \
 --tags \
    Client=$CLIENT \
    Project=$PROJECT \
    Environment=$ENVIRONMENT \
 --capabilities CAPABILITY_IAM \
 --profile=$PROFILE \
 --region=$REGION

#  aws cloudformation update-stack --stackname svt-app-dev  
#     --template-body file:///some/local/path/templates/startmyinstance.json 
#     --parameters file:///some/local/path/params/startmyinstance-parameters.json