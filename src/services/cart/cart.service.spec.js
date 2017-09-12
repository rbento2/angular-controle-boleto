(() => {
    'use strict';

    describe('Service: Cart', () => {
        application.initModule();
        var cart = {
                Uid: '010101'
            },
            CartService;

        beforeEach(inject(($injector) => {
            CartService = $injector.get('CartService');
            spyOn(CartService, 'updateCart').and.callThrough();
            spyOn(CartService, 'newCart').and.callThrough();
        }));

        it('CartService should be defined', () => {
            expect(CartService).toBeDefined();
        });
        
        it('updateCart method should be working', () => {
            CartService.updateCart(cart);
            expect(CartService.updateCart).toHaveBeenCalled();
        });

        it('newCart method should be working', () => {
            CartService.newCart(cart);
            expect(CartService.newCart).toHaveBeenCalled();
        });
    });
})();
