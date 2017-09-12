(() => {
    'use strict';

    describe('Service: BKO', () => {
        application.initModule();
        var BkoService,
            ParametersService;

        describe('BKO has codigo_origem', () => {
            beforeEach(inject(($injector) => {
                ParametersService = $injector.get('ParametersService');
                ParametersService.bko.codigo_origem = '010101';
                BkoService = $injector.get('BkoService');
            }));

            afterEach(() => {
                ParametersService.bko = {};
            });

            it('Bko Service should be defined', () => {
                expect(BkoService).toBeDefined();
            });
        });

        describe('BKO dont has codigo_origem', () => {
            var objeto,
                StorageService;

            beforeEach(inject(($injector) => {
                ParametersService = $injector.get('ParametersService');
                BkoService = $injector.get('BkoService');
            }));

            it('Bko Service should be defined when have a DTO session storage', () => {
                expect(BkoService).toBeDefined();
            });
        });

        describe('BKO dont has codigo_origem and has CodigoOrigem on SessionStorage', () => {
            var objeto,
                StorageService;

            beforeEach(inject(($injector) => {
                StorageService = $injector.get('StorageService');
                var sessionStorage = StorageService.set('DTO', {});
                sessionStorage.CodigoOrigem = '01650415401650415';
                StorageService.set('DTO', sessionStorage);

                BkoService = $injector.get('BkoService');
            }));

            it('Bko Service should be defined when have a DTO session storage with CodigoOrigem node', () => {
                expect(BkoService).toBeDefined();
            });
        });
    });
})();
