# Laravel Element Ui

Laravel Project with Vue2 and [Element](https://github.com/ElemeFE/element)

## Technology In Use

 - [x] Uses Laravel Latest 5.4

 - [x] Uses Vue 2 Latest 2.2

 - [x] Uses Various ES6 Presets

 - [x] ES Lint Ready

 - [x] Uses Element UI

 - [x] Vuex State Management Ready

 - [x] SPA Using Vue Router

 - [x] JWT Auth

 - [x] Dingo Api

 - [x] ACL Ready

 - [x] Webpack/Laravel Mix For Assets Management

 - [x] CORS

## Dev Machine Requirements :

 - [x] Prefered OS Windows 10

 - [x] WSL Bash on Ubuntu

 - [x] VSCODE for Various Extension to help us In Our Development
 
 - [x] Windows Docker Native for Easily provisioning Servers

## List of VSCODE Extensions
 - Auto Rename Tag
 - Docker
 - ESLint
 - HTML Class Suggestions
 - HTML CSS Support
 - HTML Snippets
 - Instant Markdown
 - ES6 Snippets
 - Laravel 5 Snippets
 - Laravel Blade Snippets
 - Material Theme
 - Vetur
 - VueHelper

## Installation

Install all Dependencies
```
git clone https://github.com/g0ld3lux/laravel-element-ui
composer install
npm install / yarn install
```

## Setting Your .env

Configure Your .env 
Most Notably Set yor Mail Driver
```
APP_ENV=local
APP_NAME="Laravel Dev"
APP_KEY=base64:ExExqfImrGk+wFJg/IrePYV0yrES5f84ojB7dBvvczE=
APP_DEBUG=true
APP_LOG_LEVEL=debug
APP_URL=http://localhost
APP_DOMAIN=laravel.dev

API_DEBUG=true
API_STANDARDS_TREE=x
API_SUBTYPE=app
API_PREFIX=api
API_VERSION=v1
API_NAME="My API"
SIGN_UP_RELEASE_TOKEN=true
PASSWORD_RESET_RELEASE_TOKEN=true
JWT_SECRET=aYLINRYJugcmNYoZ8xDVJUh2EcibPduu

DB_CONNECTION=sqlite
BROADCAST_DRIVER=log
CACHE_DRIVER=file
SESSION_DRIVER=file
QUEUE_DRIVER=sync

MAIL_DRIVER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_DRIVER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=
MAIL_PASSWORD=
```

## Dev Workflow

Enable Hot Reloading & Browserync

```
npm run hot
npm run watch
```


## Migrations

Use Sqlite For Local Dev

```
php artisan migrate --seed
```

For Production You May Want to Use MYSQL Or PostgreSQL

Visit `http://localhost:3000`, It works!

START CODING! Beatiful and Elegant Apps!



## Jobs

Adding Task Scheduler Using Cron job
```
crontab -e
```
Add this Line of Code

```

* * * * * php /path/to/artisan schedule:run >> /dev/null 2>&1
```


### Possible Error

Note: You need to Set Your Mail Driver in .env

```
"message": "Expected response code 250 but got code \"530\", with message \"530 5.7.1 Authentication required\r\n\"",
  "code": 530,
  "status_code": 500,
  
```
