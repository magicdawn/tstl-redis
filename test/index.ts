#!lua

import '../src'

redis.call('set', 'some-key', 'some-value')
redis.call('set', 'x', 1)
redis.call('expire', 'hello')

redis.sha1hex('hello')

redis.log(redis.LOG_DEBUG, '1')

redis.setresp(2)
redis.setresp(3)

redis.log(redis.LOG_DEBUG, '')
cjson.decode('{"name": "tstl-redis"}')

redis.call('setnx', 'name', 'value')
redis.call('set', 'hello', 'value')
