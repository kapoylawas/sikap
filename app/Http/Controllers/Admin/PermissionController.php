<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        //get permissions
        $permissions = Permission::when(request()->q, function ($permissions) {
            $permissions = $permissions->where('name', 'like', '%' . request()->q . '%');
        })->latest()->paginate(5);

        $permissions->appends(['q' => request()->q]);

        //return view
        return inertia('Admin/Permissions/Index', [
            'permissions'    => $permissions,
        ]);
    }
}
