'use strict';

module.exports = function (app) {
    app.use('/auth', require('./auth/'));
    app.use('/api/contacts', require('./api/contacts/'));
    app.use('/api/users', require('./api/user/'));
};