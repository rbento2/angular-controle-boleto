(function() {
    'use strict';

    angular
        .module('app')
        .service('ConfigurationService', ConfigurationService);

    /* @ngInject */
    function ConfigurationService($http, API_URL, AUTHORIZATION, COMPANY_CODE) {
        // Token
        $http.defaults.headers.common.Authorization = AUTHORIZATION;
        // Codigo da operadora
        $http.defaults.headers.common.CodigoOperadora = COMPANY_CODE;

        this.urlUpdateCart = API_URL + '/alterar';
        this.urlNewCart = API_URL + '/novo';
        this.urlPlans = API_URL;
    }
})();
