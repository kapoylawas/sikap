<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jabatan extends Model
{
    use HasFactory;

    protected $fillable = [
        'job_id',
        'name',
        'tarifgaji',
    ];

    // relation kelompok jabatan
    public function job()
    {
        return $this->belongsTo(Jobs::class);
    }
}
