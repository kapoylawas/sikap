<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //permission sk
        Permission::create(['name' => 'sks.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'sks.create', 'guard_name' => 'web']);
        Permission::create(['name' => 'sks.edit', 'guard_name' => 'web']);
        Permission::create(['name' => 'sks.delete', 'guard_name' => 'web']);
        
        //permission dashboard
        Permission::create(['name' => 'dashboard.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'dashboard.statistics', 'guard_name' => 'web']);
        Permission::create(['name' => 'dashboard.chart', 'guard_name' => 'web']);

        //permission users
        Permission::create(['name' => 'users.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'users.create', 'guard_name' => 'web']);
        Permission::create(['name' => 'users.edit', 'guard_name' => 'web']);
        Permission::create(['name' => 'users.delete', 'guard_name' => 'web']);

         //permission roles
         Permission::create(['name' => 'roles.index', 'guard_name' => 'web']);
         Permission::create(['name' => 'roles.create', 'guard_name' => 'web']);
         Permission::create(['name' => 'roles.edit', 'guard_name' => 'web']);
         Permission::create(['name' => 'roles.delete', 'guard_name' => 'web']);
 
         //permission permissions
         Permission::create(['name' => 'permissions.index', 'guard_name' => 'web']);

         //permission city
        Permission::create(['name' => 'citys.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'citys.create', 'guard_name' => 'web']);
        Permission::create(['name' => 'citys.edit', 'guard_name' => 'web']);
        Permission::create(['name' => 'citys.delete', 'guard_name' => 'web']);
        
         

         //permission city
        Permission::create(['name' => 'citys.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'citys.create', 'guard_name' => 'web']);
        Permission::create(['name' => 'citys.edit', 'guard_name' => 'web']);
        Permission::create(['name' => 'citys.delete', 'guard_name' => 'web']);

        //permission subdistricts
        Permission::create(['name' => 'subdistricts.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'subdistricts.create', 'guard_name' => 'web']);
        Permission::create(['name' => 'subdistricts.edit', 'guard_name' => 'web']);
        Permission::create(['name' => 'subdistricts.delete', 'guard_name' => 'web']);

        //permission villages
        Permission::create(['name' => 'villages.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'villages.create', 'guard_name' => 'web']);
        Permission::create(['name' => 'villages.edit', 'guard_name' => 'web']);
        Permission::create(['name' => 'villages.delete', 'guard_name' => 'web']);

        //permission jobs
        Permission::create(['name' => 'jobs.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'jobs.create', 'guard_name' => 'web']);
        Permission::create(['name' => 'jobs.edit', 'guard_name' => 'web']);
        Permission::create(['name' => 'jobs.delete', 'guard_name' => 'web']);

        //permission jabatans
        Permission::create(['name' => 'jabatans.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'jabatans.create', 'guard_name' => 'web']);
        Permission::create(['name' => 'jabatans.edit', 'guard_name' => 'web']);
        Permission::create(['name' => 'jabatans.delete', 'guard_name' => 'web']);

        //permission puskesmas
        Permission::create(['name' => 'puskesmas.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'puskesmas.create', 'guard_name' => 'web']);
        Permission::create(['name' => 'puskesmas.edit', 'guard_name' => 'web']);
        Permission::create(['name' => 'puskesmas.delete', 'guard_name' => 'web']);

        //permission banks
        Permission::create(['name' => 'banks.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'banks.create', 'guard_name' => 'web']);
        Permission::create(['name' => 'banks.edit', 'guard_name' => 'web']);
        Permission::create(['name' => 'banks.delete', 'guard_name' => 'web']);

        //permission biodatas
        Permission::create(['name' => 'biodatas.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'biodatas.create', 'guard_name' => 'web']);
        Permission::create(['name' => 'biodatas.edit', 'guard_name' => 'web']);
        Permission::create(['name' => 'biodatas.delete', 'guard_name' => 'web']);

        //permission sks
        Permission::create(['name' => 'sks.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'sks.create', 'guard_name' => 'web']);
        Permission::create(['name' => 'sks.edit', 'guard_name' => 'web']);
        Permission::create(['name' => 'sks.delete', 'guard_name' => 'web']);
    }
}
