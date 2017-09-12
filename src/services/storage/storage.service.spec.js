(() => {
    'use strict';

    describe('Service: StorageService', () => {
        application.initModule();
        var StorageService,
            blockStorage = {},
            storage = {valor: 'teste'};

        beforeEach(inject(($injector) => {
            StorageService = $injector.get('StorageService');
        }));

        afterEach(() => {
            blockStorage = {};
        });

        it('Service should be defined', () => {
            expect(StorageService).toBeDefined();
        });

        it('Configure method should be working correctly', () => {
            StorageService.configure('local');
            expect(StorageService.type).toEqual('local');
        });

        it('Set method should be return the session storage specified', () => {
            blockStorage = StorageService.set('DTOSetSession', storage);
            expect(blockStorage).toEqual({valor: 'teste'});
        });

        it('Set method should be return the local storage specified', () => {
            StorageService.type = 'local';
            blockStorage = StorageService.set('DTOSetLocal', storage);
            expect(blockStorage).toEqual({valor: 'teste'});
        });

        it('Put method should be return the session storage specified', () => {
            StorageService.set('DTOPutSession', {valor: 'teste'});
            StorageService.put('DTOPutSession', 'valor', 'teste2');
            expect(StorageService.get('DTOPutSession')).toEqual({valor: 'teste2'});
        });

        it('Put method should be return the local storage specified', () => {
            StorageService.type = 'local';
            StorageService.set('DTOPutSession', {valor: 'teste'});
            StorageService.put('DTOPutSession', 'valor', 'teste2');
            expect(StorageService.get('DTOPutSession')).toEqual({valor: 'teste2'});
        });

        it('Put method without storage created should be return the session storage specified', () => {
            StorageService.put('DTOPutSession2', 'valor', 'teste2');
            expect(StorageService.get('DTOPutSession2')).toEqual({valor: 'teste2'});
        });

        it('Put method without storage created should be return the session storage specified', () => {
            StorageService.type = 'local';
            StorageService.put('DTOPutSession2', 'valor', 'teste2');
            expect(StorageService.get('DTOPutSession2')).toEqual({valor: 'teste2'});
        });

        it('Get method should be return the session storage specified', () => {
            StorageService.set('DTOGetSession', storage);
            expect(StorageService.get('DTOGetSession')).toEqual({valor: 'teste'});
        });

        it('Get method should be return the local storage specified', () => {
            StorageService.type = 'local';
            StorageService.set('DTOGetLocal', storage);
            expect(StorageService.get('DTOGetLocal')).toEqual({valor: 'teste'});
        });

        it('Del method should be deleted the session storage', () => {
            StorageService.set('DTODelSession', storage);
            expect(StorageService.del('DTODelSession')).toBeTruthy();
        });

        it('Del method should be deleted the local storage', () => {
            StorageService.type = 'local';
            StorageService.set('DTODelLocal', storage);
            expect(StorageService.del('DTODelLocal')).toBeTruthy();
        });

        it('Reset method should be reset the local storage', () => {
            StorageService.type = 'local';
            StorageService.set('DTOResetLocal', storage);
            StorageService.reset();
            expect(StorageService.get('DTOResetLocal')).toBeFalsy();
        });

        it('Reset method should be reset the session storage', () => {
            StorageService.set('DTOResetSession', storage);
            StorageService.reset();
            expect(StorageService.get('DTOResetSession')).toBeFalsy();
        });

        it('Should the type is incorrect, return false', () => {
            StorageService.type = 'incorrect';
            expect(StorageService.set('DTOIncorrect', storage)).toBeFalsy();
            expect(StorageService.get('DTOIncorrect', storage)).toBeFalsy();
            expect(StorageService.del('DTOIncorrect', storage)).toBeFalsy();
            expect(StorageService.put('DTOIncorrect', storage)).toBeFalsy();
        });
    });
})();
