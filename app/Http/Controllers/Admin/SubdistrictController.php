<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Subdistrict;
use Illuminate\Http\Request;

class SubdistrictController extends Controller
{
    public function index() {

        $subdistricts = Subdistrict::when(request()->q, function ($subdistricts) {
            $subdistricts = $subdistricts->where('name', 'like', '%' . request()->q . '%');
        })->with('city')->latest()->paginate(5);

        $subdistricts->appends(['q' => request()->q]);

        return inertia('Admin/Subdistrict/Index', [
            'subdistricts' => $subdistricts,
        ]);
    }

    public function create()
    {
        //get all city
        $cities = City::all();

        return inertia('Admin/Subdistrict/Create', [
            'cities' => $cities
        ]);
    }

    public function store(Request $request)
    {
        /**
         * Validate request
         */
        $this->validate($request, [
            'city_id'   => 'required',
            'name'   => 'required',
           
        ]);

        /**
         * Create kecamatan
         */
        Subdistrict::create([
            'city_id'   => $request->city_id,
            'name'   => $request->name,
        ]);

        //redirect
        return redirect()->route('admin.subdistricts.index');
    }

    public function edit($id)
    {
        //get color
        $subdistrict = Subdistrict::findOrFail($id);

        $cities = City::all();

        //render with inertia
        return inertia('Admin/Subdistrict/Edit', [
            'subdistrict'          => $subdistrict,
            'cities'          => $cities,
        ]);
    }

    public function update(Request $request, Subdistrict $subdistrict)
    {
        /**
         * validate request
         */
        $this->validate($request, [
            'city_id'          => 'required',
            'name'          => 'required',
        ]);

        //update city
        $subdistrict->update([
            'city_id' => $request->city_id,
            'name' => $request->name
        ]);

        //redirect
        return redirect()->route('admin.subdistricts.index');
    }

    public function destroy($id)
    {
        //find role by ID
        $subdistrict = Subdistrict::findOrFail($id);

        //delete role
        $subdistrict->delete();

        //redirect
        return redirect()->route('admin.subdistricts.index');
    }
}
