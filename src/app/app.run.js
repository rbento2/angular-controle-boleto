(function() {
    'use strict';

    angular
        .module('app')
        .run(AppRun);

    /* @ngInject */
    function AppRun($rootScope, $location, $transitions) {
        var dataLayer = window.dataLayer = window.dataLayer || [],
            concurrentRequests = 0,
            hideSpinner = $rootScope.$on('us-spinner:stop', function(event, key) {
                if(concurrentRequests == 1) {
                    document.querySelector('#' + key).classList.remove('container-spinner');
                }

                concurrentRequests--;
            }),
            trackingAnalytics = $transitions.onSuccess({}, function() {
                dataLayer.push({
                    event: 'ngRouteChange',
                    attributes: {
                        route: $location.path()
                    }
                });
            }),
            showSpinner = $rootScope.$on('us-spinner:spin', function(event, key) {
                if(concurrentRequests == 0) {
                    document.querySelector('#' + key).classList.add('container-spinner');
                }

                concurrentRequests++;
            });
    }
})();
