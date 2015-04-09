/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var BlogArticle = require('../api/blogArticle/blogArticle.model');
var User = require('../api/user/user.model');
var ChatMessage = require('../api/chatMessage/chatMessage.model');


ChatMessage.find({}).remove();

BlogArticle.find({}).remove();



User.find({}).remove(function () {
    User.create({
        provider: 'local',
        name: 'Test User',
        email: 'test@test.com',
        avatar: 'assets/images/avatars/default.png',
        password: 'test'
    }, {
        provider: 'local',
        role: 'admin',
        name: 'Admin',
        email: 'admin@admin.com',
        avatar: 'assets/images/avatars/admin.jpeg',
        banner: 'assets/images/ori19.png',
        password: 'admin'
    }, function () {
        console.log('finished populating users');
    });
});