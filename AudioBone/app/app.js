(function ($) {
    "use strict";
    var Audiobook = Backbone.Model.extend({

            initialize: function () {
                //console.log('Audiobook model has been initialized');
            }

        }),

        AudiobookView = Backbone.View.extend({
           tagName: 'article',          
           className: 'audiobook',
           
           initialize: function () {

                this.render();
           },

           render: function () {
                var tmpl = _.template( $('#audiobook-template').html());
                this.$el.html(tmpl(this.model.toJSON()));
                return this;
           }

        }),

        AudiobookCollection = Backbone.Collection.extend({

            model: Audiobook

        }),

        // MAIN VIEW
        AudiobookCollectionView = Backbone.View.extend({

           el: $('#audiobook-content'),

           initialize: function () {
            var self = this;
            WebService.getAudiobooks('recommended', function (coll) {
                self.collection = new AudiobookCollection(coll);
                self.render();
                self.on('change:type', self.renderSpecificCollection, self);
                self.collection.on('reset', self.render, self);                
            });

           },

           render: function () {
               var self = this;
               this.$el.find('article').remove();
               _.each(this.collection.models, function (item) {
                   self.renderAudiobook(item);
               }, this);
           },

           renderAudiobook: function (item) {
               var audiobookView = new AudiobookView({
                   model: item
               });
               this.$el.append(audiobookView.render().el);
           },
           
           renderSpecificCollection: function () {
               var self = this;
               WebService.getAudiobooks(this.type, function (coll) {
                   console.log(coll);
                   self.collection.reset(coll);
               });
               
           }

        }),
        
        // APP ROUTER
        AudiobookRouter = Backbone.Router.extend({
            routes: {                
                'bestsellers': 'getBestsellers',
                'recommended': 'getRecommended',                
                '*actions': 'defaultRoute'
            },

            defaultRoute: function (actions) {
                console.log(actions);
            },

            getBestsellers: function () {
                audiobookCollectionView.type = 'bestsellers';
                audiobookCollectionView.trigger('change:type');                
            },

            getRecommended: function () {
                audiobookCollectionView.type = 'recommended';
                audiobookCollectionView.trigger('change:type');                
            }
        }),

        // START CODE
        audiobookCollectionView = new AudiobookCollectionView(),
        router = new AudiobookRouter();
        Backbone.history.start();        

}(jQuery));