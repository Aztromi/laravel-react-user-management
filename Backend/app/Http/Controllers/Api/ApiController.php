<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Roles;
use App\Models\User;
use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Support\Facades\Validator;

class ApiController extends Controller
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    protected $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function index()
    {
        $users = User::with('roles')
            ->orderBy('id', 'desc')
            ->get()
            ->map(function ($user) {
                return [    
                    'id' => $user->id,
                    'full_name' => $user->full_name,
                    'email' => $user->email,
                    'roles' => $user->roles->pluck('role'), // converts collection to array of role strings
                ];
            });

        return response()->json($users);
    }

    public function roles($role)
    {
        $users = $this->userService->getUsersByRole($role);
        return response()->json($users);
    }

    public function insertUser(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'full_name' => 'required|string|max:255',
            'email'     => 'required|email|unique:users,email',
            'roles'     => 'required|array|min:1',
            'roles.*'   => 'string|max:255'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation error',
                'errors'  => $validator->errors()
            ], 400);
        }

        $user = User::create([
            'full_name' => $request->full_name,
            'email'     => $request->email,
        ]);

        foreach ($request->roles as $roleName) {
            Roles::create([
                'user_id' => $user->id,
                'role'    => $roleName,
            ]);
        }

        return response()->json([
            'message' => 'User created successfully',
            'user'    => $user->load('roles'),
        ], 200);
    }
}
