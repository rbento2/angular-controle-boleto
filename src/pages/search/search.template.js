(function() {
    'use strict';
    angular.module('app')
        .component('pageSearch',pageSearch());

    function pageSearch() {
        return{
            templateUrl: '/pages/search/search.template.html',
            controller: ctrlSearch
        };
    }
    function ctrlSearch() {
        var $ctrl = this;
        console.log('------------------------------------');
        console.log('entrou no buscar');
        console.log('------------------------------------');
    }
})();
