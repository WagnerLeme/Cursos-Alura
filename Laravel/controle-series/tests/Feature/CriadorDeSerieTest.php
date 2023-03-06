<?php

namespace Tests\Feature;

use App\Episodio;
use App\Temporada;
use App\Services\CriadorDeSerie;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CriadorDeSerieTest extends TestCase
{
  
    use RefreshDatabase; // informa para o laravel que vai usar BD nos testes e na memoria

    public function testCriarSerie()
    {
       $criadorDeSerie = new CriadorDeSerie();
       $nomeSerie = 'Nome de Teste';

       $serieCriada = $criadorDeSerie -> criarSerie($nomeSerie, 1, 1);

       $this->assertInstanceOf(Serie::class, $serieCriada);
       $this->assertDatabaseHas('series', ['nome' => $nomeSerie]);
       $this->assertDatabaseHas('temporadas', ['serie_id' => $serieCriada->id, 'numero' => 1]);
       $this->assertDatabaseHas('episodios', ['numero' =>  1]);

    }
}
