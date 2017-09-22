(function() {
    'use strict';
    angular.module('app')
        .config(registerRouter);

    /* @ngInject */
    function registerRouter($stateProvider) {
        $stateProvider.state('register',{
            url:'/register',
            component: 'pageRegister'
        });
    }
})();
