(function() {
    'use strict';
    angular.module('app')
        .component('pageLogin',pageLogin());

    function pageLogin() {
        return{
            templateUrl: '/pages/login/login.template.html',
            controller: loginCtrl
        };
    }
    /* @ngInject */
    function loginCtrl($state) {
        var $ctrl = this;
        $ctrl.nextStep = nextStep;

        function nextStep() {
            $state.go('home');
        }
    }
})();
