<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Honor;
use App\Models\Jabatan;
use Illuminate\Http\Request;

class HonorController extends Controller
{
    public function index()
    {

        $honors = Honor::when(request()->q, function ($honors) {
            $honors = $honors->where('name', 'like', '%' . request()->q . '%');
        })->with('jabatan')->latest()->paginate(10);

        $honors->appends(['q' => request()->q]);

        return inertia('Admin/Honor/Index', [
            'honors' => $honors
        ]);
    }

    public function create() 
    {

        $jabatans = Jabatan::all();

        return inertia('Admin/Honor/Create', [
            'jabatans' => $jabatans,
        ]);
    }

    public function store(Request $request)
    { 
        /**
         * validate
         */
        $this->validate($request, [
            'jabatan_id'          => 'required',
            'tahun'          => 'required',
            'nominal'          => 'required',
        ]);

        //create honor
        Honor::create([
            'jabatan_id'       => $request->jabatan_id,
            'tahun'       => $request->tahun,
            'nominal'       => $request->nominal,
        ]);

        //redirect
        return redirect()->route('admin.honor.index');
    }
}
