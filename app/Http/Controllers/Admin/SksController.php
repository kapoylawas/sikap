<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Biodata;
use App\Models\City;
use App\Models\Subdistrict;
use App\Models\Village;
use Illuminate\Http\Request;

class BiodatasController extends Controller
{
    public function index()
    {

        $biodatas = Biodata::when(request()->q, function ($biodatas) {
            $biodatas = $biodatas->where('name', 'like', '%' . request()->q . '%');
        })->latest()->paginate(5);

        $biodatas->appends(['q' => request()->q]);

        return inertia('Admin/Biodata/Index', [
            'biodatas' => $biodatas,
        ]);
    }

    public function create()
    {
        $cities = City::all();
        $subdistricts = Subdistrict::all();
        $villages = Village::all();
        
        //return inertia
        return inertia('Admin/Biodata/Create', [
            'cities' => $cities,
            'subdistricts' => $subdistricts,
            'villages' => $villages,
        ]);
    }
}
