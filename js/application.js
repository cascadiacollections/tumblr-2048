// @ts-check
window.requestAnimationFrame(function() {
    window.tumbles = {};
    var apiKey = "pzlRGPOKNPtpU74Uxd66TM2b6JIdUhKSOaJ0p7dGdIVv7IffSU";
    var limit = 11;
    var tumblrURL = "https://api.tumblr.com/v2/blog/newscatgif.tumblr.com/posts/photo?limit=" + limit + "&callback=?";


    function getTumbles() {
        return $.ajax({
            type: "GET",
            url : tumblrURL,
            dataType: "jsonp",
            jsonpCallback: 'jsonpCallback',
            cache: true,
            data: {
                api_key : apiKey
            }
        });
    }

    getTumbles().done(function(data) {
        $.each(data.response.posts, function(key, value) {
            var index = Math.pow(2, key + 1);
            tumbles[index] = {
                id : key,
                url: value.photos[0].original_size.url
            };
        });
        new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
    });
});
