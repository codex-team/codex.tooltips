/**
 * The source loads its stylesheet with webpack's `require('../styles/main.css')`, which only
 * exists in the webpack build. Tests don't need the styles, so `require` returns an empty sheet.
 */
Object.assign(globalThis, { require: () => '' });
