(function(){
    angular.module('app')
        .config(homeRouter);
    /* @ngInject */
    function homeRouter($stateProvider,$urlRouterProvider,$locationProvider){
        $stateProvider.state('Main',{
            url:'/home',
            templateUrl: '/pages/home/home.template.html',
            component: 'pageHome'
            
        });
        
    }
    
})();