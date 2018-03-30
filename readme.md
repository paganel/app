# open form.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## How to use

The easiest way is to deploy an instance to Heroku.

If you want to deploy it on your own terms. Install all dependencies:

```yarn install```

Copy the `.env.example` to a new file `.env` and replace the settings accordingly (an mongodb instance is necessary).

Start it via:

```yarn start```

## Setup via the application

If you open the index page the app will guide you through a setup if necessary.

1. Connect mongodb with the MONGODB_URI process env (not necessary if you are using e.g. the mlab sandbox Heroku add-on).

2. Set a password for the default user. There is no possibility to register, so in case you forget the password, you must reset it via the database.
