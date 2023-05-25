<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Jobs;
use Illuminate\Http\Request;

class KelompokJabatanController extends Controller
{
    public function index()
    {

        $jobs = Jobs::when(request()->q, function ($jobs) {
            $jobs = $jobs->where('name', 'like', '%' . request()->q . '%');
        })->latest()->paginate(5);

        $jobs->appends(['q' => request()->q]);

        return inertia('Admin/KelompokJabatan/Index', [
            'jobs' => $jobs,
        ]);
    }

    public function create()
    {
        return inertia('Admin/KelompokJabatan/Create');
    }

    public function store(Request $request)
    {
        /**
         * validate
         */
        $this->validate($request, [
            'name'          => 'required|unique:jobs',
            
        ]);

        //create bank
        Jobs::create([
            'name'          => $request->name,
        ]);

        //redirect
        return redirect()->route('admin.jobs.index');
    }

    public function edit($id)
    {
        //get color
        $jobs = Jobs::findOrFail($id);

        //render with inertia
        return inertia('Admin/KelompokJabatan/Edit', [
            'jobs'          => $jobs,
        ]);
    }

    public function update(Request $request, Jobs $job)
    {
        /**
         * validate request
         */
        $this->validate($request, [
            'name'          => 'required',
        ]);

        //update city
        $job->update([
            'name' => $request->name,
        ]);

        //redirect
        return redirect()->route('admin.jobs.index');
    }

    public function destroy($id)
    {
        //find role by ID
        $jobs = Jobs::findOrFail($id);

        //delete role
        $jobs->delete();

        //redirect
        return redirect()->route('admin.jobs.index');
    }
}
