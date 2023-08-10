<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;


class Biodata extends Model
{
    use HasFactory;

    protected $fillable = [
        'city_id',
        'subdistrict_id',
        'village_id',
        'bank_id',
        'name',
        'nik',
        'alamat',
        'tglLahir',
        'norek',
        'nohp',
        'filektp',
        'filebukutabungan',
        'foto',
    ];

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function subdistrict()
    {
        return $this->belongsTo(Subdistrict::class);
    }

    public function sktransaction()
    {
        return $this->hasMany(sktransaction::class);
    }

    public function village()
    {
        return $this->belongsTo(Village::class);
    }

    public function bank()
    {
        return $this->belongsTo(Bank::class);
    }

    protected function filektp(): Attribute
    {
        return Attribute::make(
            get: fn ($filektp) => asset('/storage/ktp/' . $filektp),
        );
    }

    protected function filebukutabungan(): Attribute
    {
        return Attribute::make(
            get: fn ($filebukutabungan) => asset('/storage/bukutabungan/' . $filebukutabungan),
        );
    }

    protected function foto(): Attribute
    {
        return Attribute::make(
            get: fn ($foto) => asset('/storage/foto/' . $foto),
        );
    }
}
