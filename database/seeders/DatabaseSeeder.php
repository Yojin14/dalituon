<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create test learner user for Dalituon
        User::firstOrCreate(
            ['email' => 'learner@example.com'],
            [
                'name' => 'Test Learner',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
            ]
        );

        // Also create the original test user
        User::firstOrCreate(
            ['email' => 'test@example.com'],
            [
                'name' => 'Test User',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
            ]
        );
    }
}
