<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Jabatan;
use App\Models\Jobs;
use Illuminate\Http\Request;

class JobsController extends Controller
{
    public function index()
    {

        $jabatans = Jabatan::when(request()->q, function ($jabatans) {
            $jabatans = $jabatans->where('name', 'like', '%' . request()->q . '%');
        })->with('job')->latest()->paginate(5);

        $jabatans->appends(['q' => request()->q]);

        return inertia('Admin/Jabatans/Index', [
            'jabatans' => $jabatans,
        ]);
    }

    public function create()
    {
         //get all city
         $jobs = Jobs::all();

        return inertia('Admin/Jabatans/Create', [
            'jobs' => $jobs
        ]);
    }

    public function store(Request $request)
    {
        /**
         * Validate request
         */
        $this->validate($request, [
            'job_id'   => 'required',
            'name'   => 'required',
            'tarifgaji'   => 'required',
        ]);

        /**
         * Create jabatan
         */
        Jabatan::create([
            'job_id'   => $request->job_id,
            'name'   => $request->name,
            'tarifgaji'   => $request->tarifgaji,
        ]);

        //redirect
        return redirect()->route('admin.jabatans.index');
    }

    public function edit($id)
    {
        //get color
        $jabatans = Jabatan::findOrFail($id);

        $jobs = Jobs::all();

        //render with inertia
        return inertia('Admin/Jabatans/Edit', [
            'jabatans'          => $jabatans,
            'jobs'          => $jobs,
        ]);
    }

    public function update(Request $request, Jabatan $jabatan)
    {
        /**
         * validate request
         */
        $this->validate($request, [
            'job_id'   => 'required',
            'name'   => 'required',
            'tarifgaji'   => 'required',
        ]);

        //update jabatan
        $jabatan->update([
            'job_id'   => $request->job_id,
            'name'   => $request->name,
            'tarifgaji'   => $request->tarifgaji,
        ]);

        //redirect
        return redirect()->route('admin.jabatans.index');
    }

    public function destroy($id)
    {
        //find role by ID
        $jabatan = Jabatan::findOrFail($id);

        //delete role
        $jabatan->delete();

        //redirect
        return redirect()->route('admin.jabatans.index');
    }

}
