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
        'ktp',
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

    public function village()
    {
        return $this->belongsTo(Village::class);
    }

    public function bank()
    {
        return $this->belongsTo(Bank::class);
    }

    protected function ktp(): Attribute
    {
        return Attribute::make(
            get: fn ($ktp) => asset('/storage/ktp/' . $ktp),
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
