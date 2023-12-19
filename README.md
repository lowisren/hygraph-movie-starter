# Hygraphlix movie streaming platform starter 
This project is a starter template for Hygraph. It combines content from Hygraph, Federate This Demo API, OMDB, Mux, Next.js 14, NextUI, and Tailwind CSS

## Clone Hygraph project
[![Clone movie project](https://hygraph.com/button)](https://app.hygraph.com/clone/60a5f60969474157a5bb6cec6452e833?name=Hygraph%20Movie%20Platform%20Starter)

## Installation methods

Option 1: One-click Deployment

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/lowisren/hygraph-movie-starter)

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flowisren%2Fhygraph-movie-starter&env=HYGRAPH_ENDPOINT)


Option 2: Manual clone

1. Clone this repo: ```npx degit https://github.com/lowisren/hygraph-movie-starter/```
2. Navigate to the directory and run ```npm install```
3. Run ```npm run dev```
4. Manually connect Netlify(using the netlify.toml template) when ready to deploy

## Running the project

The project needs a Hygraph content API endpoint with matching content and schema. Add the endpoint to `.env.local` as `HYGRAPH_ENDPOINT`
1. Copy the `.env.sample` file, add your endpoint and save as `.env.local` in the main project directory
2. Run ```npm run dev```

## Connecting Mux
1. Create a Mux account or Log into an existing account: https://dashboard.mux.com/signup 
2. Install the Mux app in your Hygraph project: https://app.hygraph.com/apps/mux/new
3. Create access tokens, follow docs: https://hygraph.com/docs/integrations/connect-mux

