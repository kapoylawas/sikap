<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    public function index() 
    {
        //get roles
        $roles = Role::when(request()->q, function($roles) {
            $roles = $roles->where('name', 'like', '%'. request()->q . '%');
        })->with('permissions')->latest()->paginate(5);
        
        //append query string to pagination links
        $roles->appends(['q' => request()->q]);

        return inertia('Admin/Roles/Index', [
            'roles' => $roles
        ]);
    }

    public function create()
    {
        //get permission all
        $permissions = Permission::all();

        //render with inertia
        return inertia('Admin/Roles/Create', [
            'permissions' => $permissions,
        ]);
    }

    public function store(Request $request)
    {
        /**
         * Validate request
         */
        $this->validate($request, [
            'name'          => 'required',
            'permissions'   => 'required',
        ]);

        //create role
        $role = Role::create(['name' => $request->name]);

        //assign permissions to role
        $role->givePermissionTo($request->permissions);

        //redirect
        return redirect()->route('admin.roles.index');
    }

    public function edit(Request $request, $id)
    {
        $permissions = Permission::when(request()->q, function($permissions) {
            $permissions = $permissions->where('name', 'like', '%'. request()->q . '%');
        })->latest()->paginate(10);
        //get role
        $role = Role::with('permissions')->findOrFail($id);

        
        //append query string to pagination links
        $permissions->appends(['q' => request()->q]);

        //render with inertia
        return inertia('Admin/Roles/Edit', [
            'role'          => $role,
            'permissions'   => $permissions,
        ]);
    }

    public function update(Request $request, Role $role)
    {
        /**
         * validate request
         */
        $this->validate($request, [
            'name'          => 'required',
            'permissions'   => 'required',
        ]);

        //update role
        $role->update(['name' => $request->name]);

        //sync permissions
        $role->syncPermissions($request->permissions);

        //redirect
        return redirect()->route('admin.roles.index');
    }

    public function destroy($id)
    {
        //find role by ID
        $role = Role::findOrFail($id);

        //delete role
        $role->delete();

        //redirect
        return redirect()->route('admin.roles.index');
    }

}
