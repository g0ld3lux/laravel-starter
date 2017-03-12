<?php

use Illuminate\Database\Seeder;
use App\Models\User;


class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \Bouncer::seeder(function () {
        \Bouncer::allow('admin')->to(['ban-user', 'add-user', 'delete-user', 'view-user', 'edit-user']);
        \Bouncer::allow('user')->to('update-profile');
        });

        $user = User::create([
            'email' => 'admin@laravel.dev',
            'first_name' => 'Taylor',
            'last_name' => 'Otwell',
            'password' => 'password'
        ]);
        \Bouncer::assign('admin')->to($user);

    }
}
