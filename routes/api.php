<?php

$api = app('Dingo\Api\Routing\Router');



/*
|--------------------------------------------------------------------------
| Our Main Api Domain
| Avoid Showing the Default Site Content 
|--------------------------------------------------------------------------
|
*/
$api->version('v1', function ($api) {
$api->get('/', ['as' => 'api.index', 'uses' => 'Api\DomainController@index']);
});

/*
|--------------------------------------------------------------------------
| Api Auth - Makes the Route Protected , you can verify it using artisan api:routes
| JWT Auth - This will check the header and query string (as explained above) for the presence of a token
| Use Bindings for Route Model Binding
|--------------------------------------------------------------------------
|
*/
$api->version('v1',['middleware' => ['api.auth', 'bindings','jwt.auth'], 'scopes' => ['read_user_data']], function ($api) {
        $api->get('users', ['as' => 'users.index', 'uses' => 'Api\V1\Users\Controllers\UsersController@index']);
        $api->get('users/{id}', ['as' => 'users.show', 'uses' => 'Api\V1\Users\Controllers\UsersController@show']);
});

/*
|--------------------------------------------------------------------------
| Auth Api , For Guest
|--------------------------------------------------------------------------
|
*/
$api->version('v1', function ($api) {
$api->group(['prefix' => 'auth'], function($api) {
        $api->post('signup', 'Api\V1\Auth\Controllers\SignUpController@signUp');
        $api->get('check', 'Api\V1\Auth\Controllers\LoginController@check');
        $api->get('logout', 'Api\V1\Auth\Controllers\LoginController@logout');
        $api->post('login', 'Api\V1\Auth\Controllers\LoginController@login');
        $api->post('recover', 'Api\V1\Auth\Controllers\ForgotPasswordController@sendResetEmail');
        $api->post('reset', 'Api\V1\Auth\Controllers\ResetPasswordController@resetPassword');
    });
});
