define([
    'jQuery',
    'Underscore',
    'Backbone',
    'collections/audiobooks',
    'views/audiobooks/item'
    ], function($, _, Backbone, AudiobooksCollection, AudiobookItemView){
        var AudiobookListView = Backbone.View.extend({
            el: $("#container"),          
            initialize: function(){},
            setCollection: function (coll) {
                this.collection = new AudiobooksCollection(coll);
            },
            render: function () {
                _.each(this.collection.models, function (item) {
                    AudiobookItemView.render(item);
                }, this);
            }
        });
        return new AudiobookListView;
    });