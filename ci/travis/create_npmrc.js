#!/usr/bin/env node

/**
 * Create .npmrc
 */

process.chdir(`${__dirname}/../..`)

const { createNpmrc } = require('sg-travis')

createNpmrc({})
