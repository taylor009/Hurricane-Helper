# Hurricane-Helper

## Web App Hosting

```bash
cd web-stack
./deploy-dev.sh
```

## Client

VueJS Single Page Application using Amazon Connect Streams API

### Local Development

```bash
cd client
npm i
npm run serve
```

open browser ( chrome.. really.. ) and visit localhost:8080

### Client Deployment

This script will run a prod build and copy the code to AWS

```bash
npm run deploy
```

## Lambdas

Typescript code that executable by Amazon Connect. Using Serverless Framework.

### Lambdas Deployment

```bash
cd lambdas
npm i
npm run deploy-dev
```
