<?php

namespace Database\Seeders;

use App\Models\Roles;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Factories\Sequence;

class UserSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory()
            ->count(5)
            ->has(
                Roles::factory()
                    ->count(4)
                    ->state(new Sequence(
                        ['role' => 'Author'],
                        ['role' => 'Editor'],
                        ['role' => 'Subscriber'],
                        ['role' => 'Administrator'],
                    ))
            )
            ->create();

        User::factory()
            ->count(5)
            ->has(
                Roles::factory()
                    ->count(3)
                    ->state(new Sequence(
                        ['role' => 'Author'],
                        ['role' => 'Editor'],
                        ['role' => 'Subscriber'],
                        ['role' => 'Administrator'],
                    ))
            )
            ->create();

        User::factory()
            ->count(5)
            ->has(
                Roles::factory()
                    ->count(5)
                    ->state(new Sequence(
                        ['role' => 'Author'],
                        ['role' => 'Editor'],
                        ['role' => 'Subscriber'],
                        ['role' => 'Administrator'],
                    ))
            )
            ->create();

        User::factory()
            ->count(5)
            ->has(
                Roles::factory()
                    ->count(1)
                    ->state(new Sequence(
                        ['role' => 'Author'],
                        ['role' => 'Editor'],
                        ['role' => 'Subscriber'],
                        ['role' => 'Administrator'],
                    ))
            )
            ->create();
    }
}
