'use strict'

const sugoDemoAgent = require('sugo-demo-agent')
const co = require('co')

co(function * () {
  let agent = sugoDemoAgent('http://example.com')

  {
    // Check if server available
    let ok = yield agent.knock()
    /** ... */
  }
}).catch((err) => console.error(err))
