// @ts-check
'use strict';

/**
 * Fetches cat GIF posts from Tumblr API
 * @returns {JQuery.jqXHR} jQuery AJAX promise
 */
function getTumbles() {
    const CONFIG = {
        limit: 11,
        apiKey: "pzlRGPOKNPtpU74Uxd66TM2b6JIdUhKSOaJ0p7dGdIVv7IffSU",
        blogUrl: "newscatgif.tumblr.com"
    };
    
    const tumblrURL = `https://api.tumblr.com/v2/blog/${CONFIG.blogUrl}/posts/photo?limit=${CONFIG.limit}&callback=?`;

    // @ts-ignore
    return $.ajax({
        type: "GET",
        url: tumblrURL,
        dataType: "jsonp",
        jsonpCallback: 'jsonpCallback',
        cache: true,
        data: {
            api_key: CONFIG.apiKey
        },
        timeout: 10000, // 10 second timeout
        error: function(xhr, status, error) {
            console.error('Failed to fetch tumbles:', error);
        }
    });
}

/**
 * Processes Tumblr API response and creates game tiles mapping
 * @param {Object} data - Tumblr API response data
 */
function processTumbles(data) {
    if (!data?.response?.posts) {
        console.error('Invalid Tumblr API response');
        return;
    }

    // @ts-ignore
    $.each(data.response.posts, (key, value) => {
        const keyNum = Number(key);
        const index = Math.pow(2, keyNum + 1);
        
        if (value?.photos?.[0]?.original_size?.url) {
            // @ts-ignore
            window.tumbles[index] = {
                id: keyNum,
                url: value.photos[0].original_size.url
            };
        }
    });
}

/**
 * Initializes the game after loading Tumblr data
 */
function initializeGame() {
    try {
        // @ts-ignore
        new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
    } catch (error) {
        console.error('Failed to initialize game:', error);
    }
}

// Initialize global tumbles object
// @ts-ignore
window.tumbles = {};

// Start the application when DOM is ready
window.requestAnimationFrame(() => {
    // @ts-ignore - jQuery AJAX returns jqXHR which has done/fail methods
    getTumbles()
        .done((data) => {
            processTumbles(data);
            initializeGame();
        })
        .fail((xhr, status, error) => {
            console.error('Failed to load Tumblr data:', error);
            // Initialize game anyway with fallback behavior
            initializeGame();
        });
});
