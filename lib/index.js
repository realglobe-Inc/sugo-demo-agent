/**
 * Demo of sugo agent
 * @module sugo-demo-agent
 */

'use strict'

const create = require('./create')
const SugoDemoAgent = require('./sugo_demo_agent')

let lib = create.bind(this)

Object.assign(lib, SugoDemoAgent, {
  create,
  SugoDemoAgent
})

module.exports = lib
