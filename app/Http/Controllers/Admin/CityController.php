<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\City;
use Illuminate\Http\Request;

class CityController extends Controller
{
    public function index()
    {

        $citys = City::when(request()->q, function ($citys) {
            $citys = $citys->where('name', 'like', '%' . request()->q . '%');
        })->latest()->paginate(5);

        $citys->appends(['q' => request()->q]);

        return inertia('Admin/City/Index', [
            'citys' => $citys,
        ]);
    }

    public function create()
    {
        //return inertia
        return inertia('Admin/City/Create');
    }

    public function store(Request $request)
    {
        /**
         * validate
         */
        $this->validate($request, [
            'name'          => 'required|unique:cities',
        ]);

        //create category
        City::create([
            'name'          => $request->name,
        ]);

        //redirect
        return redirect()->route('admin.citys.index');
    }

    public function edit($id)
    {
        //get color
        $citys = City::findOrFail($id);

        //render with inertia
        return inertia('Admin/City/Edit', [
            'citys'          => $citys,
        ]);
    }

    public function update(Request $request, City $city)
    {
        /**
         * validate request
         */
        $this->validate($request, [
            'name'          => 'required',
        ]);

        //update city
        $city->update(['name' => $request->name]);

        //redirect
        return redirect()->route('admin.citys.index');
    }

    public function destroy($id)
    {
        //find role by ID
        $role = City::findOrFail($id);

        //delete role
        $role->delete();

        //redirect
        return redirect()->route('admin.citys.index');
    }
}
