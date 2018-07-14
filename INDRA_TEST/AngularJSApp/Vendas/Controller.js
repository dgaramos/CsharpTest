// Controller
vendasApp.controller('produtoController', function ($scope, produtoService){


    carregarProdutos();

    function carregarProdutos() {
        var listarProdutos = produtoService.getTodosProdutos();

        listarProdutos.then(function (d) {
            $scope.produtos = d.data;
        }, function () {
            alert("Ocorreu um erro ao tentar listar todos os produtos");
        });
    }

    //Método responsável por adicionar cada propriedade de um Novo Produto:
    $scope.adicionarProduto = function () {

        var produto = {
            IdProduto: $scope.IdProduto,
            descricao: $scope.descricao,
            qntd: $scope.qntd,
            dataFab: $scope.dataFab,
            preco: $scope.preco
        };

        var adicionarInfos = produtoService.adicionarProduto(produto);

        adicionarInfos.then(function (d) {
            if (d.data.success === true) {
                carregarProdutos();
                alert("Produto Adicionado com Sucesso!");

                $scope.limparDados();
            } else { alert("Produto não Adicionado!"); }
        },
            function () {
                alert("Ocorreu um erro ao tentar adicionar um Novo Produto!");
            });
    };

    //Limpar os campos após inserir os dados no db://Limpar os campos após inserir os dados no db:
    $scope.limparDados = function () {
        $scope.IdProduto = "";
        $scope.descricao = "";
        $scope.qntd = "";
        $scope.dataFab = "";
        $scope.preco = "";
    };

    //Método responsável por atualizar Produto pelo Id:
    $scope.atualizarProdutoPorId = function (produto) {

        $scope.AtualizadoIdProduto = produto.IdProduto;
        $scope.AtualizadoDescricao = produto.Descricao;
        $scope.AtualizadoQntd = produto.Qntd;
        $scope.AtualizadoDataFab = produto.DataFab;
        $scope.AtualizadoPreco = produto.Preco;
    }

    //Método responsável por resgatar dados para a exclusão do Produto:
    $scope.excluirProdutoPorId = function (produto) {
        $scope.AtualizadoIdProduto = produto.IdProduto;
        $scope.AtualizadoDescricao = produto.Descricao;
    };

    //Método responsável por atualizar dados do Produto:
    $scope.atualizarProduto = function () {
        var produto = {
            IdProduto: $scope.AtualizadoIdProduto,
            Descricao: $scope.AtualizadoDescricao,
            Preco: $scope.AtualizadoPreco
        };
        var atualizarInfos = produtoService.atualizarProduto(produto);
        atualizarInfos.then(function (d) {
            if (d.data.success === true) {
                carregarProdutos();
                alert("Produto Atualizado com Sucesso!");
                $scope.limparDadosAtualizados();
            }
            else {
                alert("Produto não Atualizado");
            }
        },
            function () {
                alert("Ocorreu um erro ao tentar atualizar o Produto!");
            });
    };

    //Método responsável por Limpar os Dados depois de Atualizar Produto:
    $scope.limparDadosAtualizados = function () {
        $scope.AtualizadoIdProduto = '';
        $scope.AtualizadoDescricao = '';
        $scope.AtualizadoQntd = '';
        $scope.AtualizadoDataFab = '';
        $scope.AtualizadoPreco = '';
    };

    //Método responsável por excluir o Produto pelo Id:
    $scope.excluirProduto = function (AtualizadoIdProduto) {

        var excluirInfos = produtoService.excluirProduto($scope.AtualizadoIdProduto);
        excluirInfos.then(function (d) {

            if (d.data.success === true) {
                carregarProdutos();

                alert("Produto excluído com Sucesso!");
            }
            else {
                alert("Produto não excluído!");
            }
        });
    };


});