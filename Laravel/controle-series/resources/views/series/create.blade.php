@extends('layout')


@section('cabecalho')
    Adicionar Série
@endsection

@section('conteudo')

@include('erros', ['errors' => $errors])

        <form method="post">
            @csrf
            <div class="row">
                <div class="col col-8">
                    <label for="nome">Nome</label>
                    <input type="text" class="form-control mb-3" name="nome">
                </div>

                <div class="col col-2">
                    <label for="qtd_temporadas">N° de temporadas</label>
                    <input type="number" class="form-control mb-3" name="qtd_temporadas">
                </div>

                <div class="col col-2">
                    <label for="ep_por_temporada">Ep. por temporada</label>
                    <input type="number" class="form-control mb-3" name="ep_por_temporada">
                </div>
            </div>
        <button class='btn btn-dark'>Adicionar</button>
        
        </form>

@endsection