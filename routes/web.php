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
    });
});
