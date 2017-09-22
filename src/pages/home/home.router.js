(function() {
    'use strict';
    angular.module('app')
        .config(homeRouter);

    /* @ngInject */
    function homeRouter($stateProvider,$urlRouterProvider) {
        $stateProvider.state('home',{
            url:'/home',
            component: 'pageHome'
        });
    }

})();
