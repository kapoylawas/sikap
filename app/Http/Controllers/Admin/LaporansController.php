<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Sktransaction;
use Illuminate\Http\Request;

class LaporansController extends Controller
{
    public function index()
    {

        $skTransactions = Sktransaction::when(request()->q, function ($skTransactions) {
            $skTransactions = $skTransactions->where('tribulan', 'like', '%' . request()->q . '%');
        })->with('sk', 'biodata')->latest()->paginate(10);

        return inertia('Admin/Laporans/Index', [
            'skTransactions' => $skTransactions,
        ]);
    }

    public function getTribulan(Request $request)
    {
        //get TRIBULAN
        $tribulan = Sktransaction::where('tribulan', $request->tribulan)
            ->where('tahun', $request->tahun)
            ->with('sk.jabatan', 'biodata.bank')
            ->get();

        //return
        return response()->json($tribulan);
    }
}
