# Laravel Starter For SPA and REST API

[Laravel](https://laravel.com/) as Api Back End

[Vue](https://vuejs.org//) and [Element](https://github.com/ElemeFE/element) For Front END

## Implements the Following

 - [x] Uses Laravel Version [5.4]

 - [x] Uses Vue Version  [2.2]

 - [x] Uses Various ES6 Presets (.babelrc)

 - [x] ES Lint Ready (.eslintrc and styleint.config.js)

 - [x] Uses [Element](http://element.eleme.io/#/en-US) for UI

 - [ ] Vuex State Management Ready

 - [ ] SPA Using Vue Router

 - [x] [JWT Auth](https://github.com/tymondesigns/jwt-auth) (auth_scaffold : login,signup, recover,reset)

 - [x] [Dingo Api](https://github.com/dingo/api) (REST API)

 - [ ] ACL Ready using [Bouncer](https://github.com/JosephSilber/bouncer) 

 - [x] [Webpack](https://webpack.github.io/) / [Laravel Mix](https://github.com/JeffreyWay/laravel-mix) For Asset Management

 - [x] CORS

 - [ ] Vue Server Side Rendering

## Dev Machine Requirements :

 - [x] Prefered OS Windows 10/Linux/MacOS

 - [x] Terminal: WSL Bash on Ubuntu or Mintty

 - [x] VSCODE for Various Extension to help us In Our Development

 ### List of VSCODE Extensions

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

 
 - [x] Windows Docker Native for Easily provisioning Servers



## Installation

Install all Dependencies

```
git clone https://github.com/g0ld3lux/laravel-starter
composer install
npm install
php artisan key:generate
php artisan jwt:generate
```

## Setting Your .env


Note You May Choose 3 types of .env file

- .env.dev - basic (no need db uses sqlite, logs, filesystem) 
  
  Note: You Only Need to Set Here Your Mail Driver Preferabbly [Mailtrap.io](https://mailtrap.io/)

- .env.production - (all important ENV var is here that you need to set up in your production)

- .env.docker - if your using laradock or docker ***RECOMMENDED***

   


## Running Using the Basic .env.dev

### Add Your Mailtrap Credentials in .env

```
MAIL_DRIVER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=
MAIL_PASSWORD=

```


### Create Database in Sqlite

- Go to Database folder then

```
touch database.sqlite
```

### Log in Sqlite

```
sqlite3 database.sqlite
```


### Migrate and Seed

```
php artisan migrate --seed
```

### Serve Site on localhost:8000

```
php artisan serve
```

### Your Api End Point

```
localhost:8000/api/*
```


## Dev Workflow

- Note : I Assume you have NODE in your Machine as well as NPM 

### Enable Hot Reloading & Browserync

```
npm run hot
npm run watch
```

Note: npm run hot is on port 8080 , which is being proxy properly by laravel mix in your scripts

Whenever we change something in our vue files or js files in our resources then it is refresh

but if we want also browsersync then we also use npm run watch 

Which Refresh when you update your blade files

### Visit Site

```
localhost:3000 
```


## Laradock Workflow

### Folder Structuring

```
code
- laradock
- api
```

### Setting Your App Folder

- Edit docker-compose.yml

```
 applications:
        image: tianon/true
        volumes:

        - ../api/:/var/www/api //<-- Add Your Site Folder to be Shared
```

### Configuring Nginx

- Go to laradock/nginx/sites

```
cp sample.conf.example api.laravel.conf
```
Edit it to use api and laravel.dev as your Site Domain



```
server {

    listen 80;
    listen [::]:80;

    server_name api.laravel.dev laravel.dev;  // <-- Our App Domain
    root /var/www/api/public;  //<-- Our App Root Folder
    index index.php index.html index.htm;

    location / {
         try_files $uri $uri/ /index.php$is_args$args;
    }

    location ~ \.php$ {
        try_files $uri /index.php =404;
        fastcgi_pass php-upstream;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}

```

### Starting Server


```
docker-compose up -d nginx redis mysql beanstalkd
```

### Setting ENV

- [x] Use a .env.docker as your .env


### Task Scheduler


- Go to this folder

```
workspace/crontab/root
```

And Add your Cron Job
```
* * * * * php /var/www/api/artisan schedule:run >> /dev/null 2>&1
```

### Accessing Containers


#### SSH to Container Name

```
docker exec -it laradock_workspace_1
docker exec -it laradock_mysql_1
docker exec -it laradock_redis_1
```

#### Install PHP Quer Driver Extension at Workspace Container
- At your App folder
```
composer require pda/pheanstalk
```

#### Install Redis Driver Extension at Workspace Container
- At your App folder
```
composer require predis/predis
```


#### Migration at Workspace Container

- At your App folder
```
php artisan tinker
```


## Extras


Since it is Configure for laravel.dev/api/* for the basic .env.dev

just remove that route

```
// api/* ->remove this 
```

- editing hosts file
```
127.0.0.1 laravel.dev
127.0.0.1 api.laravel.dev
```

- creating DB inside a Docker Container
```
docker exec -it laradock_mysql_1
mysql -u root -p
password: root
create database api;
exit
```
## Visit Site and Api Endpoints

```
laravel.dev
api.laravel.dev
```

## Use Post Man To Test Endpoint

- Open [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en)

- add to header ,where YOUR_SUBTYPE is define in our .env (Use for Accessing Specific Api Version)

```
Accept: application/vnd.YOUR_SUBTYPE.v1+json
```

- Make Post Request to login

```
http://api.laravel.dev/auth/login
```

- Add to Body
```
email = admin@laravel.dev
password = password
```

- You will see Response something like this
```
{
  "status": "ok",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL2FwaS5sYXJhdmVsLmRldlwvYXV0aFwvbG9naW4iLCJpYXQiOjE0ODkzMzI1OTcsImV4cCI6MTQ4OTM5NzM5NywibmJmIjoxNDg5MzMyNTk3LCJqdGkiOiJjODMxNTMzZjkzMGFiOTkzMGExMzhkMGNkOTI5NGI3ZCJ9.3v-cGtXA-ySmL67pp4kZ4U4Mf3v7ge_CzUEdWIRKSeM"
}
```