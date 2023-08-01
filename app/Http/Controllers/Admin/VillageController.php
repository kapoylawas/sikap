<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Subdistrict;
use App\Models\Village;
use Illuminate\Http\Request;

class VillageController extends Controller
{
    public function index()
    {

        $villages = Village::when(request()->q, function ($villages) {
            $villages = $villages->where('name', 'like', '%' . request()->q . '%');
        })->with('city', 'subdistrict')->latest()->paginate(10);

        $villages->appends(['q' => request()->q]);

        return inertia('Admin/Village/Index', [
            'villages' => $villages,
        ]);
    }

    public function getKecamatan(Request $request)
    {
        //get cities by province ID
        $kelurahan = Subdistrict::where('city_id', $request->city_id)->get();

        //return
        return response()->json($kelurahan);
    }

    public function create()
    {

        $cities = City::all();

        return inertia('Admin/Village/Create', [
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
            'subdistrict_id'   => 'required',
            'name'   => 'required',
        ]);

        /**
         * Create kecamatan
         */
        Village::create([
            'city_id'   => $request->city_id,
            'subdistrict_id'   => $request->subdistrict_id,
            'name'   => $request->name,
        ]);

        //redirect
        return redirect()->route('admin.villages.index');
    }

    public function edit($id)
    {
        //get village
        $village = Village::findOrFail($id);

        $cities = City::all();
        $subdistricts = Subdistrict::all();

        //render with inertia
        return inertia('Admin/Village/Edit', [
            'village'          => $village,
            'subdistricts'          => $subdistricts,
            'cities'          => $cities,
        ]);
    }

    public function update(Request $request, Village $village)
    {

        //update city
        $village->update([
            'city_id'   => $request->city_id,
            'subdistrict_id'   => $request->subdistrict_id,
            'name'   => $request->name,
        ]);

        //redirect
        return redirect()->route('admin.villages.index');
    }

    public function destroy($id)
    {
        //find role by ID
        $subdistrict = Subdistrict::findOrFail($id);

        //delete role
        $subdistrict->delete();

        //redirect
        return redirect()->route('admin.villages.index');
    }
}
