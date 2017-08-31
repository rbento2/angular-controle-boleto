(function(){
    angular.module('boleto-controle',[])
            .component('navBar',navBar());
    
    function navBar(){
        return{
            templateUrl:'/components/navbar/navBar.template.html',
            controller: navBarCtrl
        }
    }
    function navBarCtrl(){
        var $ctrl = this;
        
    }
})();