<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subdistrict extends Model
{
    use HasFactory;

    protected $fillable = [
        'city_id',
        'name',
    ];

    // relation kota
    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function biodata()
    {
        return $this->hasMany(Biodata::class);
    }
}
