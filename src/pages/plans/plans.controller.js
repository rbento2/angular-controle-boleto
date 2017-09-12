(function() {
    'use strict';

    angular
        .module('app')
        .controller('PlansController', PlansController);

    /* @ngInject */
    function PlansController(PlansService, $analytics) {
        var $ctrl = this;
        $analytics.pageTrack('/planos');
    }
})();
