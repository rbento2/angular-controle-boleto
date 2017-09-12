(function() {
    'use strict';
    angular.module('app')
        .component('pageLogin',pageLogin());

    function pageLogin() {
        return{
            templateUrl:'/pages/login/login.template.html',
            controller: loginCtrl
        };
    }
    function loginCtrl() {
        var $ctrl = this;
    }
})();
