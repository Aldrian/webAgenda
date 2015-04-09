/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /contacts              ->  index
 * POST    /contacts/             ->  create
 * GET     /contacts/:id          ->  show
 * PUT     /contacts/:id          ->  update
 * DELETE  /contacts/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Contact = require('./contact.model');

// Get list of articles
exports.index = function (req, res) {
    Contact.find(function (err, contacts) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, contacts);
    });
};


// Get a single article
exports.show = function (req, res) {
    Contact.findById(req.params.id, function (err, contact) {
        if (err) {
            return handleError(res, err);
        }
        if (!contact) {
            return res.send(404);
        }
        return res.json(contact);
    });
};

// Creates a new article in the DB.
exports.create = function (req, res) {
    Contacts.create({
        userID: req.body.userID,
        title: req.body.title,
        content: req.body.content
    }, function (err, contact) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(201, contact);
    });
};

// Updates an existing article in the DB.
exports.update = function (req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    Contact.findById(req.params.id, function (err, contact) {
        if (err) {
            return handleError(res, err);
        }
        if (!contact) {
            return res.send(404);
        }
        var updated = _.merge(contact, req.body);
        updated.save(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.json(200, article);
        });
    });
};

// Deletes a contact from the DB.
exports.destroy = function (req, res) {
    Contact.findById(req.params.id, function (err, contact) {
        if (err) {
            return handleError(res, err);
        }
        if (!contact) {
            return res.send(404);
        }
        contact.remove(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.send(204);
        });
    });
};

function handleError(res, err) {
    return res.send(500, err);
}