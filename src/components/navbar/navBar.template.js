(function(){
    angular.module('boleto-controle');
    angular.module('boleto-controle').controller('navBar',navBar);
    
    function navBar(){
        var $ctrl=this;
        $ctrl.teste = "teste";
    }
});