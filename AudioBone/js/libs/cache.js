define(function(){

    var cache = [];

    return {
        exist: function (key) {
            if (typeof key === 'string') {
                if (cache[key] !== undefined) {
                    return true;
                } else {
                    return false;
                }
            } else {
                throw {
                    type: 'Type Error',
                    message: 'Key should be a string'
                }
            }
        },
        set: function (key, val) {
            if (typeof key === 'string') {
                if (!this.exist(key)) {
                    cache[key] = val;
                } else {

                }
            } else {
                throw {
                    type: 'Type Error',
                    message: 'Key should be a string'
                }
            }
        },
        get: function (key) {
            if (typeof key === 'string') {
                if (this.exist(key)) {
                    return cache[key];
                } else {
                    throw {
                        message: 'key doesn\'t exist'
                    }
                }
            } else {
                throw {
                    type: 'Type Error',
                    message: 'Key should be a string'
                }
            }
        }
    };
});