vendasApp.service('vendaService', function ($http) {

    //Método responsável por Adicionar Venda: CREATE
    this.efetuarVenda = function (venda) {

        var request = $http({
            method: 'post',
            url: '/Venda/AdicionarVenda',
            data: venda
        });

        return request;
    }

});