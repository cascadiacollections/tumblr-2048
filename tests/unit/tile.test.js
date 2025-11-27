import { describe, it, expect, beforeEach } from 'vitest';
import { Tile } from '../../js/tile.js';

describe('Tile', () => {
  let tile;

  beforeEach(() => {
    tile = new Tile({ x: 0, y: 0 }, 2);
  });

  it('should create a tile with correct position and value', () => {
    expect(tile.x).toBe(0);
    expect(tile.y).toBe(0);
    expect(tile.value).toBe(2);
  });

  it('should save position correctly', () => {
    tile.savePosition();
    expect(tile.previousPosition).toEqual({ x: 0, y: 0 });
  });

  it('should update position correctly', () => {
    const newPosition = { x: 1, y: 1 };
    tile.updatePosition(newPosition);
    expect(tile.x).toBe(1);
    expect(tile.y).toBe(1);
  });

  it('should serialize to JSON correctly', () => {
    const json = tile.serialize();
    expect(json).toEqual({
      position: { x: 0, y: 0 },
      value: 2,
    });
  });
});
