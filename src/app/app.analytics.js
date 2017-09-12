(function() {
    'use strict';

    angular
        .module('app')
        .config(AppAnalytics);

    /* @ngInject */
    function AppAnalytics($analyticsProvider) {
        $analyticsProvider.firstPageview(true);
        $analyticsProvider.withAutoBase(true);
        $analyticsProvider.settings.ga = {
            userId: 'COLOCAR O ID DO GTM AQUI'
        };
    }
}());
