# Meowgle

Meowgle is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The design is based on [Google](https://www.google.com).


## Objectives

Study [TheCatAPI](https://developers.thecatapi.com/) documentation and implement the following:

- Create a React app with 2 pages: Home Page & Single Cat Page
- Using a `<Select />` input, allow the user to choose from a breed of cats which should then load from the API
- Add a 'load more' button to load images of cats that have not already loaded. The button should disappear once no more cats are retrieved
- When selecting a different breed, the previous images should be cleared and replaced with the new images
- Add a link to the cat on the Single Cat Page and show various information about it from the API
- A back button on the Single Cat Page which should take the user back to the previous breed with the images loaded
- Handle API exceptions with the following: "Apologies but we could not load new cats for you at this time! Miau!"


## Installation

First, install dependencies and then run the development server

```bash
npm install
# and
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## API Key

For the API requests to run successfully, you must be authenticated with an API Key.

Simply sign up for a free API Key from [TheCatAPI](https://developers.thecatapi.com/) and add it a new .env.local file with the name `API_KEY`.


## Technology

The following tools were used to create this project:

- NextJS (App Router) - [Next.js](https://nextjs.org/)
- Tailwind - [Tailwind](https://tailwindcss.com/)
- shadcn\ui - [shadcnui](https://ui.shadcn.com/)
- SWR - [SWR](https://swr.vercel.app/)
- Figma (Logo, Icons) - [Figma](https://www.figma.com/)


## Demo

A working version is available here:

[Meowgle](https://meowgle.vercel.app/)
