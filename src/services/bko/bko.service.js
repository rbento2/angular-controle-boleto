(function() {
    'use strict';

    angular
        .module('app')
        .service('BkoService', BkoService);

    /* @ngInject */
    function BkoService($rootScope, ORIGIN_CODE,  StorageService, ParametersService) {
        var dto = {};

        if(ParametersService.bko.codigo_origem) {
            $rootScope.originCode = ParametersService.bko.codigo_origem;
            dto.CodigoOrigem = $rootScope.originCode;
            StorageService.set('DTO', dto);
        } else {
            $rootScope.originCode = (StorageService.get('DTO') && StorageService.get('DTO').CodigoOrigem) ? StorageService.get('DTO').CodigoOrigem : ORIGIN_CODE;
        }
    }
})();
