import * as cdk from "@aws-cdk/cdk";
import * as events from "@aws-cdk/aws-events";
import * as lambda from "@aws-cdk/aws-lambda";
import * as s3 from "@aws-cdk/aws-s3";

export class ImagesInRetweetToS3Stack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const event = new events.EventRule(this, `EventRule`, {
      ruleName: `images-in-retweet-to-s3-cron-event`,
      description: `ImagesInRetweetToS3 Experimental Project Scheduled Event for Lambda`,
      scheduleExpression: `cron(0/10 * * * ? *)`, // run on every 10 minutes
    });

    const task = new lambda.Function(this, `Task`, {
      code: lambda.Code.asset("./dist"),
      handler: "index.handler",
      memorySize: 512,
      timeout: 60,
      runtime: lambda.Runtime.NodeJS810,
      environment: {
        TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY,
        TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET,
        TWITTER_ACCESS_TOKEN: process.env.TWITTER_ACCESS_TOKEN,
        TWITTER_ACCESS_TOKEN_SECRET: process.env.TWITTER_ACCESS_TOKEN_SECRET,
        AMAZON_S3_BUCKET_NAME: process.env.AMAZON_S3_BUCKET_NAME,
      }
    });

    new s3.Bucket(this, `BucketStorage`, {
      bucketName: process.env.AMAZON_S3_BUCKET_NAME,
    });

    event.addTarget(task);
  }
}
