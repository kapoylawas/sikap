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
        'unik',
    ];

    public function biodata()
    {
        return $this->belongsTo(Biodata::class);
    }
}
