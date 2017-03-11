<?php

$api = app('Dingo\Api\Routing\Router');


/*
|--------------------------------------------------------------------------
| User Api Auth Protect Route
| Use Binding for Route Model Binding
|--------------------------------------------------------------------------
|
*/

$api->version('v1',['middleware' => ['api.auth', 'bindings'], 'scopes' => ['read_user_data']], function ($api) {
        $api->get('users', ['as' => 'users.index', 'uses' => 'Api\V1\Users\Controllers\UsersController@index']);
        $api->get('users/{id}', ['as' => 'users.show', 'uses' => 'Api\V1\Users\Controllers\UsersController@show']);
});

/*
|--------------------------------------------------------------------------
| Auth Api
|--------------------------------------------------------------------------
|
*/
$api->version('v1', function ($api) {
$api->group(['prefix' => 'auth'], function($api) {
        $api->post('signup', 'Api\V1\Auth\Controllers\SignUpController@signUp');
        $api->post('login', 'Api\V1\Auth\Controllers\LoginController@login');
        $api->post('recovery', 'Api\V1\Auth\Controllers\ForgotPasswordController@sendResetEmail');
        $api->post('reset', 'Api\V1\Auth\Controllers\ResetPasswordController@resetPassword');
    });
});
