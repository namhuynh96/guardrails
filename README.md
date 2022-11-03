# Introduction

The app runs on NodeJS, ReactJS, MongoDB Atlas and Typescript

# First step:

1. Add .env file to /api, the content of .env is in the form submission

# Steps to start the app with docker-compose

1. Run `docker-compose build --no-cache`

- To install all packages and create backend server in typescript.

2. Run `docker-compose up`

- Start all the services and can go to http://localhost:3000 to start the app

# To run services individually

- api: `cd api` -> `npm install` -> `npx tsc` (to build /dist for typescript version) -> `npm start`

- dashboard: `cd dashboard` -> `npm install` -> `npm start`

# To test the doashboards with unit test

- `cd dashboard` and run `npm run test`
