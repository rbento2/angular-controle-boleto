(function() {
    angular.module('app')
        .component('pageHome',pageHome());

    function pageHome() {
        return{
            templateUrl:'/pages/home/home.template.html',
            controller: navBarCtrl
        };
    }
    /* @ngInject */
    function navBarCtrl($state) {
        var $ctrl = this;
        $ctrl.prevStep = prevStep;

        function prevStep() {
            $state.go('login');
        }
    }
})();
