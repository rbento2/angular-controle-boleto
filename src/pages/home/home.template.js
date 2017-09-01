(function(){
    angular.module('app')
            .component('pageHome',pageHome());
    
    function pageHome(){
        return{
            templateUrl:'/pages/home/home.template.html',
            controller: homeCtrl
        }
    }

    function homeCtrl(){
        var $ctrl = this;
    }
})();