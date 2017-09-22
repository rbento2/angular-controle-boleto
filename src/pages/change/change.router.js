(function() {
    'use strict';
    angular.module('app')
        .config(changeRoute);

    /* @ngInject */
    function changeRoute($stateProvider) {
        $stateProvider
            .state('change',{
                url:'/change',
                component: 'pageChange'
            });
    }
})();
