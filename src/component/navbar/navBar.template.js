(function() {
    angular.module('app')
        .component('navBar',navBar());

    function navBar() {
        return{
            templateUrl:'../component/navbar/navBar.template.html',
            controller: navBarCtrl
        };
    }
    /* @ngInject */
    function navBarCtrl($state) {
        var $ctrl = this;
        $ctrl.nextStep = nextStep;

        function nextStep(step) {
            $state.go(step);
        }
    }
})();
