(function() {
    'use strict';

    angular
        .module('app')
        .service('AnalyticalLogService', AnalyticalLogService);

    /* @ngInject */
    function AnalyticalLogService(HttpService, ParametersService, API_URL, COMPANY_CODE, StorageService) {
        var url = API_URL + '/carrinho/log/analitico';
        this.sendUid = sendUid;

        // private methods
        function _generateGuid() {
            var dateNow = new Date(),
                day = (dateNow.getDate() < 10) ? '0' + dateNow.getDate() : dateNow.getDate(),
                month = ((dateNow.getMonth() + 1) < 10) ? '0' + (dateNow.getMonth() + 1) : dateNow.getMonth() + 1,
                year = dateNow.getFullYear();

            return year + month + day + '-' +
                _generateRandomNumber() + '-' +
                _generateRandomNumber() + '-' +
                _generateRandomNumber() + '-' +
                _generateRandomNumber() +
                _generateRandomNumber() +
                _generateRandomNumber();
        }

        function _generateRandomNumber() {
            return Math
                .floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        // public methods
        function sendUid(dto, eventLog, eventRequest, view) {
            var uidSession = (dto.uidSession) ? dto.uidSession : _generateGuid(),
                contract = {
                    'codigoOperadora': COMPANY_CODE,
                    'eventoLogAnalitico': eventLog,
                    'eventoRequest': eventRequest,
                    'uidSession': uidSession,
                    'utmCampanha': ParametersService.analytics.utm_campaign,
                    'utmConteudo': ParametersService.analytics.utm_content,
                    'utmMidia': ParametersService.analytics.utm_medium,
                    'utmOrigem': ParametersService.analytics.utm_source,
                    'utmParceiro': ParametersService.analytics.utm_parceiro,
                    'utmTermo': ParametersService.analytics.utm_term,
                    'view': view
                };

            if (!dto.uidSession) {
                dto.uidSession = uidSession;
                StorageService.set('DTO', dto);
            }

            return HttpService.post(url, contract, true);
        }
    }
})();
