(function() {
    'use strict';
    angular.module('app')
        .config(searchRouter);

    /* @ngInject */
    function searchRouter($stateProvider) {
        $stateProvider.state('search',{
            url:'/search',
            component: 'pageSearch'
        });
    }
})();
