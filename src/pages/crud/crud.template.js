(function() {
    angular.module('app')
        .component('pageCrud',pageCrud());

    function pageCrud() {
        return {
            templateUrl:'/pages/crud/crud.template.html',
            controller: ctrlCrud
        };
    }
    /* @ngInject */
    function ctrlCrud() {
        var $ctrl = this;
        console.log('------------------------------------');
        console.log('entrou no crud');
        console.log('------------------------------------');
    }
})();
