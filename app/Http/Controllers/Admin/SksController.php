<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Jabatan;
use App\Models\Sk;
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
        $jabatans = Jabatan::all();

        //return inertia
        return inertia('Admin/Sks/Create', [
            'villages' => $villages,
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
        $jabatans = Jabatan::all();

        //render with inertia
        return inertia('Admin/Sks/Edit', [
            'sks'    => $sks,
            'villages'    => $villages,
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
        $sks = Sk::findOrFail($id);

        //return
        return inertia('Admin/Sks/Show', [
            'sks'   => $sks,
        ]);
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
