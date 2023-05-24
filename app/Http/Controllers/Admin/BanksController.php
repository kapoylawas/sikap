<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Bank;
use Illuminate\Http\Request;

class BanksController extends Controller
{
    public function index()
    {

        $banks = Bank::when(request()->q, function ($banks) {
            $banks = $banks->where('name', 'like', '%' . request()->q . '%');
        })->latest()->paginate(5);

        $banks->appends(['q' => request()->q]);

        return inertia('Admin/Banks/Index', [
            'banks' => $banks,
        ]);
    }

    public function create()
    {
        //return inertia
        return inertia('Admin/Banks/Create');
    }

    public function store(Request $request)
    {
        /**
         * validate
         */
        $this->validate($request, [
            'name'          => 'required|unique:cities',
            'tranfer'          => 'required',
        ]);

        //create bank
        Bank::create([
            'name'          => $request->name,
            'tranfer'          => $request->tranfer,
        ]);

        //redirect
        return redirect()->route('admin.banks.index');
    }

    public function edit($id)
    {
        //get color
        $banks = Bank::findOrFail($id);

        //render with inertia
        return inertia('Admin/Banks/Edit', [
            'banks'          => $banks,
        ]);
    }

    public function update(Request $request, Bank $bank)
    {
        /**
         * validate request
         */
        $this->validate($request, [
            'name'          => 'required',
            'tranfer'          => 'required',
        ]);

        //update city
        $bank->update([
            'name' => $request->name,
            'tranfer' => $request->tranfer
        ]);

        //redirect
        return redirect()->route('admin.banks.index');
    }

    public function destroy($id)
    {
        //find role by ID
        $bank = Bank::findOrFail($id);

        //delete role
        $bank->delete();

        //redirect
        return redirect()->route('admin.banks.index');
    }
}
