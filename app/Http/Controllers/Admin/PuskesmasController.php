<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Puskesmas;
use Illuminate\Http\Request;

class PuskesmasController extends Controller
{
    public function index()
    {

        $puskesmas = Puskesmas::when(request()->q, function ($puskesmas) {
            $puskesmas = $puskesmas->where('name', 'like', '%' . request()->q . '%');
        })->latest()->paginate(5);

        $puskesmas->appends(['q' => request()->q]);

        return inertia('Admin/Puskesmas/Index', [
            'puskesmas' => $puskesmas,
        ]);
    }

    public function create()
    {
        //return inertia
        return inertia('Admin/Puskesmas/Create');
    }

    public function store(Request $request)
    {
        /**
         * validate
         */
        $this->validate($request, [
            'name'          => 'required|unique:cities',
            'puskesmas'          => 'required',
        ]);

        //create puskesmas
        Puskesmas::create([
            'name'          => $request->name,
            'puskesmas'     => $request->puskesmas,
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
            'puskesmas'          => $puskesmas,
        ]);
    }

    public function update(Request $request, Puskesmas $puskesmas)
    {
        /**
         * validate request
         */
        $this->validate($request, [
            'name'          => 'required',
            'puskesmas'     => 'required',
        ]);

        //update puskesmas
        $bank->update([
            'name' => $request->name,
            'puskesmas' => $request->puskesmas
        ]);

        //redirect
        return redirect()->route('admin.puskesmas.index');
    }

    public function destroy($id)
    {
        //find role by ID
        $bank = Bank::findOrFail($id);

        //delete role
        $bank->delete();

        //redirect
        return redirect()->route('admin.puskesmas.index');
    }
}
