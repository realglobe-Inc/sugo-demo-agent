/**
 * Demo of sugo agent
 * @class SugoDemoAgent
 */
'use strict'

const { SugoAgentBase } = require('sugo-agent-base')
const co = require('co')

/** @lends SugoDemoAgent */
class SugoDemoAgent extends SugoAgentBase {
  constructor (url, options = {}) {
    super(url, options)
  }
}

module.exports = SugoDemoAgent
