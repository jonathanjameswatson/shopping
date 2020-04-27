# shopping app

> A simple shopping list web app

## Features

This web app lets you create and order sections of a shop. Items can then be added to a shopping list and be automatically ordered based on which section they are in. Access to the app is limited by a password and one set of items and sections can be saved and loaded from a server.

## Setup

Make sure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed.

```bash
$ git clone https://github.com/jonathanjameswatson/shopping.git # or clone your own fork
$ cd kwzz
$ yarn install
```

See the [database section](#database) for setting up the database.

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

## Environment variables

Set SHOPPING_JWT_SECRET to a secret key before deploying the web app in production.
Set SHOPPING_MAIN_PASSWORD to the password needed to access the web app.
Set SHOPPING_DB_CONNECTION_STRING to the connection string for the MongoDB connection used.

## Database

The database used for this web app uses MongoDB. Set up a database with the name "shopping" and a capped collection also called "shopping". Set the SHOPPING_DB_CONNECTION_STRING to the database cluster's connection string.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Attributions

Icons in this app are from [Twemoji](https://twemoji.twitter.com/) and [Material Design Icons](https://materialdesignicons.com/).
