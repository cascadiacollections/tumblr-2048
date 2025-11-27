// @ts-check

/**
 * @typedef {Object} StorageInterface
 * @property {Object.<string, string>} _data
 * @property {(id: string, val: any) => string} setItem
 * @property {(id: string) => string|undefined} getItem
 * @property {(id: string) => boolean} removeItem
 * @property {() => Object} clear
 */

/** @type {StorageInterface} */
window.fakeStorage = {
  _data: {},

  setItem: function (id, val) {
    return (this._data[id] = String(val));
  },

  getItem: function (id) {
    return Object.prototype.hasOwnProperty.call(this._data, id) ? this._data[id] : undefined;
  },

  removeItem: function (id) {
    return delete this._data[id];
  },

  clear: function () {
    return (this._data = {});
  },
};

/**
 * Manages score persistence using localStorage or a fake storage fallback.
 */
export class LocalScoreManager {
  constructor() {
    this.key = 'bestScore';

    const supported = this.localStorageSupported();
    this.storage = supported ? window.localStorage : window.fakeStorage;
  }

  /**
   * Check if localStorage is supported
   * @returns {boolean}
   */
  localStorageSupported() {
    const testKey = 'test';
    const storage = window.localStorage;

    try {
      storage.setItem(testKey, '1');
      storage.removeItem(testKey);
      return true;
    } catch (_error) {
      return false;
    }
  }

  /**
   * Get the current best score
   * @returns {number}
   */
  get() {
    // @ts-ignore
    return this.storage.getItem(this.key) || 0;
  }

  /**
   * Set the best score
   * @param {number} score
   */
  set(score) {
    // @ts-ignore
    this.storage.setItem(this.key, score);
  }
}
