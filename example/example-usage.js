'use strict'

const sugoDemoAgent = require('sugo-demo-agent')
const co = require('co')

co(function * () {
  let agent = sugoDemoAgent('/foo/bar')

  // Check if server available
  {
    let ok = yield agent.knock() // Send HTTP HEAD request.
    /* ... */
  }
}).catch((err) => console.error(err))
