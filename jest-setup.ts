import '@testing-library/jest-dom/jest-globals';

// Polyfill for TextEncoder/TextDecoder in Jest environment
if (typeof global.TextEncoder === 'undefined') {
  const { TextEncoder, TextDecoder } = require('util');
  Object.assign(global, { TextEncoder, TextDecoder });
}
