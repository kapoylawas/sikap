<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Village extends Model
{
    use HasFactory;

    protected $fillable = [
        'city_id',
        'subdistrict_id',
        'name',
    ];

    // relation kota
    public function city()
    {
        return $this->belongsTo(City::class);
    }

    // relation desa/kelurahan
    public function subdistrict()
    {
        return $this->belongsTo(Subdistrict::class);
    }

    public function biodata()
    {
        return $this->hasMany(Biodata::class);
    }
}
