<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;


class Sk extends Model
{
    use HasFactory;

    protected $fillable = [
        'village_id',
        'jabatan_id',
        'tahun',
        'name',
        'tglsk',
        'filesk',
    ];

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function subdistrict()
    {
        return $this->belongsTo(Subdistrict::class);
    }

    public function village()
    {
        return $this->belongsTo(Village::class);
    }

    public function jabatan()
    {
        return $this->belongsTo(Jabatan::class);
    }

    protected function filesk(): Attribute
    {
        return Attribute::make(
            get: fn ($filesk) => asset('/storage/sk/' . $filesk),
        );
    }
}
