(() => {
    'use strict';

    describe('Service: Http', () => {
        application.initModule();
        var $rootScope,
            $httpBackend,
            HttpService,
            error,
            object = {
                Uid: '0101'
            },
            url = 'http://private-5f976-tcem.apiary-mock.com/plans/';

        beforeEach(inject((_HttpService_, _$rootScope_, _$httpBackend_) => {
            $httpBackend = _$httpBackend_;
            HttpService = _HttpService_;

            spyOn(HttpService, 'get').and.callThrough();
            spyOn(HttpService, 'post').and.callThrough();
            spyOn(HttpService, 'put').and.callThrough();
        }));

        it('HttpService should be defined', () => {
            expect(HttpService).toBeDefined();
        });

        it('get method shoud be working', () => {
            HttpService.get(url);
            expect(HttpService.get).toHaveBeenCalled();
        });

        it('post method shoud be working', () => {
            HttpService.post(url, object);
            expect(HttpService.post).toHaveBeenCalled();
        });

        it('put method shoud be working', () => {
            HttpService.put(url, object);
            expect(HttpService.put).toHaveBeenCalled();
        });

        it('$rootScope.originCode has been working', inject((_$rootScope_) => {
            $rootScope = _$rootScope_;
            $rootScope.originCode = '09784622164';
            $rootScope.$apply();

            HttpService.get(url, object);
            $httpBackend.expectGET(url + '?CodigoOrigem=09784622164').respond(200, {});
            expect(HttpService.get).toHaveBeenCalled();
        }));

        it('post method should behave return an error', (done) => {
            HttpService
                .post(url, object)
                .catch(error => {
                    expect(error.status).toBe(500);
                    done();
                });

            $httpBackend.expectPOST(url).respond(500, object);
            $httpBackend.flush();
        });

        it('get method should behave return a success', (done) => {
            HttpService
                .get(url)
                .then(resultado => {
                    expect(resultado).toEqual({});
                    done();
                });

            $httpBackend.expectGET(url + '?CodigoOrigem=9b519887127e42eab74cc1dd19b2a30d').respond(200, {});
            $httpBackend.flush();
        });
    });
})();
