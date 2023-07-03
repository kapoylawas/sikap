<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Honor extends Model
{
    use HasFactory;

    protected $fillable = [
        'jabatan_id',
        'tahun',
        'nominal',
    ];

    public function jabatan()
    {
        return $this->belongsTo(Jabatan::class);
    }
}
