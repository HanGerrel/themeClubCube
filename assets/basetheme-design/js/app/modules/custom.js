"use strict";
appMakeBeCool.gateway.addClass('Custom', function (properties, $, $window, $document) {
    //PRIVATE VARIABLES
    var _custom = this,
        _defaults = {


            // elements
            // prop
            // data
            // classes ans styles
        },
        _properties = $.extend(_defaults, properties),
        _globals = {

            // elements

            // prop
            preloaded: false
        },

    //PRIVATE METHODS
        _init = function () {
            appMakeBeCool.gateway.base.Class.apply(_custom, [_properties]);
            if (!_globals.preloaded) {
                return _custom.init();
            }
            _custom.globals.customCreate = function () {
                _config();
                _setup();
                _setBinds();
                _setCustomMethods();
            };
            _custom.create();
        },

        _config = function () {


            _globals.header = $(_properties.header);

        },

        _setup = function () {


        },

        _setBinds = function () {

        },

        _binds = function () {
            return {

            };
        },

        _triggers = function () {
            return {};
        },

        _setCustomMethods = function () {
            _custom.globals.customResurrect = function () {
            };
            _custom.globals.customDestroy = function () {
            };
        };

    //PUBLIC METHODS
    _custom.addMethod('init', function () {
        _custom.bind($window, _custom.globals.classType + '_Init', function (e, data, el) {
            _globals.preloaded = true;
            _init();
        });
    });

    //GO!
    _init();
});