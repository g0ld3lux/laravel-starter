<?php

namespace Api\V1\Auth\Controllers;

use Tymon\JWTAuth\JWTAuth;
use App\Http\Controllers\Controller;
use Api\V1\Auth\Requests\LoginRequest;
use Tymon\JWTAuth\Exceptions\JWTException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

class LoginController extends Controller
{
    public function login(LoginRequest $request, JWTAuth $auth)
    {
        $credentials = $request->only(['email', 'password']);

        try {
            $token = $auth->attempt($credentials);

            if(!$token) {
                throw new AccessDeniedHttpException();
            }

        } catch (JWTException $e) {
            throw new HttpException(500);
        }
        return response()
            ->json([
                'status' => 'ok'
            ])->header('Authorization','Bearer ' . $token);
    }

    public function check(JWTAuth $auth)
    {
        try {
            $auth->parseToken()->authenticate();
        } catch (JWTException $e) {
            return response(['authenticated' => false]);
        }
        return response(['authenticated' => true]);
    }

    public function logout(JWTAuth $auth)
    {

        try {
            $token = $auth->getToken();
            if ($token) {
                $auth->invalidate($token);
            }

        } catch (JWTException $e) {
            return response()->json($e->getMessage(), 401);
        }
        return response()->json(['message' => 'Log out success'], 200);
    }
}