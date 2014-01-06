module.exports.Class = require('appolo-class');
module.exports.Util = require('./lib/util/util');
module.exports.Controller = require('./lib/controller/controller');
module.exports.EventDispatcher = require('./lib/events/event-dispatcher');


module.exports.inject = require('./lib/inject/inject');

module.exports.router = require('./lib/routes/router');

module.exports.loader = require('./lib/loader/loader');

module.exports.launcher = require('./lib/launcher/launcher');

module.exports.environment = require('./lib/environments/environments');

module.exports._ = require('lodash');
