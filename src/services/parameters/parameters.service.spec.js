(() => {
    'use strict';

    describe('Service: Parameters', () => {
        application.initModule();

        var ParametersService;

        beforeEach(inject(function($injector) {
            ParametersService = $injector.get('ParametersService');
        }));

        it('Service has Defined', () => {
            expect(ParametersService).toBeDefined();
            expect(ParametersService.allParameters).toBeDefined();
            expect(ParametersService.analytics).toBeDefined();
            expect(ParametersService.bko).toBeDefined();
            expect(ParametersService.configProject).toBeDefined();
        });
    });
})();
