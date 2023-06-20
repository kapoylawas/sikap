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
        Schema::create('sk_transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sk_id')->references('id')->on('sks')->cascadeOnDelete();
            $table->foreignId('biodata_id')->references('id')->on('biodatas')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sk_transactions');
    }
};
