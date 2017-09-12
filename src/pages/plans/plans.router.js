(function() {
    'use strict';

    angular
        .module('app')
        .config(PlansRouter);

    /* @ngInject */
    function PlansRouter($stateProvider) {
        $stateProvider
            .state('plans', {
                url: '/planos',
                views: {
                    'conteudo': {
                        controller: 'PlansController as plans',
                        templateUrl: '/pages/plans/plans.template.html'
                    }
                }
            });
    }
}());
