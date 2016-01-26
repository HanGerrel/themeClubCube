"use strict";
appMakeBeCool.gateway.addClass('Sliders', function (properties, $, $window, $document) {
    //PRIVATE VARIABLES
    var _sliders = this,
        _defaults = {
            slGallery: $('#sliderGallery'),
            slPartners: $('#sliderPartners'),
            // elements
            // prop
            // data
            // classes ans styles
        },
        _properties = $.extend(_defaults, properties),
        _globals = {
            slGallery: null,
            slPartners: null,
            // elements

            // prop
            preloaded: false
        },

    //PRIVATE METHODS
        _init = function () {
            appMakeBeCool.gateway.base.Class.apply(_sliders, [_properties]);
            if (!_globals.preloaded) {
                return _sliders.init();
            }
            _sliders.globals.customCreate = function () {
                _config();
                _setup();
                _setBinds();
                _setCustomMethods();
            };
            _sliders.create();
        },

        _config = function () {
            _globals.slGallery = $(_properties.slGallery);
            _globals.slPartners = $(_properties.slPartners);
        },

        _setup = function () {
            _initSlGallery();
            _initPartners();
        },

        _setBinds = function () {
        },

        _binds = function () {
            return {};
        },

        _triggers = function () {
            return {};
        },

        _initSlGallery = function () {
            _globals.slGallery.slick({
                dots: false,
                infinite: false,
                speed: 400,
                centerPadding: 30,
                slidesToShow: 4,
                slidesToScroll: 2,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });
        },

        _initPartners = function () {
            _globals.slPartners.slick({
                dots: false,
                infinite: false,
                speed: 400,
                centerPadding: 30,
                slidesToShow: 6,
                slidesToScroll: 3,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });
        },

        _setCustomMethods = function () {
            _sliders.globals.customResurrect = function () {
            };
            _sliders.globals.customDestroy = function () {
            };
        };

    //PUBLIC METHODS
    _sliders.addMethod('init', function () {
        _sliders.bind($window, _sliders.globals.classType + '_Init', function (e, data, el) {
            _globals.preloaded = true;
            _init();
        });
    });

    //GO!
    _init();
});