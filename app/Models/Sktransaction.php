<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sktransaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'sk_id',
        'biodata_id',
        'tribulan',
        'tahun',
        'gaji',
    ];

    public function biodata()
    {
        return $this->belongsTo(Biodata::class);
    }

    public function sk()
    {
        return $this->belongsTo(Sk::class);
    }
}
