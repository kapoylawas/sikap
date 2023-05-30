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
        'ktp_image',
        'bukutabungan_image',
        'foto_image',
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

    protected function ktpImage(): Attribute
    {
        return Attribute::make(
            get: fn ($ktpImage) => asset('/storage/ktp/' . $ktpImage),
        );
    }

    protected function bukutabunganImage(): Attribute
    {
        return Attribute::make(
            get: fn ($bukutabunganImage) => asset('/storage/bukutabungan/' . $bukutabunganImage),
        );
    }

    protected function fotoImage(): Attribute
    {
        return Attribute::make(
            get: fn ($fotoImage) => asset('/storage/foto/' . $fotoImage),
        );
    }
}
