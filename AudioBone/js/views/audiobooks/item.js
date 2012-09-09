define([
    'jQuery',
    'Underscore',
    'Backbone',
    'models/audiobook',
    'text!/templates/audiobooks/item.html'
    ], function($, _, Backbone, AudiobookModel, audiobookTemplate){
        var AudiobookView = Backbone.View.extend({
            el: $("#container"),
            tagName: 'article',          
            className: 'audiobook',

            initialize: function () {
                //this.render();
            },

            render: function (item) {
                var tmpl = _.template(audiobookTemplate),
                    model = new AudiobookModel;
                    
                if (typeof item === 'undefined') {
                    this.$el.html(tmpl(model.toJSON()));
                } else {
                    this.$el.append(tmpl(item.toJSON()));
                }
            }
        });

        return new AudiobookView;
    });