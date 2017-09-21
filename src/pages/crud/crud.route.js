(function() {
    angular.module('app')
        .config(crudRoute);

        /* @ngInject */
    function crudRoute($stateProvider) {
        $stateProvider
            .state('crud',{
                url:'/crud',
                component:'pageCrud'
            });
    }
})();
