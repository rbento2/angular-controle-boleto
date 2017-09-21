(function() {
    angular.module('app')
        .component('pageCrud',pageCrud());

    function pageCrud() {
        return {
            templateUrl:'/pages/crud/crud.template.html',
            controller: ctrlCrud
        };
    }
    /* @ngInject */
    function ctrlCrud(StorageService) {
        var $ctrl = this,
            _dto = StorageService.get('DTO');

        $ctrl.cadastrar = true;
        $ctrl.buscar = false;
        $ctrl.alterar = false;
        $ctrl.active = verifyAction(_dto.currentStep);

        function verifyAction(action) {
            var step;
            step = action.split('|');
            console.log('------------------------------------');
            console.log(step);
            console.log('------------------------------------');
            switch(step[1]) {
                case 'buscar':
                    $ctrl.buscar = true;
                    $ctrl.cadastrar = false;
                    $ctrl.alterar = false;
                    break;
                case 'alterar':
                    $ctrl.alterar = true;
                    $ctrl.cadastrar = false;
                    $ctrl.buscar = false;
                    break;
            }
        };
    }
})();
