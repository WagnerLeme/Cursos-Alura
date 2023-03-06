<?php

namespace App;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class Temporada extends Model
{
    protected $fillable = ['numero'];
    public $timestamps = false; 

    public function serie()
    {
        return $this->belongsTo(Serie::class); // BelongsTo = pertence a uma serie BelongsTo= um
    }
    
    public function episodios()
    {
        return $this->hasMany(Episodio::class); // relacionando as models 1 para *(muitos) tabelas hasmay = varios
    }

    public function getEpisodiosAssistidos(): Collection
    {
        return $this->episodios->filter(function (Episodio $episodio){
            return $episodio->assistido;
        });
    }

}
