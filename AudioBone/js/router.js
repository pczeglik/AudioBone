define([
    'jQuery',
    'Underscore',
    'Backbone',
    'WebService',
    'views/audiobooks/list',
    'views/audiobooks/item',
    ], function($, _, Backbone, WebService, audiobookListView, audiobookView){
        var AppRouter = Backbone.Router.extend({
            routes: {                
                'bestsellers': 'getBestsellers',
                'recommended': 'getRecommended',                
                '*actions': 'defaultRoute'
            },

            defaultRoute: function (actions) {
                
            },

            getBestsellers: function () {
                $('#container').find('article').remove();
                WebService.getAudiobooks('bestsellers', function (coll) {
                    audiobookListView.setCollection(coll);
                    audiobookListView.render();
                });                                                    
            },

            getRecommended: function () {
                $('#container').find('article').remove();
                WebService.getAudiobooks('recommended', function (coll) {
                    audiobookListView.setCollection(coll);
                    audiobookListView.render();
                });  
            }
        });

        var initialize = function(){
            var app_router = new AppRouter;
            Backbone.history.start();
        };
        return {
            initialize: initialize
        };
    });