(function(){
    angular.module('app')
            .component('navBar',navBar());
    
    function navBar(){
        return{
            templateUrl:'/components/navbar/navBar.template.html',
            controller: navBarCtrl
        }
    }
    /* @ngInject */
    function navBarCtrl(ServiceCliente){
        var $ctrl = this;
        
        $ctrl.cliente = ServiceCliente.getClient();
    }
})();