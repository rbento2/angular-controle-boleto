(function() {
    angular.module('app')
        .component('pageChange',pageChange());

    function pageChange() {
        return{
            templateUrl:'/pages/change/change.template.html',
            controller: ctrlChange
        };
    }
    function ctrlChange() {
        var $ctrl = this;
    }
})();
