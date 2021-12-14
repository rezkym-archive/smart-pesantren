<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

/* Model */
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->adminSeeder();
    }

    /**
     * adminSeeder
     * 
     * @return object
     */
    protected function adminSeeder()
    {
        $this->admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@tes.com',
            'password' => Hash::make('123'),
        ]);

        $this->admin->assignRole('admin');

        return $this;
    }
}
