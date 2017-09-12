(() => {
    'use strict';

    application.initModule();
    var $rootScope,
        method,
        deferred,
        error,
        AnalyticalLogService,
        dto = {
            uidSession: '0123456'
        },
        eventLog = 1,
        eventRequest,
        view = 'Home',
        result,
        success;

    describe('Service: Metricas', () => {
        beforeEach(inject(($injector) => {
            AnalyticalLogService = $injector.get('AnalyticalLogService');
        }));

        it('Metricas Service should behave defined', () => {
            expect(AnalyticalLogService).toBeDefined();
        });

        it('sendUid method should be working without a DTO object', () => {
            method = AnalyticalLogService.sendUid({}, eventLog, eventRequest, view);
            expect(method).toBeTruthy();
        });

        it('sendUid method should be working with a DTO object', () => {
            method = AnalyticalLogService.sendUid(dto, eventLog, eventRequest, view);
            expect(method).toBeTruthy();
        });

        describe('AnalyticalLogService Success Promise', () => {
            beforeEach(inject(($q, _$rootScope_, _AnalyticalLogService_) => {
                $rootScope = _$rootScope_.$new();
                AnalyticalLogService = _AnalyticalLogService_;
                deferred = $q.defer();
                deferred.resolve('Success to send Uid');

                spyOn(AnalyticalLogService, 'sendUid').and.returnValue(deferred.promise);
            }));

            it('sendUid method should behave return a success response when send a dto object', () => {
                AnalyticalLogService
                    .sendUid(dto, eventLog, eventRequest, view)
                    .then(result => {
                        success = result;
                    });
                
                $rootScope.$apply();

                expect(success).toEqual('Success to send Uid');
            });

            it('sendUid method should behave return a success response when not send a dto object', () => {
                AnalyticalLogService
                    .sendUid({}, eventLog, eventRequest, view)
                    .then(result => {
                        success = result;
                    });
                
                $rootScope.$apply();

                expect(success).toEqual('Success to send Uid');
            });
        });

        describe('AnalyticalLogService Error Promise', () => {
            beforeEach(inject(($q, _$rootScope_, _AnalyticalLogService_) => {
                $rootScope = _$rootScope_.$new();
                AnalyticalLogService = _AnalyticalLogService_;
                deferred = $q.defer();
                deferred.reject('Error to send Uid');

                spyOn(AnalyticalLogService, 'sendUid').and.returnValue(deferred.promise);
            }));

            it('sendUid method should behave return an error', () => {
                AnalyticalLogService
                    .sendUid(dto, eventLog, eventRequest, view)
                    .catch(result => {
                        error = result;
                    });
                
                $rootScope.$apply();

                expect(error).toEqual('Error to send Uid');
            });
        });
    });
})();
