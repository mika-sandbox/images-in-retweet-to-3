#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { ImagesInRetweetToS3Stack } from '../lib/images-in-retweet-to-s3-stack';

const app = new cdk.App();
new ImagesInRetweetToS3Stack(app, 'ImagesInRetweetToS3Stack');
app.run();
