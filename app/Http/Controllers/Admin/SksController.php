<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Biodata;
use App\Models\Jabatan;
use App\Models\Sk;
use App\Models\Sktransaction;
use App\Models\Subdistrict;
use App\Models\Village;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class SksController extends Controller
{
    public function index()
    {

        $sks = Sk::when(request()->q, function ($sks) {
            $sks = $sks->where('name', 'like', '%' . request()->q . '%');
        })->with('village', 'jabatan')->latest()->paginate(5);

        $sks->appends(['q' => request()->q]);

        return inertia('Admin/Sks/Index', [
            'sks' => $sks,
        ]);
    }

    public function create()
    {

        $villages = Village::all();
        $subdistricts = Subdistrict::all();
        $jabatans = Jabatan::all();

        //return inertia
        return inertia('Admin/Sks/Create', [
            'villages' => $villages,
            'subdistricts' => $subdistricts,
            'jabatans' => $jabatans,
        ]);
    }

    public function store(Request $request)
    {
        /**
         * validate
         */
        $this->validate($request, [
            'village_id'          => 'required',
            'subdistrict_id'          => 'required',
            'jabatan_id'          => 'required',
            'tahun'          => 'required',
            'name'          => 'required',
            'tglsk'          => 'required',
            'filesk'          => 'required|mimes:pdf|max:4000',
        ]);

        $filesk = $request->file('filesk');
        $filesk->storeAs('public/sk', $filesk->hashName());

        //create sk
        Sk::create([
            'village_id'       => $request->village_id,
            'subdistrict_id'       => $request->subdistrict_id,
            'jabatan_id'       => $request->jabatan_id,
            'tahun'       => $request->tahun,
            'name'       => $request->name,
            'tglsk'     => $request->tglsk,
            'filesk'      => $filesk->hashName(),
        ]);

        //redirect
        return redirect()->route('admin.sks.index');
    }

    public function edit($id)
    {
        //get 
        $sks = Sk::findOrFail($id);
        $villages = Village::all();
        $subdistricts = Subdistrict::all();
        $jabatans = Jabatan::all();

        //render with inertia
        return inertia('Admin/Sks/Edit', [
            'sks'    => $sks,
            'villages'    => $villages,
            'subdistricts'    => $subdistricts,
            'jabatans'    => $jabatans,
        ]);
    }

    public function update(Request $request, Sk $sk)
    {
        /**
         * validate request
         */
        $this->validate($request, [
            'village_id'          => 'required',
            'subdistrict_id'       => 'required',
            'jabatan_id'          => 'required',
            'tahun'          => 'required',
            'name'          => 'required',
            'tglsk'          => 'required',
        ]);

        //check image update
        if ($request->file('filesk')) {

            //remove old image
            Storage::disk('local')->delete('public/sk/' . basename($sk->filesk));

            //upload new image
            $filesk = $request->file('filesk');
            $filesk->storeAs('public/sk', $filesk->hashName());

            //update category with new file
            $sk->update([
                'village_id'       => $request->village_id,
                'subdistrict_id'       => $request->subdistrict_id,
                'jabatan_id'       => $request->jabatan_id,
                'tahun'       => $request->tahun,
                'name'       => $request->name,
                'tglsk'     => $request->tglsk,
                'filesk' => $filesk->hashName(),
            ]);
        }

        //update sk
        $sk->update([
            'village_id'       => $request->village_id,
            'subdistrict_id'       => $request->subdistrict_id,
            'jabatan_id'       => $request->jabatan_id,
            'tahun'       => $request->tahun,
            'name'       => $request->name,
            'tglsk'     => $request->tglsk,
        ]);

        //redirect
        return redirect()->route('admin.sks.index');
    }

    public function show($id)
    {
        //get sk by ID
        $sks = Sk::with('jabatan')->findOrFail($id);
        // dd($sks);

        $biodatas = Biodata::when(request()->q, function ($biodatas) {
            $biodatas = $biodatas->where('name', 'like', '%' . request()->q . '%');
        })->latest()->paginate(5);

        $biodatas->appends(['q' => request()->q]);

        $sks->setRelation('sktransactions', $sks->sktransactions()->with('biodata')->paginate(5));

        //return
        return inertia('Admin/Sks/Show', [
            'sks'   => $sks,
            'biodatas'   => $biodatas,
        ]);
    }

    public function storeTransactionSk(Request $request)
    {
        /**
         * Validate request
         */
        $this->validate(
            $request,
            [
                'biodata_id'   => 'required',
                'tribulan'   => 'required',
                'tahun'   => 'required',
            ],
            [
                'biodata_id.required' => 'biodata harus centang dan pilih satu terlebih dahulu',
                'tribulan.required' => 'pilih tribulan terlebih dahulu',
                'tahun.required' => 'pilih tahun terlebih dahulu',
            ]
        );

        //get sk by ID
        $sk = Sk::findOrFail($request->sk_id);

        //insert database
        foreach ($request->biodata_id as $b) {
            $dobel = Sktransaction::where('sk_id', $request->sk_id)->where('biodata_id', $b)
                                    ->where('tribulan', $request->tribulan)
                                    ->where('tahun', $request->tahun)
                                    ->first();
            if (!$dobel) {
                $sk->sktransactions()->create([
                    'biodata_id'     => $b,
                    'tribulan'     => $request->tribulan,
                    'tahun'     => $request->tahun,
                    'gaji'     => $request->gaji,
                ]);
            }
        }

        //return back
        return redirect()->back();
    }

    public function destroyTransaction($id)
    {
        $transaction = Sktransaction::findOrFail($id);

        //delete image
        $transaction->delete();

        //redirect
        return redirect()->back();
    }

    public function destroy($id)
    {
        //find role by ID
        $sks = Sk::findOrFail($id);

        //remove image
        Storage::disk('local')->delete('public/sk/' . basename($sks->filesk));

        //delete role
        $sks->delete();

        //redirect
        return redirect()->route('admin.sks.index');
    }
}
