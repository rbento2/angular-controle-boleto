(function(){
    angular.module('app')
        .config(homeRouter);

    function homeRouter($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state({
                name:'home',
                url:'/home',
                component: 'pageHome'
            });
    }
})();