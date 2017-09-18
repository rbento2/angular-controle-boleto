(function() {
    'use strict';
    angular.module('app')
        .config(loginRouter);

    /* @ngInject */
    function loginRouter($stateProvider) {
        $stateProvider
            .state('login',{
                url: '/',
                component: 'pageLogin'
            });
    }

})();
