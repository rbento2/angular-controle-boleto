(function() {
    'use strict';

    angular
        .module('app')
        .service('PlansService', PlansService);

    /* @ngInject */
    function PlansService(HttpService, ConfigurationService, ParametersService) {
        var urlPlans = ConfigurationService.urlPlans;
        this.getPlans = getPlans;

        function getPlans(params) {
            return HttpService.get(urlPlans, params);
        }
    }
})();
