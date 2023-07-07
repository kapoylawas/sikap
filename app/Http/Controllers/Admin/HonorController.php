<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Honor;
use Illuminate\Http\Request;
use App\Models\Jabatan;

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

        //return inertia
        return inertia('Admin/Honor/Create', [
            'jabatans' => $jabatans,
        ]);
    }
}
