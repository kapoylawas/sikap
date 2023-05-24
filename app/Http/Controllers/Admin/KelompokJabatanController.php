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

        return inertia('Admin/Jobs/Index', [
            'jobs' => $jobs,
        ]);
    }
}
