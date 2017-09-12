(() => {
    'use strict';

    describe('Service: ConfigurationService', () => {
        application.initModule();

        var ConfigurationService,
            baseUrl;

        beforeEach(inject(($injector) => {
            ConfigurationService = $injector.get('ConfigurationService');
            baseUrl = '//esb.webapidev.cd.com/v1/api/';
        }));

        it('service should be defined', () => {
            expect(ConfigurationService).toBeDefined();
        });
        
        it('plans url should be equal to base url', () => {
            expect(ConfigurationService.urlPlans).toEqual(baseUrl);
        });
    });
})();
