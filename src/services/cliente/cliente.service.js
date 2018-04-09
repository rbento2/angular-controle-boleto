(function(){
    'use strict'
    angular.module('app')
            .service('ServiceCliente',ServiceCliente);

    function ServiceCliente(){
        
        this.getClient = getClient;

        function getClient(){
            var cliente = [{
                tipo: 'Telefonia',
                 operadoras:['Claro','Oi','Tim','Vivo']
             },
             {
                 tipo: 'Banda Larga',
                 operadoras:['Net','Oi Residencial','Tim Live','GVT']
             }];

            return cliente;
        }
    }
})()