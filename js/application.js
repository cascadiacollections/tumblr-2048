// @ts-check
'use strict';

function getTumbles() {
    const limit = 11;
    const apiKey = "pzlRGPOKNPtpU74Uxd66TM2b6JIdUhKSOaJ0p7dGdIVv7IffSU";
    const tumblrURL = `https://api.tumblr.com/v2/blog/newscatgif.tumblr.com/posts/photo?limit=${limit}&callback=?`;

    // @ts-ignore
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

// @ts-ignore
window.tumbles = {};
window.requestAnimationFrame(function() {
    getTumbles().done(function(/** @type {{ response: { posts: any; }; }} */ data) {
        // @ts-ignore
        $.each(data.response.posts, function(/** @type {number} */ key, /** @type {{ photos: { original_size: { url: any; }; }[]; }} */ value) {
            var index = Math.pow(2, key + 1);
            // @ts-ignore
            window.tumbles[index] = {
                id : key,
                url: value.photos[0].original_size.url
            };
        });
        new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
    });
});
