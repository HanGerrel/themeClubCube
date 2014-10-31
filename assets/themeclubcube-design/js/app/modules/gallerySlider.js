appMakeBeCool.gateway.addClass('GallerySlider', function(properties, $, $window, $document) {
    //PRIVATE VARIABLES
    var _gallerySlider = this,
        _defaults = {
            // elements
            slider: '#gallerySliderInMain',
            // prop
            // data
            // classes ans styles
        },
        _properties = $.extend(_defaults, properties),
        _globals = {
            // elements
            slider: null,

            // prop
            windowWidth: 0,
            preloaded: false
        },

        //PRIVATE METHODS
        _init = function() {
            appMakeBeCool.gateway.base.Class.apply(_gallerySlider, [_properties]);
            if (!_globals.preloaded) {
                return _gallerySlider.init();
            }
            _gallerySlider.globals.customCreate = function() {
                _config();
                _setup();
                _setBinds();
                _setCustomMethods();
            };
            _gallerySlider.create();
        },

        _config = function() {
            _globals.slider = $(_properties.slider);
            _globals.windowWidth = $window.width();
        },

        _setup = function() {
            if (_globals.slider.length) {
                if (_globals.windowWidth > 479) {
                    _globals.slider.slick({
                        slidesToShow: 3,
                        arrows: true,
                        easing: 'easeInExpo',
                        draggable: false,
                        speed: 900,
                        swipe: true,
                        dots: false,
                        infinite: false,
                        responsive: [{
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                                infinite: false,
                                arrows: false,
                                dots: false
                            }
                        }, {
                            breakpoint: 900,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                                infinite: false,
                                arrows: false,
                                dots: false
                            }
                        }, {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                infinite: false,
                                arrows: false,
                                dots: false
                            }
                        }]
                    });
                };
            }
        },

        _setBinds = function() {
            _binds().setResizeBind();
        },

        _binds = function() {
            return {
                setResizeBind: function() {
                    _gallerySlider.bind($window, 'resize', function(e, data, el) {
                        _setup();
                    })
                }
            };
        },

        _triggers = function() {
            return {};
        },

        _setCustomMethods = function() {
            _gallerySlider.globals.customResurrect = function() {};
            _gallerySlider.globals.customDestroy = function() {};
        };

    //PUBLIC METHODS
    _gallerySlider.addMethod('init', function() {
        _gallerySlider.bind($window, _gallerySlider.globals.classType + '_Init', function(e, data, el) {
            _globals.preloaded = true;
            _init();
        });
    });

    //GO!
    _init();
});