<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {

        $user     = User::count();

        //return view
        return inertia('Admin/Dashboard/Index', [
                'user'    => $user,
        ]);
    }
}
