var inject = require('appolo-inject'),
    Class = require('appolo-class');


var container = inject.createContainer();

Class.plugins.inject = function(config,klass,parent){
    var id = config.id || config.namespace,
        def = {};

    if (id) {
        def[id] = {
            singleton:config.singleton,
            initMethod:config.initMethod,
            props:config.properties,
            lookUpMethod:config.lookUpMethod,
            type:klass,
            args:config.args,
            inject:config.inject,
            lazy:config.lazy,
            injectorAware:config.injectorAware

        };

        container.addDefinitions(def);
    }
}

module.exports = container;
