var WebService = (function ($) {
    
    var CONST = {
        address: {
            bestsellers: 'http://mobileservice.audioteka.pl/MobileService.svc/bestsellers',
            recommended: 'http://mobileservice.audioteka.pl/MobileService.svc/recommended',
            audiobookInfo: 'http://mobileservice.audioteka.pl/MobileService.svc/product'
        }
    };
    
    return {
        getAudiobooks: function (category, cb) {
            console.log(CONST.address[category]);
            $.ajax({
                url: 'http://localhost/ajaxproxy/ajaxproxy.php?url=' + CONST.address[category],
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    cb(data);
                }
            });    
        }
    }
    
}(jQuery));