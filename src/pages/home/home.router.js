(function() {
    angular.module('app')
        .config(homeRouter);

    /* @ngInject */
    function homeRouter($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider.state('home',{
            url:'/home',
            templateUrl: '/pages/home/home.template.html',
            controller: 'pageHome as home'
            /*component: 'pageHome'*/
        });
    }

    function pageHome() {
        var $ctrl = this;
        console.log('funfou');
    }
})();
