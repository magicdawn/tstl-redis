#!lua

import '../src'

redis.call('set', 'some-key', 'some-value')
redis.call('set', 'x', 1)
redis.call('expire', 'hello')

const world = redis.sha1hex('hello')
// return world

redis.log(redis.LOG_DEBUG, '1')

redis.setresp(2)
redis.setresp(3)

redis.log(redis.LOG_DEBUG, '')
