(function() {
    angular.module('app')
        .component('navBar',navBar());

    function navBar() {
        return{
            templateUrl:'../component/navbar/navBar.template.html',
            controller: navBarCtrl
        };
    }
    function navBarCtrl() {
        var $ctrl = this;
    }
})();
