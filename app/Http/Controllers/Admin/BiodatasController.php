<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Bank;
use App\Models\Biodata;
use App\Models\City;
use App\Models\Subdistrict;
use App\Models\Village;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class BiodatasController extends Controller
{
    public function index()
    {

        $biodatas = Biodata::when(request()->q, function ($biodatas) {
            $biodatas = $biodatas->where('name', 'like', '%' . request()->q . '%');
        })->with('city', 'subdistrict', 'village', 'bank')->latest()->paginate(5);

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
        $banks = Bank::all();

        //return inertia
        return inertia('Admin/Biodata/Create', [
            'cities' => $cities,
            'subdistricts' => $subdistricts,
            'villages' => $villages,
            'banks' => $banks,
        ]);
    }

    public function store(Request $request)
    {
        /**
         * validate
         */
        $this->validate($request, [
            'city_id'          => 'required',
            'subdistrict_id'          => 'required',
            'village_id'          => 'required',
            'bank_id'          => 'required',
            'name'          => 'required',
            'nik'          => 'required|max:16|min:16|unique:biodatas',
            'alamat'          => 'required',
            'tglLahir'          => 'required',
            'norek'          => 'required',
            'nohp'          => 'required',
            'filektp'         => 'required|mimes:pdf|max:4000',
            'filebukutabungan'         => 'required|mimes:pdf|max:4000',
            'foto'         => 'required|image|mimes:jpeg,jpg,png|max:4000',
        ]);

        //upload ktp
        $filektp = $request->file('filektp');
        $filektp->storeAs('public/ktp', $filektp->hashName());

        //upload buku tabungan
        $filebukutabungan = $request->file('filebukutabungan');
        $filebukutabungan->storeAs('public/bukutabungan', $filebukutabungan->hashName());

        //upload foto
        $foto = $request->file('foto');
        $foto->storeAs('public/foto', $foto->hashName());

        //create biodata
        Biodata::create([
            'city_id'          => $request->city_id,
            'subdistrict_id'          => $request->subdistrict_id,
            'village_id'          => $request->village_id,
            'bank_id'          => $request->bank_id,
            'name'          => $request->name,
            'nik'          => $request->nik,
            'alamat'          => $request->alamat,
            'tglLahir'          => $request->tglLahir,
            'norek'          => $request->norek,
            'nohp'          => $request->nohp,
            'filektp'         => $filektp->hashName(),
            'filebukutabungan'         => $filebukutabungan->hashName(),
            'foto'         => $foto->hashName(),
        ]);

        //redirect
        return redirect()->route('admin.biodatas.index');
    }

    public function destroy($id)
    {
        //find by ID
        $biodatas = Biodata::findOrFail($id);

        //remove image
        Storage::disk('local')->delete('public/ktp/' . basename($biodatas->ktp));
        Storage::disk('local')->delete('public/bukutabungan/' . basename($biodatas->filebukutabungan));
        Storage::disk('local')->delete('public/foto/' . basename($biodatas->foto));

        //delete
        $biodatas->delete();

        //redirect
        return redirect()->route('admin.biodatas.index');
    }

    public function edit($id)
    {
        //get biodatas
        $biodatas = Biodata::findOrFail($id);

        $cities = City::all();
        $subdistricts = Subdistrict::all();
        $villages = Village::all();
        $banks = Bank::all();

        //render with inertia
        return inertia('Admin/Biodata/Edit', [
            'biodatas'          => $biodatas,
            'cities' => $cities,
            'subdistricts' => $subdistricts,
            'villages' => $villages,
            'banks' => $banks,
        ]);
    }

    public function update(Request $request, Biodata $biodata)
    {

        //check ktp update
        if ($request->file('filektp')) {

            //upload ktp
            $filektp = $request->file('filektp');
            $filektp->storeAs('public/ktp', $filektp->hashName());

            //update category with new file
            $biodata->update([
                'city_id'          => $request->city_id,
                'subdistrict_id'          => $request->subdistrict_id,
                'village_id'          => $request->village_id,
                'bank_id'          => $request->bank_id,
                'name'          => $request->name,
                'nik'          => $request->nik,
                'alamat'          => $request->alamat,
                'tglLahir'          => $request->tglLahir,
                'norek'          => $request->norek,
                'nohp'          => $request->nohp,
                'filektp'         => $filektp->hashName(),
            ]);
        }

        if ($request->file('filebukutabungan')) {

            //upload buku tabungan
            $filebukutabungan = $request->file('filebukutabungan');
            $filebukutabungan->storeAs('public/bukutabungan', $filebukutabungan->hashName());

            //update biodata with new file
            $biodata->update([
                'city_id'          => $request->city_id,
                'subdistrict_id'          => $request->subdistrict_id,
                'village_id'          => $request->village_id,
                'bank_id'          => $request->bank_id,
                'name'          => $request->name,
                'nik'          => $request->nik,
                'alamat'          => $request->alamat,
                'tglLahir'          => $request->tglLahir,
                'norek'          => $request->norek,
                'nohp'          => $request->nohp,
                'filebukutabungan'         => $filebukutabungan->hashName(),
            ]);
        }

        if ($request->file('foto')) {

            //upload foto
            $foto = $request->file('foto');
            $foto->storeAs('public/foto', $foto->hashName());

            //update biodata with new file
            $biodata->update([
                'city_id'          => $request->city_id,
                'subdistrict_id'          => $request->subdistrict_id,
                'village_id'          => $request->village_id,
                'bank_id'          => $request->bank_id,
                'name'          => $request->name,
                'nik'          => $request->nik,
                'alamat'          => $request->alamat,
                'tglLahir'          => $request->tglLahir,
                'norek'          => $request->norek,
                'nohp'          => $request->nohp,
                'foto'         => $foto->hashName(),
            ]);
        }

        //update biodata
        $biodata->update([
            'city_id'          => $request->city_id,
            'subdistrict_id'          => $request->subdistrict_id,
            'village_id'          => $request->village_id,
            'bank_id'          => $request->bank_id,
            'name'          => $request->name,
            'nik'          => $request->nik,
            'alamat'          => $request->alamat,
            'tglLahir'          => $request->tglLahir,
            'norek'          => $request->norek,
            'nohp'          => $request->nohp,
        ]);

        //redirect
        return redirect()->route('admin.biodatas.index');
    }

    public function show($id)
    {
        //get biodata by ID
        $biodatas = Biodata::with('sktransaction.sk.jabatan', 'bank', 'city', 'subdistrict')->findOrFail($id);
        // dd($biodatas);
        $cities = City::all();
        $subdistricts = Subdistrict::all();
        $villages = Village::all();
        $banks = Bank::all();
        

        //return
        return inertia('Admin/Biodata/Show', [
            'biodatas'   => $biodatas,
            'cities' => $cities,
            'subdistricts' => $subdistricts,
            'villages' => $villages,
            'banks' => $banks,
        ]);
    }
}
