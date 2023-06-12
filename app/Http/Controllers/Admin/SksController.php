<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Sk;
use Illuminate\Http\Request;

class SksController extends Controller
{
    public function index()
    {

        $sks = Sk::when(request()->q, function ($sks) {
            $sks = $sks->where('name', 'like', '%' . request()->q . '%');
        })->latest()->paginate(5);

        $sks->appends(['q' => request()->q]);

        return inertia('Admin/Sks/Index', [
            'sks' => $sks,
        ]);
    }

    public function create()
    {
        //return inertia
        return inertia('Admin/Sks/Create');
    }

    public function store(Request $request)
    {
        /**
         * validate
         */
        $this->validate($request, [
            'name'          => 'required',
            'alamat'        => 'required',
            'email'         => 'required',
            'phone'         => 'required',
        ]);

        //create puskesmas
        Puskesmas::create([
            'name'       => $request->name,
            'alamat'     => $request->alamat,
            'email'      => $request->email,
            'phone'      => $request->phone,
        ]);

        //redirect
        return redirect()->route('admin.puskesmas.index');
    }

    public function edit($id)
    {
        //get color
        $puskesmas = Puskesmas::findOrFail($id);

        //render with inertia
        return inertia('Admin/Puskesmas/Edit', [
            'puskesmas'    => $puskesmas,
        ]);
    }

    public function update(Request $request, Puskesmas $puskesmas)
    {
        /**
         * validate request
         */
        $this->validate($request, [
            'name'          => 'required',
            'alamat'        => 'required',
            'email'         => 'required',
            'phone'         => 'required',
        ]);

        //update puskesmas
        $puskesmas->update([
            'name'       => $request->name,
            'alamat'     => $request->alamat,
            'email'      => $request->email,
            'phone'      => $request->phone,
        ]);

        //redirect
        return redirect()->route('admin.puskesmas.index');
    }

    public function destroy($id)
    {
        //find role by ID
        $puskesmas = Puskesmas::findOrFail($id);

        //delete role
        $puskesmas->delete();

        //redirect
        return redirect()->route('admin.puskesmas.index');
    }
}
