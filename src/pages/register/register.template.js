(function() {
    'use strict';

    angular.module('app')
        .component('pageRegister',pageRegister());

    function pageRegister() {
        return{
            templateUrl:'/pages/register/register.template.html',
            controller: ctrlRegister
        };
    }
    function ctrlRegister() {
        var $ctrl = this;
        console.log('------------------------------------');
        console.log('entrou no register');
        console.log('------------------------------------');
    }
})();
