<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Jabatan;
use Illuminate\Http\Request;

class JobsController extends Controller
{
    public function index()
    {

        $jabatans = Jabatan::when(request()->q, function ($jabatans) {
            $jabatans = $jabatans->where('name', 'like', '%' . request()->q . '%');
        })->latest()->paginate(5);

        $jabatans->appends(['q' => request()->q]);

        return inertia('Admin/Jabatans/Index', [
            'jabatans' => $jabatans,
        ]);
    }
}
