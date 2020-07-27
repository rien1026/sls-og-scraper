# sls-og-scraper
It's simple og scraper by Serverless framework.
with Typescript, Node, AWS Lambda.

## Usage
### 1. Prefafe AWS Account for Serverless Framework.
https://github.com/rien1026/document/blob/master/ServerlessWithAWS.md

### 2. Install Serverless Framework.
```
npm i -g serverless
```
### 3. Deploy
```
sls deploy
```
### 4. Usage
```
METHOD : POST
URL : https://[your-amazon-lambda-endpoint]/dev/ogs
Body :
 - url
### Postman Example
![POSTMAN Example](https://csy-image-uploader-bucket.s3.ap-northeast-2.amazonaws.com/image/og-scraper-usage-example.PNG)
