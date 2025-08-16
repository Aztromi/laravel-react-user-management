<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;

class UserService
{
    public function getUsersByRole(string $role)
    {
        return DB::table('users as u')
            ->join('roles as r', 'r.user_id', '=', 'u.id')
            ->where('r.role', $role)
            ->select('u.*', 'r.role as role_name')           // only select distinct users
            ->distinct()              // make it distinct
            ->orderBy('u.id', 'desc')
            ->get();
    }
}
