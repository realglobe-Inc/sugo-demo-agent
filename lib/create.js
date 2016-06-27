/**
 * Create an instance
 * @function create
 * @returns {SugoDemoAgent}
 */
'use strict'

const SugoDemoAgent = require('./sugo_demo_agent')

/** @lends create */
function create (...args) {
  return new SugoDemoAgent(...args)
}

module.exports = create
