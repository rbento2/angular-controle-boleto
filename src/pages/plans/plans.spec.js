describe('Plans: Controller', () => {
    application.initModule();
    var $ctrl,
        PlansController,
        result,
        $rootScope,
        scope;

    beforeEach(inject((_$controller_, _$rootScope_) => {
        $ctrl = _$controller_;
        scope = _$rootScope_.$new();
        PlansController = $ctrl('PlansController', { $scope: scope });
    }));
    
    it('PlansController should be defined', () => {
        expect(PlansController).toBeDefined();
    });
});

describe('Plans: Service', () => {
    application.initModule();
    var PlansService,
        deferred,
        error,
        HttpService,
        method,
        params = {
            Uid: '010101'
        },
        $rootScope,
        success;
    
    beforeEach(inject(($injector) => {
        PlansService = $injector.get('PlansService');
    }));
    
    it('PlansService should be defined', () => {
        expect(PlansService).toBeDefined();
    });
    
    it('getPlans method should be working', () => {
        method = PlansService.getPlans(params);
        expect(method).toBeTruthy();
    });

    describe('PlansService Promisse Success', () => {
        beforeEach(inject(($q, _$rootScope_, _PlansService_) => {
            $rootScope = _$rootScope_.$new();
            PlansService = _PlansService_;
            deferred = $q.defer();
            deferred.resolve('The test has passed');

            spyOn(PlansService, 'getPlans').and.returnValue(deferred.promise);
        }));

        it('getPlans should be return a success', () => {
            PlansService.getPlans(params).then(
                result => {
                    success = result;
                }
            );
            $rootScope.$apply();

            expect(success).toEqual('The test has passed');
        });
    });

    describe('PlansService Promisse Error', () => {
        beforeEach(inject(($q, _$rootScope_, _HttpService_) => {
            $rootScope = _$rootScope_.$new();
            HttpService = _HttpService_;
            deferred = $q.defer();
            deferred.reject('The test has failed');

            spyOn(HttpService, 'get').and.returnValue(deferred.promise);
        }));

        it('get should be return a success', () => {
            HttpService.get(params).catch(
                result => {
                    error = result;
                }
            );
            $rootScope.$apply();

            expect(error).toEqual('The test has failed');
        });
    });
});
