import '@testing-library/jest-dom/jest-globals';

if (typeof global.TextEncoder === 'undefined') {
  const { TextEncoder, TextDecoder } = require('util');
  Object.assign(global, { TextEncoder, TextDecoder });
}
