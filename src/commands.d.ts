type Key = string // redis key
type Pattern = string // redis key
type UnixTime = number

declare type RedisCommands = {
  ['acl']: () => any
  ['acl cat']: (categoryname?: string) => any
  ['acl deluser']: (...username: string[]) => any
  ['acl dryrun']: (username: string, command: string, ...arg: string[]) => any
  ['acl genpass']: (bits?: number) => any
  ['acl getuser']: (username: string) => any
  ['acl help']: () => any
  ['acl list']: () => any
  ['acl load']: () => any
  ['acl save']: () => any
  ['acl setuser']: (username: string, ...rule: string[]) => any
  ['acl users']: () => any
  ['acl whoami']: () => any
  ['append']: (key: Key, value: string) => any
  ['asking']: () => any
  ['auth']: (username?: string, password: string) => any
  ['bgrewriteaof']: () => any
  ['bgsave']: (schedule?: 'SCHEDULE') => any
  ['bitop']: (operation: string, destkey: Key, ...key: Key[]) => any
  ['blpop']: (...key: Key[], timeout: number) => any
  ['brpop']: (...key: Key[], timeout: number) => any
  ['brpoplpush']: (source: Key, destination: Key, timeout: number) => any
  ['bzpopmax']: (...key: Key[], timeout: number) => any
  ['bzpopmin']: (...key: Key[], timeout: number) => any
  ['client']: () => any
  ['client getname']: () => any
  ['client getredir']: () => any
  ['client help']: () => any
  ['client id']: () => any
  ['client info']: () => any
  ['client setname']: (connection_name: string) => any
  ['client trackinginfo']: () => any
  ['client unpause']: () => any
  ['cluster']: () => any
  ['cluster addslots']: (...slot: number[]) => any
  ['cluster bumpepoch']: () => any
  ['cluster count-failure-reports']: (node_id: string) => any
  ['cluster countkeysinslot']: (slot: number) => any
  ['cluster delslots']: (...slot: number[]) => any
  ['cluster flushslots']: () => any
  ['cluster forget']: (node_id: string) => any
  ['cluster getkeysinslot']: (slot: number, count: number) => any
  ['cluster help']: () => any
  ['cluster info']: () => any
  ['cluster keyslot']: (key: string) => any
  ['cluster links']: () => any
  ['cluster meet']: (ip: string, port: number, cluster_bus_port?: number) => any
  ['cluster myid']: () => any
  ['cluster nodes']: () => any
  ['cluster replicas']: (node_id: string) => any
  ['cluster replicate']: (node_id: string) => any
  ['cluster saveconfig']: () => any
  ['cluster set-config-epoch']: (config_epoch: number) => any
  ['cluster shards']: () => any
  ['cluster slaves']: (node_id: string) => any
  ['cluster slots']: () => any
  ['command']: () => any
  ['command count']: () => any
  ['command docs']: (...command_name: string[]) => any
  ['command getkeys']: () => any
  ['command getkeysandflags']: () => any
  ['command help']: () => any
  ['command info']: (...command_name: string[]) => any
  ['config']: () => any
  ['config help']: () => any
  ['config resetstat']: () => any
  ['config rewrite']: () => any
  ['copy']: (source: Key, destination: Key, destination_db?: number, replace?: 'REPLACE') => any
  ['dbsize']: () => any
  ['debug']: () => any
  ['decr']: (key: Key) => any
  ['decrby']: (key: Key, decrement: number) => any
  ['del']: (...key: Key[]) => any
  ['discard']: () => any
  ['dump']: (key: Key) => any
  ['echo']: (message: string) => any
  ['eval']: (script: string, numkeys: number, ...key: Key[], ...arg: string[]) => any
  ['evalsha']: (sha1: string, numkeys: number, ...key: Key[], ...arg: string[]) => any
  ['evalsha_ro']: (sha1: string, numkeys: number, ...key: Key[], ...arg: string[]) => any
  ['eval_ro']: (script: string, numkeys: number, ...key: Key[], ...arg: string[]) => any
  ['exec']: () => any
  ['exists']: (...key: Key[]) => any
  ['expiretime']: (key: Key) => any
  ['fcall']: (_function: string, numkeys: number, ...key: Key[], ...arg: string[]) => any
  ['fcall_ro']: (_function: string, numkeys: number, ...key: Key[], ...arg: string[]) => any
  ['function']: () => any
  ['function delete']: (library_name: string) => any
  ['function dump']: () => any
  ['function help']: () => any
  ['function kill']: () => any
  ['function list']: (library_name_pattern?: string, withcode?: 'WITHCODE') => any
  ['function load']: (replace?: 'REPLACE', function_code: string) => any
  ['function stats']: () => any
  ['geohash']: (key: Key, ...member: string[]) => any
  ['geopos']: (key: Key, ...member: string[]) => any
  ['get']: (key: Key) => any
  ['getbit']: (key: Key, offset: number) => any
  ['getdel']: (key: Key) => any
  ['getrange']: (key: Key, start: number, end: number) => any
  ['getset']: (key: Key, value: string) => any
  ['hdel']: (key: Key, ...field: string[]) => any
  ['hexists']: (key: Key, field: string) => any
  ['hget']: (key: Key, field: string) => any
  ['hgetall']: (key: Key) => any
  ['hincrby']: (key: Key, field: string, increment: number) => any
  ['hincrbyfloat']: (key: Key, field: string, increment: number) => any
  ['hkeys']: (key: Key) => any
  ['hlen']: (key: Key) => any
  ['hmget']: (key: Key, ...field: string[]) => any
  ['hscan']: (key: Key, cursor: number, pattern?: Pattern, count?: number) => any
  ['hsetnx']: (key: Key, field: string, value: string) => any
  ['hstrlen']: (key: Key, field: string) => any
  ['hvals']: (key: Key) => any
  ['incr']: (key: Key) => any
  ['incrby']: (key: Key, increment: number) => any
  ['incrbyfloat']: (key: Key, increment: number) => any
  ['info']: (...section: string[]) => any
  ['keys']: (pattern: Pattern) => any
  ['lastsave']: () => any
  ['latency']: () => any
  ['latency doctor']: () => any
  ['latency graph']: (event: string) => any
  ['latency help']: () => any
  ['latency histogram']: (...command: string[]) => any
  ['latency history']: (event: string) => any
  ['latency latest']: () => any
  ['latency reset']: (...event: string[]) => any
  ['lcs']: (
    key1: Key,
    key2: Key,
    len?: 'LEN',
    idx?: 'IDX',
    len?: number,
    withmatchlen?: 'WITHMATCHLEN'
  ) => any
  ['lindex']: (key: Key, index: number) => any
  ['llen']: (key: Key) => any
  ['lolwut']: (version?: number) => any
  ['lpop']: (key: Key, count?: number) => any
  ['lpos']: (key: Key, element: string, rank?: number, num_matches?: number, len?: number) => any
  ['lpush']: (key: Key, ...element: string[]) => any
  ['lpushx']: (key: Key, ...element: string[]) => any
  ['lrange']: (key: Key, start: number, stop: number) => any
  ['lrem']: (key: Key, count: number, element: string) => any
  ['lset']: (key: Key, index: number, element: string) => any
  ['ltrim']: (key: Key, start: number, stop: number) => any
  ['memory']: () => any
  ['memory doctor']: () => any
  ['memory help']: () => any
  ['memory malloc-stats']: () => any
  ['memory purge']: () => any
  ['memory stats']: () => any
  ['memory usage']: (key: Key, count?: number) => any
  ['mget']: (...key: Key[]) => any
  ['module']: () => any
  ['module help']: () => any
  ['module list']: () => any
  ['module load']: (path: string, ...arg: string[]) => any
  ['module unload']: (name: string) => any
  ['monitor']: () => any
  ['move']: (key: Key, db: number) => any
  ['multi']: () => any
  ['object']: () => any
  ['object encoding']: (key: Key) => any
  ['object freq']: (key: Key) => any
  ['object help']: () => any
  ['object idletime']: (key: Key) => any
  ['object refcount']: (key: Key) => any
  ['persist']: (key: Key) => any
  ['pexpiretime']: (key: Key) => any
  ['pfadd']: (key: Key, ...element: string[]) => any
  ['pfcount']: (...key: Key[]) => any
  ['pfdebug']: (subcommand: string, key: Key) => any
  ['pfmerge']: (destkey: Key, ...sourcekey: Key[]) => any
  ['pfselftest']: () => any
  ['ping']: (message?: string) => any
  ['psetex']: (key: Key, milliseconds: number, value: string) => any
  ['psync']: (replicationid: string, offset: number) => any
  ['pttl']: (key: Key) => any
  ['publish']: (channel: string, message: string) => any
  ['pubsub']: () => any
  ['pubsub channels']: (pattern?: Pattern) => any
  ['pubsub help']: () => any
  ['pubsub numpat']: () => any
  ['pubsub numsub']: (...channel: string[]) => any
  ['pubsub shardchannels']: (pattern?: Pattern) => any
  ['pubsub shardnumsub']: (...shardchannel: string[]) => any
  ['punsubscribe']: (...pattern: Pattern[]) => any
  ['quit']: () => any
  ['randomkey']: () => any
  ['readonly']: () => any
  ['readwrite']: () => any
  ['rename']: (key: Key, newkey: Key) => any
  ['renamenx']: (key: Key, newkey: Key) => any
  ['replconf']: () => any
  ['replicaof']: (host: string, port: number) => any
  ['reset']: () => any
  ['restore']: (
    key: Key,
    ttl: number,
    serialized_value: string,
    replace?: 'REPLACE',
    absttl?: 'ABSTTL',
    seconds?: number,
    frequency?: number
  ) => any
  ['restore-asking']: (
    key: Key,
    ttl: number,
    serialized_value: string,
    replace?: 'REPLACE',
    absttl?: 'ABSTTL',
    seconds?: number,
    frequency?: number
  ) => any
  ['role']: () => any
  ['rpop']: (key: Key, count?: number) => any
  ['rpoplpush']: (source: Key, destination: Key) => any
  ['rpush']: (key: Key, ...element: string[]) => any
  ['rpushx']: (key: Key, ...element: string[]) => any
  ['sadd']: (key: Key, ...member: string[]) => any
  ['save']: () => any
  ['scan']: (cursor: number, pattern?: Pattern, count?: number, type?: string) => any
  ['scard']: (key: Key) => any
  ['script']: () => any
  ['script exists']: (...sha1: string[]) => any
  ['script help']: () => any
  ['script kill']: () => any
  ['script load']: (script: string) => any
  ['sdiff']: (...key: Key[]) => any
  ['sdiffstore']: (destination: Key, ...key: Key[]) => any
  ['select']: (index: number) => any
  ['setbit']: (key: Key, offset: number, value: number) => any
  ['setex']: (key: Key, seconds: number, value: string) => any
  ['setnx']: (key: Key, value: string) => any
  ['setrange']: (key: Key, offset: number, value: string) => any
  ['sinter']: (...key: Key[]) => any
  ['sintercard']: (numkeys: number, ...key: Key[], limit?: number) => any
  ['sinterstore']: (destination: Key, ...key: Key[]) => any
  ['sismember']: (key: Key, member: string) => any
  ['slaveof']: (host: string, port: number) => any
  ['slowlog']: () => any
  ['slowlog get']: (count?: number) => any
  ['slowlog help']: () => any
  ['slowlog len']: () => any
  ['slowlog reset']: () => any
  ['smembers']: (key: Key) => any
  ['smismember']: (key: Key, ...member: string[]) => any
  ['smove']: (source: Key, destination: Key, member: string) => any
  ['spop']: (key: Key, count?: number) => any
  ['spublish']: (shardchannel: string, message: string) => any
  ['srandmember']: (key: Key, count?: number) => any
  ['srem']: (key: Key, ...member: string[]) => any
  ['sscan']: (key: Key, cursor: number, pattern?: Pattern, count?: number) => any
  ['ssubscribe']: (...shardchannel: string[]) => any
  ['strlen']: (key: Key) => any
  ['subscribe']: (...channel: string[]) => any
  ['substr']: (key: Key, start: number, end: number) => any
  ['sunion']: (...key: Key[]) => any
  ['sunionstore']: (destination: Key, ...key: Key[]) => any
  ['sunsubscribe']: (...shardchannel: string[]) => any
  ['swapdb']: (index1: number, index2: number) => any
  ['sync']: () => any
  ['time']: () => any
  ['touch']: (...key: Key[]) => any
  ['ttl']: (key: Key) => any
  ['type']: (key: Key) => any
  ['unlink']: (...key: Key[]) => any
  ['unsubscribe']: (...channel: string[]) => any
  ['unwatch']: () => any
  ['wait']: (numreplicas: number, timeout: number) => any
  ['watch']: (...key: Key[]) => any
  ['xack']: (key: Key, group: string, ...id: string[]) => any
  ['xautoclaim']: (
    key: Key,
    group: string,
    consumer: string,
    min_idle_time: string,
    start: string,
    count?: number,
    justid?: 'JUSTID'
  ) => any
  ['xclaim']: (
    key: Key,
    group: string,
    consumer: string,
    min_idle_time: string,
    ...id: string[],
    ms?: number,
    unix_time_milliseconds?: UnixTime,
    count?: number,
    force?: 'FORCE',
    justid?: 'JUSTID',
    id?: string
  ) => any
  ['xdel']: (key: Key, ...id: string[]) => any
  ['xgroup']: () => any
  ['xgroup createconsumer']: (key: Key, groupname: string, consumername: string) => any
  ['xgroup delconsumer']: (key: Key, groupname: string, consumername: string) => any
  ['xgroup destroy']: (key: Key, groupname: string) => any
  ['xgroup help']: () => any
  ['xinfo']: () => any
  ['xinfo consumers']: (key: Key, groupname: string) => any
  ['xinfo groups']: (key: Key) => any
  ['xinfo help']: () => any
  ['xlen']: (key: Key) => any
  ['xrange']: (key: Key, start: string, end: string, count?: number) => any
  ['xrevrange']: (key: Key, end: string, start: string, count?: number) => any
  ['xsetid']: (
    key: Key,
    last_id: string,
    entries_added?: number,
    max_deleted_entry_id?: string
  ) => any
  ['zcard']: (key: Key) => any
  ['zcount']: (key: Key, min: number, max: number) => any
  ['zdiff']: (numkeys: number, ...key: Key[], withscores?: 'WITHSCORES') => any
  ['zdiffstore']: (destination: Key, numkeys: number, ...key: Key[]) => any
  ['zincrby']: (key: Key, increment: number, member: string) => any
  ['zintercard']: (numkeys: number, ...key: Key[], limit?: number) => any
  ['zlexcount']: (key: Key, min: string, max: string) => any
  ['zmscore']: (key: Key, ...member: string[]) => any
  ['zpopmax']: (key: Key, count?: number) => any
  ['zpopmin']: (key: Key, count?: number) => any
  ['zrank']: (key: Key, member: string) => any
  ['zrem']: (key: Key, ...member: string[]) => any
  ['zremrangebylex']: (key: Key, min: string, max: string) => any
  ['zremrangebyrank']: (key: Key, start: number, stop: number) => any
  ['zremrangebyscore']: (key: Key, min: number, max: number) => any
  ['zrevrange']: (key: Key, start: number, stop: number, withscores?: 'WITHSCORES') => any
  ['zrevrank']: (key: Key, member: string) => any
  ['zscan']: (key: Key, cursor: number, pattern?: Pattern, count?: number) => any
  ['zscore']: (key: Key, member: string) => any
}
