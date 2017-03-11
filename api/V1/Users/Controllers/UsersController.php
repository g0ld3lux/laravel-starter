<?php 

namespace Api\V1\Users\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Dingo\Api\Routing\Helpers;

Class UsersController extends Controller
{
    use Helpers;

    public function __construct()
    {
        $this->scopes(['read_user_data']);
    }

    public function index()
    {
        return User::all();
    }
   /**   
    * Show User
    *
    * Get a JSON representation choosen user.
    *
    * @Get("/api/users/")
    * @Versions({"v1"})
    */
    public function show($id)
    {
        try {
            return User::findOrFail($id);
        }catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e){
            $api=  app(\Dingo\Api\Http\Response\Factory::class);
          return $api->errorNotFound("Requested resource with id={$id} where not found.");
        }

    }
}