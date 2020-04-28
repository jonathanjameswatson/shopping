# shopping app

> A simple shopping list web app

## Features

This web app lets you create and order sections of a shop. Items can then be added to a shopping list and be automatically ordered based on which section they are in. This website can also set up to allow users with a password to save and load one shopping list on the server.

## Setup

Make sure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed.

```bash
$ git clone https://github.com/jonathanjameswatson/shopping.git # or clone your own fork
$ cd shopping
$ yarn install
```

[See this section for setting up saving and loading](setting-up-saving-and-loading).

## Usage

```bash
# To run in development at localhost:3000
$ yarn run dev

# To run in production at localhost:3000
$ yarn run build
$ yarn run deploy

# To generate a static SPA
$ yarn run generate
```

## Setting up saving and loading

To set up saving and loading, host this website on Netlify. Netlify needs the SHOPPING_JWT_SECRET environment variable set to a secret key before deploying the web app in production and the SHOPPING_MAIN_PASSWORD environment variable to the password needed to access saving and loading.

The database used for this web app uses MongoDB. Set up a database with the name "shopping" and a capped collection also named "shopping". Set the SHOPPING_DB_CONNECTION_STRING environment variable in Netlify to the database cluster's connection string.

## Website

[Visit the web app here.](https://shopping.jonathanjameswatson.com/)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Attributions

Icons in this app are from [Twemoji](https://twemoji.twitter.com/) and [Material Design Icons](https://materialdesignicons.com/).
