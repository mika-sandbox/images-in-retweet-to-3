# images-in-retweet-to-3

Save images that include in retweet to Amazon S3.


## Environment Variables

| Variable                      | Description                 | Example |
| ----------------------------- | --------------------------- | ------- |
| `TWITTER_CONSUMER_KEY`        | Twitter Consumer Key        | `...`   |
| `TWITTER_CONSUMER_SECRET`     | Twitter Consumer Secret     | `...`   |
| `TWITTER_ACCESS_TOKEN`        | Twitter Access Token        | `...`   |
| `TWITTER_ACCESS_TOKEN_SECRET` | Twitter Access Token Secret | `...`   |
| `AMAZON_S3_BUCKET_NAME`       | Amazon S3 Bucket Name       | `...`   |


## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
