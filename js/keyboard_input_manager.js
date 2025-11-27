// @ts-check
/**
 * Manages keyboard and touch input.
 */
export class KeyboardInputManager {
  constructor() {
    this.events = {};

    if (window.navigator.msPointerEnabled) {
      //Internet Explorer 10 style
      this.eventTouchstart = 'MSPointerDown';
      this.eventTouchmove = 'MSPointerMove';
      this.eventTouchend = 'MSPointerUp';
    } else {
      this.eventTouchstart = 'touchstart';
      this.eventTouchmove = 'touchmove';
      this.eventTouchend = 'touchend';
    }

    this.listen();
  }
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }
  emit(event, data) {
    const callbacks = this.events[event];
    if (callbacks) {
      callbacks.forEach(function (callback) {
        callback(data);
      });
    }
  }
  /**
   * Listen for input events.
   */
  listen() {
    const self = this;

    const map = {
      38: 0,
      39: 1,
      40: 2,
      37: 3,
      75: 0,
      76: 1,
      74: 2,
      72: 3,
      87: 0,
      68: 1,
      83: 2,
      65: 3, // A
    };

    // @ts-ignore
    document.addEventListener('keydown', function (event) {
      const modifiers = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
      const mapped = map[event.which];

      if (!modifiers) {
        if (mapped !== undefined) {
          event.preventDefault();
          self.emit('move', mapped);
        }

        if (event.which === 32) {
          self.restart.bind(self)(event);
        }
      }
    });

    const retry = document.querySelector('.retry-button');
    // @ts-ignore
    retry.addEventListener('click', this.restart.bind(this));
    // @ts-ignore
    retry.addEventListener(this.eventTouchend, this.restart.bind(this));

    const keepPlaying = document.querySelector('.keep-playing-button');
    // @ts-ignore
    keepPlaying.addEventListener('click', this.keepPlaying.bind(this));
    // @ts-ignore
    keepPlaying.addEventListener('touchend', this.keepPlaying.bind(this));

    // Listen to swipe events
    let touchStartClientX, touchStartClientY;
    const gameContainer = document.getElementsByClassName('game-container')[0];

    // @ts-ignore
    gameContainer.addEventListener(this.eventTouchstart, function (event) {
      if (
        (!window.navigator.msPointerEnabled && event.touches.length > 1) ||
        event.targetTouches > 1
      ) {
        return;
      }

      if (window.navigator.msPointerEnabled) {
        touchStartClientX = event.pageX;
        touchStartClientY = event.pageY;
      } else {
        touchStartClientX = event.touches[0].clientX;
        touchStartClientY = event.touches[0].clientY;
      }

      event.preventDefault();
    });

    // @ts-ignore
    gameContainer.addEventListener(this.eventTouchmove, function (event) {
      event.preventDefault();
    });

    // @ts-ignore
    gameContainer.addEventListener(this.eventTouchend, function (event) {
      if (
        (!window.navigator.msPointerEnabled && event.touches.length > 0) ||
        event.targetTouches > 0
      ) {
        return;
      }

      let touchEndClientX, touchEndClientY;

      if (window.navigator.msPointerEnabled) {
        touchEndClientX = event.pageX;
        touchEndClientY = event.pageY;
      } else {
        touchEndClientX = event.changedTouches[0].clientX;
        touchEndClientY = event.changedTouches[0].clientY;
      }

      const dx = touchEndClientX - touchStartClientX;
      const absDx = Math.abs(dx);

      const dy = touchEndClientY - touchStartClientY;
      const absDy = Math.abs(dy);

      if (Math.max(absDx, absDy) > 10) {
        // (right : left) : (down : up)
        self.emit('move', absDx > absDy ? (dx > 0 ? 1 : 3) : dy > 0 ? 2 : 0);
      }
    });
  }
  /**
   * Restart the game.
   * @param {Event} event
   */
  restart(event) {
    event.preventDefault();
    this.emit('restart');
  }

  /**
   * Keep playing.
   * @param {Event} event
   */
  keepPlaying(event) {
    event.preventDefault();
    this.emit('keepPlaying');
  }
}
