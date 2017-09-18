(function() {
    angular.module('app')
        .config(homeRouter);

    /* @ngInject */
    function homeRouter($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('home',{
            url:'/home',
            component: 'pageHome'
        });
    }

})();
