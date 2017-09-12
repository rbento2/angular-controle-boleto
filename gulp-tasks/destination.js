'use strict';

const config = require('./config'),
    environments = {
        'dev': config.dev,
        'hmg': config.hmg,
        'hmgInterno': config.hmgInterno,
        'prod': config.prod
    };

module.exports = (environment) => {
    return environments[environment];
};
