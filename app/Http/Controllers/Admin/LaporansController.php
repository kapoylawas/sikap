<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LaporansController extends Controller
{
    public function index()
    {

        $title = 'tes';

        return inertia('Admin/Laporans/Index', [
            'title' => $title,
        ]);
    }
}
