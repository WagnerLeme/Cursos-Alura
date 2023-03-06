<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    
    <link rel="stylesheet" href="https://kit.fontawesome.com/9464cb0108.css" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/9464cb0108.js" crossorigin="anonymous"></script>

    <title>Controle de Séries</title>
</head>
<body>

    <nav class="navbar navbar-expand-lg bg-body-tertiary mb-2 d-flex justify-content-between">
        <div class="container-fluid">
            <a class="navbar-brand" href="{{ route('listar_series')}}">Home</a>
            @auth
            <a href="/sair" class="text-danger">Sair</a>
            @endauth
            
            @guest 
            <a href="/entrar">Entrar</a>
            @endguest

        </div>
    </nav>
    
    <div class="container">
        <div class="container p-3 p-3 mb-2 bg-dark">
            <h1 class="text-center text-white" >@yield('cabecalho')</h1>
        </div>

        @yield('conteudo')
    </div>
</body>
</html>