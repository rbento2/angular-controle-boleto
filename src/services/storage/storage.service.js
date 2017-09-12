(function() {
    'use strict';

    angular
        .module('app')
        .service('StorageService', StorageService);

    /* @ngInject */
    function StorageService($localStorage, $sessionStorage) {
        this.configure  = configure;
        this.del        = del;
        this.get        = get;
        this.set        = set;
        this.put        = put;
        this.reset      = reset;
        // maybe need change the Session Storage to Local Storage, change the value of variable below
        this.type = 'session';

        function configure(val) {
            this.type = val;
        }

        function del(key) {
            if (this.type === 'session') {
                return eval('delete $sessionStorage.' + key + ';');
            } else if (this.type === 'local') {
                return eval('delete $localStorage.' + key + ';');
            } else {
                return false;
            }
        }

        function get(key) {
            if (this.type === 'session') {
                return eval('$sessionStorage.' + key);
            } else if (this.type === 'local') {
                return eval('$localStorage.' + key);
            } else {
                return false;
            }
        }

        function set(key, value) {
            if (this.type === 'session') {
                $sessionStorage[key] = value;
                return $sessionStorage[key];
            } else if (this.type === 'local') {
                $localStorage[key] = value;
                return $localStorage[key];
            } else {
                return false;
            }
        }

        function put(key, subkey, value) {
            var newStorage;
            if (this.type === 'session') {
                if(!$sessionStorage[key]) {
                    $sessionStorage[key] = {};
                }
                newStorage = $sessionStorage[key];
                newStorage[subkey] = value;
                $sessionStorage[key] = newStorage;
                return $sessionStorage[key];
            } else if (this.type === 'local') {
                if(!$localStorage[key]) {
                    $localStorage[key] = {};
                }
                newStorage = $localStorage[key];
                newStorage[subkey] = value;
                $localStorage[key] = newStorage;
                return $localStorage[key];
            } else {
                return false;
            }
        };

        function reset() {
            if (this.type === 'session') {
                $sessionStorage.$reset();
            } else if (this.type === 'local') {
                $localStorage.$reset();
            }
        };
    }
})();
