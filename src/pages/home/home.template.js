(function(){
    console.log('dADSasdASDasdaSDasdasd')
    angular.module('app')
            .component('pageHome',pageHome());
    
    function pageHome(){
        return{
            templateUrl:'/components/navbar/navBar.template.html',
            controller: homeController
        }
    }
    function homeController(){
        var $ctrl = this;
        
    }
})();