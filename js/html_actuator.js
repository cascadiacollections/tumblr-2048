// @ts-check
/**
 * Handles the HTML updates and rendering of the game.
 */
export class HTMLActuator {
  constructor() {
    this.tileContainer = document.querySelector('.tile-container');
    this.scoreContainer = document.querySelector('.score-container');
    this.bestContainer = document.querySelector('.best-container');
    this.messageContainer = document.querySelector('.game-message');
    this.score = 0;
  }
  actuate(grid, metadata) {
    const self = this;

    window.requestAnimationFrame(function () {
      self.clearContainer(self.tileContainer);

      grid.cells.forEach(function (column) {
        column.forEach(function (cell) {
          if (cell) {
            self.addTile(cell);
          }
        });
      });

      self.updateScore(metadata.score);
      self.updateBestScore(metadata.bestScore);

      if (metadata.terminated) {
        if (metadata.over) {
          self.message(false); // You lose
        } else if (metadata.won) {
          self.message(true); // You win!
        }
      }
    });
  }
  // Continues the game (both restart and keep playing)
  continue() {
    this.clearMessage();
  }
  clearContainer(container) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }
  /**
   * Adds a tile to the grid.
   * @param {Tile} tile
   */
  addTile(tile) {
    const self = this;

    const wrapper = document.createElement('div');
    const inner = document.createElement('div');
    const position = tile.previousPosition || { x: tile.x, y: tile.y };
    const positionClass = this.positionClass(position);

    // We can't use classlist because it somehow glitches when replacing classes
    const classes = ['tile', 'tile-' + tile.value, positionClass];

    if (tile.value > 2048) {
      classes.push('tile-super');
    }

    this.applyClasses(wrapper, classes);

    inner.classList.add('tile-inner');
    inner.textContent = String(tile.value);

    // TODO: Kevin added
    // @ts-ignore
    if (window.tumbles && window.tumbles[tile.value]) {
      // @ts-ignore
      inner.innerHTML = '<img src="' + window.tumbles[tile.value].url + '" alt="Cat GIF" />';
    }

    if (tile.previousPosition) {
      // Make sure that the tile gets rendered in the previous position first
      window.requestAnimationFrame(function () {
        classes[2] = self.positionClass({ x: tile.x, y: tile.y });
        self.applyClasses(wrapper, classes); // Update the position
      });
    } else if (tile.mergedFrom) {
      classes.push('tile-merged');
      this.applyClasses(wrapper, classes);

      // Render the tiles that merged
      tile.mergedFrom.forEach(function (merged) {
        self.addTile(merged);
      });
    } else {
      classes.push('tile-new');
      this.applyClasses(wrapper, classes);
    }

    // Add the inner part of the tile to the wrapper
    wrapper.appendChild(inner);

    // Put the tile on the board
    // @ts-ignore
    this.tileContainer.appendChild(wrapper);
  }
  /**
   * Applies classes to an element.
   * @param {HTMLElement} element
   * @param {string[]} classes
   */
  applyClasses(element, classes) {
    element.setAttribute('class', classes.join(' '));
  }

  /**
   * Normalizes the position (1-based index).
   * @param {{x: number, y: number}} position
   * @returns {{x: number, y: number}}
   */
  normalizePosition(position) {
    return { x: position.x + 1, y: position.y + 1 };
  }

  /**
   * Generates the class name for a position.
   * @param {{x: number, y: number}} position
   * @returns {string}
   */
  positionClass(position) {
    position = this.normalizePosition(position);
    return 'tile-position-' + position.x + '-' + position.y;
  }

  /**
   * Updates the score.
   * @param {number} score
   */
  updateScore(score) {
    //this.clearContainer(this.scoreContainer);
    const difference = score - this.score;
    this.score = score;

    //this.scoreContainer.textContent = this.score;
    if (difference > 0) {
      const addition = document.createElement('div');
      addition.classList.add('score-addition');
      addition.textContent = '+' + difference;

      //this.scoreContainer.appendChild(addition);
    }

    // @ts-ignore
    if (window.tumbles && window.tumbles[highestTileIndex]) {
      // @ts-ignore
      const percentage = Math.round((window.tumbles[highestTileIndex].id / 11) * 100);
      document.documentElement.setAttribute('data-progrecss', String(percentage));
    }
  }

  /**
   * Updates the best score.
   * @param {number} _bestScore
   */
  updateBestScore(_bestScore) {
    //this.bestContainer.textContent = bestScore;
  }

  /**
   * Displays a message (win/lose).
   * @param {boolean} won
   */
  message(won) {
    const type = won ? 'game-won' : 'game-over';
    const message = won ? 'You win!' : 'Game over!';

    // @ts-ignore
    this.messageContainer.classList.add(type);
    // @ts-ignore
    this.messageContainer.getElementsByTagName('p')[0].textContent = message;
  }

  /**
   * Clears the message.
   */
  clearMessage() {
    // IE only takes one value to remove at a time.
    // @ts-ignore
    this.messageContainer.classList.remove('game-won');
    // @ts-ignore
    this.messageContainer.classList.remove('game-over');
  }
}
