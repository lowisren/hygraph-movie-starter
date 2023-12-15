# Next.js & NextUI Template

This is a template for creating applications using Next.js 13 (app directory) and NextUI (v2).

## Technologies Used

- [Next.js 13](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## How to Use


### Use the template with create-next-app

To create a new project based on this template using `create-next-app`, run the following command:

```bash
npx create-next-app -e https://github.com/nextui-org/next-app-template
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).

# Hygraphlix movie streaming platform starter 
This project is a starter template for Hygraph. It combines content from Hygraph, Federate This Demo API, OMDB, Mux, Next.js 14, NextUI, and Tailwind CSS

## Installation methods

Option 1: One-click Deployment 

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/hygraph/hygraph-next-commerce-starter)

Option 2: Manual clone

1. Clone this repo: ```git clone https://github.com/hygraph/hygraph-next-commerce-starter```
2. Navigate to the directory and run ```npm install```
3. Run ```npm run dev```
4. Manually connect Netlify(using the netlify.toml template) when ready to deploy

## Running the project

The project needs a Hygraph content API endpoint with matching content and schema. Add the endpoint to `.env.local` as `HYGRAPH_ENDPOINT`
1. Copy the `.env.sample` file, add your endpoint and save as `.env.local` in the main project directory
2. Run ```npm run dev```