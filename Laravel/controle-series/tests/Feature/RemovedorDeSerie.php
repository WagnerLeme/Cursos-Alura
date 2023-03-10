<?php

namespace Tests\Feature;


use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RemovedorDeSerieTest extends TestCase
{
    use RefreshDatabase;
    private $serie;

    protected function setUp(): void 
    {
        parent::setUp();
        $criadorDeSerie = new CriadorDeSerie();
        $this->serie = $criadorDeSerie-> criarSerie(
            'Nome da Série',
            1,
            1
        );
    }

    public function testRemoverUmaSerie()
    {
        $this->assertDatabaseHas(
            'series', ['id' => $this->serie->id]
        );
        $removedorDeSerie = new RemovedorDeSerie();
        $removedorDeSerie->removerSerie($this->serie->id);
        $this->assertIsString($nomeSerie);
        $this->assertEquals('Nome da Série', $this ->serie->nome);
        $this->assertDatabaseMissing('series', ['id' => $this-> serie->id]);
    }
}
