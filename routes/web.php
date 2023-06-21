<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

//route login index
Route::get('/', [\App\Http\Controllers\Auth\LoginController::class, 'index'])->name('login')->middleware('guest');

//route login index
Route::get('/login', [\App\Http\Controllers\Auth\LoginController::class, 'index'])->name('login')->middleware('guest');

//route login store
Route::post('/login', [\App\Http\Controllers\Auth\LoginController::class, 'store'])->name('login.store')->middleware('guest');

//route register index
Route::get('/register', [\App\Http\Controllers\Auth\RegisterController::class, 'index'])->name('register')->middleware('guest');

//route register store
Route::post('/register', [\App\Http\Controllers\Auth\RegisterController::class, 'store'])->name('register.store')->middleware('guest');

//route logout
Route::post('/logout', \App\Http\Controllers\Auth\LogoutController::class)->name('logout')->middleware('auth');

// get kecamatan by id
Route::get('/kecamatan', [\App\Http\Controllers\Admin\VillageController::class, 'getKecamatan'])->name('kecamatan');

//prefix "admin"
Route::prefix('admin')->group(function () {

    //middleware "auth"
    Route::group(['middleware' => ['auth']], function () {

        //route dashboard
        Route::get('/dashboard', App\Http\Controllers\Admin\DashboardController::class)->name('admin.dashboard');

        //route permissions
        Route::get('/permissions', App\Http\Controllers\Admin\PermissionController::class)->name('admin.permissions.index')->middleware('permission:permissions.index');

       //route resource roles
       Route::resource('/roles', \App\Http\Controllers\Admin\RoleController::class, ['as' => 'admin'])
       ->middleware('permission:roles.index|roles.create|roles.edit|roles.delete');

       //route resource user
       Route::resource('/users', \App\Http\Controllers\Admin\UserController::class, ['as' => 'admin'])
       ->middleware('permission:users.index|users.create|users.edit|users.delete');
        
       //route resource city
       Route::resource('/citys', \App\Http\Controllers\Admin\CityController::class, ['as' => 'admin'])
       ->middleware('permission:citys.index|citys.create|citys.edit|citys.delete');

       //route resource subdistricts
       Route::resource('/subdistricts', \App\Http\Controllers\Admin\SubdistrictController::class, ['as' => 'admin'])
       ->middleware('permission:subdistricts.index|subdistricts.create|subdistricts.edit|subdistricts.delete');

       //route resource villages
       Route::resource('/villages', \App\Http\Controllers\Admin\VillageController::class, ['as' => 'admin'])
       ->middleware('permission:villages.index|villages.create|villages.edit|villages.delete');

       //route resource bank
       Route::resource('/banks', \App\Http\Controllers\Admin\BanksController::class, ['as' => 'admin'])
       ->middleware('permission:banks.index|banks.create|banks.edit|banks.delete');

        // route resource kelompok jabatan
       Route::resource('/jobs', \App\Http\Controllers\Admin\KelompokJabatanController::class, ['as' => 'admin'])
       ->middleware('permission:jobs.index|jobs.create|jobs.edit|jobs.delete');

        // route resource jabatan
       Route::resource('/jabatans', \App\Http\Controllers\Admin\JobsController::class, ['as' => 'admin'])
       ->middleware('permission:jabatans.index|jabatans.create|jabatans.edit|jabatans.delete');

        // route resource biodata
       Route::resource('/biodatas', \App\Http\Controllers\Admin\BiodatasController::class, ['as' => 'admin'])
       ->middleware('permission:biodatas.index|biodatas.create|biodatas.edit|biodatas.delete');

       // route resource puskesmas
       Route::resource('/puskesmas', \App\Http\Controllers\Admin\PuskesmasController::class, ['as' => 'admin'])
       ->middleware('permission:puskesmas.index|puskesmas.create|puskesmas.edit|puskesmas.delete');

       // route resource puskesmas
       Route::resource('/sks', \App\Http\Controllers\Admin\SksController::class, ['as' => 'admin'])
       ->middleware('permission:sks.index|sks.create|sks.edit|sks.delete');

       //route store transaction sk
       Route::post('/sks/store_transaction', [\App\Http\Controllers\Admin\SksController::class, 'storeTransactionSk'])->name('admin.sks.store_transaction');

       //route destroy transaction sk for biodata
       Route::delete('/sks/destroy_transaction/{id}', [\App\Http\Controllers\Admin\SksController::class, 'destroyTransaction'])->name('account.sks.destroy_transaction');

    });
});
