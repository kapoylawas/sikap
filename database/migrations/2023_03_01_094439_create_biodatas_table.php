<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('biodatas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('city_id')->references('id')->on('cities')->cascadeOnDelete();
            $table->foreignId('subdistrict_id')->references('id')->on('subdistricts')->cascadeOnDelete();
            $table->foreignId('village_id')->references('id')->on('villages')->cascadeOnDelete();
            $table->foreignId('bank_id')->references('id')->on('banks')->cascadeOnDelete();
            $table->string('name');
            $table->string('nik')->unique();
            $table->text('alamat');
            $table->date('tglLahir');
            $table->string('norek')->unique();
            $table->string('nohp')->unique();
            $table->string('filektp');
            $table->string('filebukutabungan');
            $table->string('foto');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('biodatas');
    }
};
