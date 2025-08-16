<?php

namespace Database\Factories;

use App\Models\Roles;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class RolesFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Roles::class;
    protected $forUserId;
    protected $stateUserId;
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        // The static array will persist in memory during one user’s role creation
        static $assignedRoles = [];

        // Reset the assigned roles when creating for a new user
        if (!isset($this->forUserId) || $this->forUserId !== $this->stateUserId) {
            $assignedRoles = [];
            $this->stateUserId = $this->forUserId ?? null;
        }

        $roles = ["Author", "Editor", "Subscriber", "Administrator"];

        // Filter roles to only those not yet assigned
        $availableRoles = array_diff($roles, $assignedRoles);

        // Pick one available role
        $role = $this->faker->randomElement($availableRoles);

        // Remember that this role is taken for this user
        $assignedRoles[] = $role;

        return [
            'user_id' => $this->forUserId ?? User::factory(),
            'role' => $role,
        ];
    }
    public function forUser($userId)
    {
        $this->forUserId = $userId;
        return $this->state([
            'user_id' => $userId
        ]);
    }
}
