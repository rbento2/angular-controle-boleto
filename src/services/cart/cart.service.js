(function() {
    'use strict';

    angular
        .module('app')
        .service('CartService', CartService);

    /* @ngInject */
    function CartService(HttpService, ConfigurationService) {
        var urlUpdateCart = ConfigurationService.urlUpdateCart;
        var urlNewCart = ConfigurationService.urlNewCart;

        this.updateCart = updateCart;
        this.newCart = newCart;

        function updateCart(cart) {
            return HttpService.post(urlUpdateCart, cart);
        }

        function newCart(cart) {
            return HttpService.post(urlNewCart, cart);
        }
    }
})();
