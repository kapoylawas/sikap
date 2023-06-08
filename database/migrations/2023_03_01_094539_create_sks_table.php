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
        Schema::create('sks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('village_id')->references('id')->on('villages')->cascadeOnDelete();
            $table->foreignId('jabatan_id')->references('id')->on('jabatans')->cascadeOnDelete();
            $table->string('tahun');
            $table->string('name');
            $table->date('tglsk');
            $table->string('filesk');
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
