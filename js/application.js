// @ts-check
'use strict';

import { GameManager } from './game_manager.js';
import { KeyboardInputManager } from './keyboard_input_manager.js';
import { HTMLActuator } from './html_actuator.js';
import { LocalScoreManager } from './local_score_manager.js';

/**
 * Fetches cat GIF posts from Tumblr API
 * @returns {Promise<Object>} Promise with Tumblr API response
 */
function getTumbles() {
  const CONFIG = {
    limit: 11,
    apiKey: 'pzlRGPOKNPtpU74Uxd66TM2b6JIdUhKSOaJ0p7dGdIVv7IffSU',
    blogUrl: 'newscatgif.tumblr.com',
  };

  const tumblrURL = `https://api.tumblr.com/v2/blog/${CONFIG.blogUrl}/posts/photo?api_key=${CONFIG.apiKey}&limit=${CONFIG.limit}`;

  return fetch(tumblrURL, {
    method: 'GET',
    cache: 'default',
    signal: AbortSignal.timeout(10000), // 10 second timeout
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Failed to fetch tumbles:', error);
      throw error;
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

  data.response.posts.forEach((value, key) => {
    const keyNum = Number(key);
    const index = Math.pow(2, keyNum + 1);

    if (value?.photos?.[0]?.original_size?.url) {
      // @ts-ignore
      window.tumbles[index] = {
        id: keyNum,
        url: value.photos[0].original_size.url,
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
  getTumbles()
    .then((data) => {
      processTumbles(data);
      initializeGame();
    })
    .catch((error) => {
      console.error('Failed to load Tumblr data:', error);
      // Initialize game anyway with fallback behavior
      initializeGame();
    });
});
