define([
    'Underscore',
    'Backbone',
    'models/audiobook'
    ], function(_, Backbone, AudiobookModel){
        var AudiobookCollection = Backbone.Collection.extend({
            model: AudiobookModel
        });
        return AudiobookCollection;
    });