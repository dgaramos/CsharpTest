var vendasApp;

(function () {
    vendasApp = angular.module('vendas',[]);
})();

vendasApp.filter('dateFilter', function () {
    return function (item) {
        if (item !== null) {
            return new Date(parseInt(item.substr(6)));
        }
        return "";
    };
});