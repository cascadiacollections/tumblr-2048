// @ts-check
import { Tile } from './tile.js';

/**
 * Represents the game grid.
 */
export class Grid {
  /**
   * @param {number} size - The size of the grid (e.g., 4 for 4x4).
   */
  constructor(size) {
    this.size = size;

    /** @type {(Tile|null)[][]} */
    this.cells = [];

    this.build();
  }

  /**
   * Build a grid of the specified size
   */
  build() {
    for (let x = 0; x < this.size; x++) {
      const row = (this.cells[x] = []);

      for (let y = 0; y < this.size; y++) {
        row.push(null);
      }
    }
  }

  /**
   * Find the first available random position
   * @returns {{x: number, y: number} | undefined}
   */
  randomAvailableCell() {
    const cells = this.availableCells();

    if (cells.length) {
      return cells[Math.floor(Math.random() * cells.length)];
    }
  }

  /**
   * Get all available cells
   * @returns {{x: number, y: number}[]}
   */
  availableCells() {
    const cells = [];

    this.eachCell(function (x, y, tile) {
      if (!tile) {
        cells.push({ x: x, y: y });
      }
    });

    return cells;
  }

  /**
   * Call callback for every cell
   * @param {(x: number, y: number, tile: Tile|null) => void} callback
   */
  eachCell(callback) {
    for (let x = 0; x < this.size; x++) {
      for (let y = 0; y < this.size; y++) {
        callback(x, y, this.cells[x][y]);
      }
    }
  }

  /**
   * Check if there are any cells available
   * @returns {boolean}
   */
  cellsAvailable() {
    return !!this.availableCells().length;
  }

  /**
   * Check if the specified cell is taken
   * @param {{x: number, y: number}} cell
   * @returns {boolean}
   */
  cellAvailable(cell) {
    return !this.cellOccupied(cell);
  }

  /**
   * Check if the specified cell is occupied
   * @param {{x: number, y: number}} cell
   * @returns {boolean}
   */
  cellOccupied(cell) {
    return !!this.cellContent(cell);
  }

  /**
   * Get the content of the specified cell
   * @param {{x: number, y: number}} cell
   * @returns {Tile|null}
   */
  cellContent(cell) {
    if (this.withinBounds(cell)) {
      return this.cells[cell.x][cell.y];
    } else {
      return null;
    }
  }

  // TODO: Kevin
  /**
   * Updates the highest tile index if the new tile is larger.
   * @param {Tile} tile
   */
  setHighestTile(tile) {
    if (tile.value > highestTileIndex) {
      highestTileIndex = tile.value;
    }
  }

  /**
   * Inserts a tile at its position
   * @param {Tile} tile
   */
  insertTile(tile) {
    this.setHighestTile(tile);
    this.cells[tile.x][tile.y] = tile;
  }

  /**
   * Removes a tile from its position
   * @param {Tile} tile
   */
  removeTile(tile) {
    this.cells[tile.x][tile.y] = null;
  }

  /**
   * Check if a position is within the grid bounds
   * @param {{x: number, y: number}} position
   * @returns {boolean}
   */
  withinBounds(position) {
    return position.x >= 0 && position.x < this.size && position.y >= 0 && position.y < this.size;
  }
}

/** @type {number} */
let highestTileIndex = 0;
