// @ts-check

/**
 * Represents a tile on the grid.
 */
export class Tile {
  /**
   * @param {{x: number, y: number}} position - The position of the tile.
   * @param {number} [value] - The value of the tile (default: 2).
   */
  constructor(position, value) {
    this.x = position.x;
    this.y = position.y;
    this.value = value || 2;

    /** @type {{x: number, y: number} | null} */
    this.previousPosition = null;
    /** @type {Tile[] | null} */
    this.mergedFrom = null; // Tracks tiles that merged together
  }

  /**
   * Saves the current position as the previous position.
   */
  savePosition() {
    this.previousPosition = { x: this.x, y: this.y };
  }

  /**
   * Updates the tile's position.
   * @param {{x: number, y: number}} position - The new position.
   */
  updatePosition(position) {
    this.x = position.x;
    this.y = position.y;
  }

  /**
   * Serializes the tile to a JSON object.
   * @returns {{position: {x: number, y: number}, value: number}}
   */
  serialize() {
    return {
      position: {
        x: this.x,
        y: this.y,
      },
      value: this.value,
    };
  }
}
