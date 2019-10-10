# Hurricane-Helper

## Demo (requires login)

1. [Open the Dashboard](https://d24ievhur353et.cloudfront.net/dashboard) and log into Connect.
    - If you are not logged in yet watch for a popup.
        - This may be in another tabbed or blocked by your popup blocker.
    - Allow and whitelist the popup
    - Log in with your Amazon Connect credentials (different from AWS)
    - Once logged in you can close the popup and reload the dashboard (if needed)
2. Place a call to 650-388-9214
    - It will go through the regular prompts - if you press 2 (need help) it should route to the soft-phone

(there is a way to make the log in screen appear in the dashboard, we didnt bother implementing that for hackathon)

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
