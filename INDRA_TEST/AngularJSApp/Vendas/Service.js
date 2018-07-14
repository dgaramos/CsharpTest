vendasApp.service('produtoService', function ($http) {

    this.getTodosProdutos = function () {
        return $http.get("/Produto/GetProduto");
    }

    //Método responsável por Adicionar Produto: CREATE
    this.adicionarProduto = function (produto) {

        var request = $http({
            method: 'post',
            url: '/Produto/AdicionarProduto',
            data: produto
        });

        return request;
    }

    //Método responsável por Atualizar Produto Por Id: Update
    this.atualizarProduto = function (produto) {

        var requestAtualizado = $http({
            method: 'post',
            url: '/Produto/AtualizarProduto',
            data: produto
        });
        return requestAtualizado;
    }

    //Método responsável por Excluir Produto Por Id: Delete
    this.excluirProduto = function (AtualizadoIdProduto) {

        return $http.post('/Produto/ExcluirProduto/' + AtualizadoIdProduto);
    }
});
