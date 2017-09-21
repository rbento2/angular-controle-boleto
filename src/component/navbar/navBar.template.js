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
    function navBarCtrl($state,StorageService) {
        var $ctrl = this,
            _dto = StorageService.get('DTO') || {} ;

        $ctrl.nextStep = nextStep;

        function nextStep(step,subStep) {
            _sendToStorage(step,subStep);
            $state.go(step);
        }
        function _sendToStorage(setp,subStep) {
            _dto.currentStep = setp +'|'+ subStep;
            StorageService.set('DTO',_dto);
        }
    }
})();
