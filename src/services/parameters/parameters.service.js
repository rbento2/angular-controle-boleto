(function() {
    'use strict';

    angular
        .module('app')
        .service('ParametersService', ParametersService);

    /* @ngInject */
    function ParametersService($location) {
        this.allParameters = $location.search();

        this.analytics = {
            'utm_campaign': this.allParameters.utm_campaign,
            'utm_content': this.allParameters.utm_content,
            'utm_medium': this.allParameters.utm_medium,
            'utm_source': this.allParameters.utm_source,
            'utm_term': this.allParameters.utm_term
        };

        this.bko = {
            'u': this.allParameters.u,
            'codigo_origem': this.allParameters.codigo_origem
        };

        this.configProject = {
            'ddd': this.allParameters.ddd,
            'uf': this.allParameters.uf,
            'plataforma': this.allParameters.plataforma,
            'plano': this.allParameters.plano,
            'sku': this.allParameters.sku
        };
    }
})();
