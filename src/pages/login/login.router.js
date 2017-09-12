(function() {
    'use strict';
    angular.module('app')
        .config(loginRouter);

    /* @ngInject */
    function loginRouter($stateProvider) {
        $stateProvider
            .state('login',{
                url: '/',
                templateUrl: '/pages/login/login.template.html',
                controller: 'loginCtrl as login'
            });
    }

    function loginCtrl() {
        var $ctrl = this;
    }
})();
