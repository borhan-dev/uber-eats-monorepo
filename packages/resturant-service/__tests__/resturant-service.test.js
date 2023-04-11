'use strict';

const resturantService = require('..');
const assert = require('assert').strict;

assert.strictEqual(resturantService(), 'Hello from resturantService');
console.info('resturantService tests passed');
