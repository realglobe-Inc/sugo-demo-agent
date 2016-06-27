/**
 * Test case for sugoDemoAgent.
 * Runs with mocha.
 */
'use strict'

const SugoDemoAgent = require('../lib/sugo_demo_agent.js')
const assert = require('assert')
const sgServer = require('sg-server')
const { freeport } = sgServer
const co = require('co')

describe('sugo-demo-agent', function () {
  this.timeout(3000)
  let server, port
  before(() => co(function * () {
    port = yield freeport()
    server = sgServer({
      endpoints: {
        '/api/foo': (ctx) => {
          ctx.set('foo', 'This is foo')
          ctx.body = null
        }
      }
    })

    yield server.listen(port)
  }))

  after(() => co(function * () {
    yield server.close()
  }))

  it('Sugo demo agent', () => co(function * () {
    let agent = new SugoDemoAgent(`http://localhost:${port}`)
    assert.ok(agent)
    let ok = yield agent.knock('/api/foo')
    assert.ok(ok)
  }))
})

/* global describe, before, after, it */
