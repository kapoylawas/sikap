<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Honor;
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
}
