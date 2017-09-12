(function() {
    'use strict';

    angular
        .module('app')
        .service('HttpService', HttpService);

    /* @ngInject */
    function HttpService($http, $rootScope, ORIGIN_CODE, usSpinnerService) {
        this.get = get;
        this.post = post;
        this.put = put;

        // metodos privados
        function _error(error) {
            usSpinnerService.stop('spinner-content');
            throw error;
        }

        function _verifySpinner(hideSpinner) {
            if (!hideSpinner) {
                usSpinnerService.spin('spinner-content');
            }
        }

        function _success(data, status, headers, config) {
            usSpinnerService.stop('spinner-content');
            return data.data;
        }

        function _verifyOriginCode(code) {
            return (code) ? code : ORIGIN_CODE;
        }

        // metodos publicos
        function get(url, params, spinner) {
            _verifySpinner(spinner);
            url += '?CodigoOrigem=' + _verifyOriginCode($rootScope.originCode);

            return $http
                .get(url, { params: params })
                .then(_success)
                .catch(_error);
        }

        function post(url, params, spinner) {
            _verifySpinner(spinner);
            params.CodigoOrigem = _verifyOriginCode($rootScope.originCode);

            return $http
                .post(url, params)
                .then(_success)
                .catch(_error);
        }

        function put(url, params, spinner) {
            _verifySpinner(spinner);

            return $http
                .put(url, params)
                .then(_success)
                .catch(_error);
        }
    }
})();
