(function(){
    'use strict';
    angular.module('app')
            .config(RouterConfig);
    
    /* @ngInject */
    function RouterConfig($urlRouterProvider, $locationProvider){
        $urlRouterProvider.otherwise('/home');
        $locationProvider.html5Mode({
            enabled: true,
            requireBase:false
        });
    }
})();