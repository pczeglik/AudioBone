require.config({
    paths: {
        jQuery: 'libs/jquery/jquery',
        Underscore: 'libs/underscore/underscore',
        Backbone: 'libs/backbone/backbone',
        WebService: 'libs/webservice/webservice',
        Cache: 'libs/cache'
    }
});

require([
    'app',
    'order!libs/jquery/jquery.min',
    'order!libs/underscore/underscore.min',
    'order!libs/backbone/backbone.min'
    ], function(App) {
        App.initialize();
    }
);