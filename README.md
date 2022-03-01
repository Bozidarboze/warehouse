# Warehouse demo app!

## Getting started

Clone this repository to your local machine.

### Client side

### Change link to server

1. `cd warehouse-client/src/redux/app`
2. Open `sagas.js`. Comment Heroku `SERVER_URL` and uncomment local `SERVER_URL`.

### Start App

1. `cd warehouse-client`
2. `npm install`
3. `npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

### Default user to sign in

Email: admin@gmail.com
Password: 123

## API

### Database config

1. `cd warehouse-api/db`
2. Comment `const db = new Sequelize(process.env.CLEARDB_DATABASE_URL);`
3. Uncomment the commented local config and update db values.

### Start server

1. `cd warehouse-api`
2. `npm install`
3. `npm start`

Runs the server in the development mode.

## ER Diagram

![diagram](https://i.imgur.com/brAg14d.png)
