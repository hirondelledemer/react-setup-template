import '@testing-library/jest-dom/jest-globals';

// Polyfill for TextEncoder/TextDecoder in Jest environment
if (typeof global.TextEncoder === 'undefined') {
  const { TextEncoder, TextDecoder } = require('util');
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}
