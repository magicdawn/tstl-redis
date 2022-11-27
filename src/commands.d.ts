type Key = string; // redis key
type Pattern = string; // redis key
type UnixTime = number;

declare type RedisCommands = {
  ["ACL"]: () => void;

  ["ACL CAT"]: (categoryname?: string) => void;

  ["ACL DELUSER"]: (...username: string[]) => void;

  ["ACL DRYRUN"]: (username: string, command: string, ...arg: string[]) => void;

  ["ACL GENPASS"]: (bits?: number) => void;

  ["ACL GETUSER"]: (username: string) => void;

  ["ACL HELP"]: () => void;

  ["ACL LIST"]: () => void;

  ["ACL LOAD"]: () => void;

  ["ACL LOG"]: (operation?: oneof) => void;

  ["ACL SAVE"]: () => void;

  ["ACL SETUSER"]: (username: string, ...rule: string[]) => void;

  ["ACL USERS"]: () => void;

  ["ACL WHOAMI"]: () => void;

  ["APPEND"]: (key: Key, value: string) => void;

  ["ASKING"]: () => void;

  ["AUTH"]: (username?: string, password: string) => void;

  ["BGREWRITEAOF"]: () => void;

  ["BGSAVE"]: (schedule?: "SCHEDULE") => void;

  ["BITCOUNT"]: (key: Key, index?: block) => void;

  ["BITFIELD"]: (key: Key, ...operation: oneof[]) => void;

  ["BITFIELD_RO"]: (key: Key, ...encoding_offset: block[]) => void;

  ["BITOP"]: (operation: string, destkey: Key, ...key: Key[]) => void;

  ["BITPOS"]: (key: Key, bit: number, index?: block) => void;

  ["BLMOVE"]: (
    source: Key,
    destination: Key,
    wherefrom: oneof,
    whereto: oneof,
    timeout: number
  ) => void;

  ["BLMPOP"]: (
    timeout: number,
    numkeys: number,
    ...key: Key[],
    where: oneof,
    count?: number
  ) => void;

  ["BLPOP"]: (...key: Key[], timeout: number) => void;

  ["BRPOP"]: (...key: Key[], timeout: number) => void;

  ["BRPOPLPUSH"]: (source: Key, destination: Key, timeout: number) => void;

  ["BZMPOP"]: (
    timeout: number,
    numkeys: number,
    ...key: Key[],
    where: oneof,
    count?: number
  ) => void;

  ["BZPOPMAX"]: (...key: Key[], timeout: number) => void;

  ["BZPOPMIN"]: (...key: Key[], timeout: number) => void;

  ["CLIENT"]: () => void;

  ["CLIENT CACHING"]: (mode: oneof) => void;

  ["CLIENT GETNAME"]: () => void;

  ["CLIENT GETREDIR"]: () => void;

  ["CLIENT HELP"]: () => void;

  ["CLIENT ID"]: () => void;

  ["CLIENT INFO"]: () => void;

  ["CLIENT KILL"]: (filter: oneof) => void;

  ["CLIENT LIST"]: (normal_master_replica_pubsub?: oneof, id?: block) => void;

  ["CLIENT NO-EVICT"]: (enabled: oneof) => void;

  ["CLIENT PAUSE"]: (timeout: number, mode?: oneof) => void;

  ["CLIENT REPLY"]: (on_off_skip: oneof) => void;

  ["CLIENT SETNAME"]: (connection_name: string) => void;

  ["CLIENT TRACKING"]: (
    status: oneof,
    client_id?: number,
    ...prefix: string[],
    bcast?: "BCAST",
    optin?: "OPTIN",
    optout?: "OPTOUT",
    noloop?: "NOLOOP"
  ) => void;

  ["CLIENT TRACKINGINFO"]: () => void;

  ["CLIENT UNBLOCK"]: (client_id: number, timeout_error?: oneof) => void;

  ["CLIENT UNPAUSE"]: () => void;

  ["CLUSTER"]: () => void;

  ["CLUSTER ADDSLOTS"]: (...slot: number[]) => void;

  ["CLUSTER ADDSLOTSRANGE"]: (...start_slot_end_slot: block[]) => void;

  ["CLUSTER BUMPEPOCH"]: () => void;

  ["CLUSTER COUNT-FAILURE-REPORTS"]: (node_id: string) => void;

  ["CLUSTER COUNTKEYSINSLOT"]: (slot: number) => void;

  ["CLUSTER DELSLOTS"]: (...slot: number[]) => void;

  ["CLUSTER DELSLOTSRANGE"]: (...start_slot_end_slot: block[]) => void;

  ["CLUSTER FAILOVER"]: (options?: oneof) => void;

  ["CLUSTER FLUSHSLOTS"]: () => void;

  ["CLUSTER FORGET"]: (node_id: string) => void;

  ["CLUSTER GETKEYSINSLOT"]: (slot: number, count: number) => void;

  ["CLUSTER HELP"]: () => void;

  ["CLUSTER INFO"]: () => void;

  ["CLUSTER KEYSLOT"]: (key: string) => void;

  ["CLUSTER LINKS"]: () => void;

  ["CLUSTER MEET"]: (
    ip: string,
    port: number,
    cluster_bus_port?: number
  ) => void;

  ["CLUSTER MYID"]: () => void;

  ["CLUSTER NODES"]: () => void;

  ["CLUSTER REPLICAS"]: (node_id: string) => void;

  ["CLUSTER REPLICATE"]: (node_id: string) => void;

  ["CLUSTER RESET"]: (hard_soft?: oneof) => void;

  ["CLUSTER SAVECONFIG"]: () => void;

  ["CLUSTER SET-CONFIG-EPOCH"]: (config_epoch: number) => void;

  ["CLUSTER SETSLOT"]: (slot: number, subcommand: oneof) => void;

  ["CLUSTER SHARDS"]: () => void;

  ["CLUSTER SLAVES"]: (node_id: string) => void;

  ["CLUSTER SLOTS"]: () => void;

  ["COMMAND"]: () => void;

  ["COMMAND COUNT"]: () => void;

  ["COMMAND DOCS"]: (...command_name: string[]) => void;

  ["COMMAND GETKEYS"]: () => void;

  ["COMMAND GETKEYSANDFLAGS"]: () => void;

  ["COMMAND HELP"]: () => void;

  ["COMMAND INFO"]: (...command_name: string[]) => void;

  ["COMMAND LIST"]: (filterby?: oneof) => void;

  ["CONFIG"]: () => void;

  ["CONFIG GET"]: (...parameter: block[]) => void;

  ["CONFIG HELP"]: () => void;

  ["CONFIG RESETSTAT"]: () => void;

  ["CONFIG REWRITE"]: () => void;

  ["CONFIG SET"]: (...parameter_value: block[]) => void;

  ["COPY"]: (
    source: Key,
    destination: Key,
    destination_db?: number,
    replace?: "REPLACE"
  ) => void;

  ["DBSIZE"]: () => void;

  ["DEBUG"]: () => void;

  ["DECR"]: (key: Key) => void;

  ["DECRBY"]: (key: Key, decrement: number) => void;

  ["DEL"]: (...key: Key[]) => void;

  ["DISCARD"]: () => void;

  ["DUMP"]: (key: Key) => void;

  ["ECHO"]: (message: string) => void;

  ["EVAL"]: (
    script: string,
    numkeys: number,
    ...key: Key[],
    ...arg: string[]
  ) => void;

  ["EVALSHA"]: (
    sha1: string,
    numkeys: number,
    ...key: Key[],
    ...arg: string[]
  ) => void;

  ["EVALSHA_RO"]: (
    sha1: string,
    numkeys: number,
    ...key: Key[],
    ...arg: string[]
  ) => void;

  ["EVAL_RO"]: (
    script: string,
    numkeys: number,
    ...key: Key[],
    ...arg: string[]
  ) => void;

  ["EXEC"]: () => void;

  ["EXISTS"]: (...key: Key[]) => void;

  ["EXPIRE"]: (key: Key, seconds: number, condition?: oneof) => void;

  ["EXPIREAT"]: (
    key: Key,
    unix_time_seconds: UnixTime,
    condition?: oneof
  ) => void;

  ["EXPIRETIME"]: (key: Key) => void;

  ["FAILOVER"]: (
    target?: block,
    abort?: "ABORT",
    milliseconds?: number
  ) => void;

  ["FCALL"]: (
    _function: string,
    numkeys: number,
    ...key: Key[],
    ...arg: string[]
  ) => void;

  ["FCALL_RO"]: (
    _function: string,
    numkeys: number,
    ...key: Key[],
    ...arg: string[]
  ) => void;

  ["FLUSHALL"]: (async?: oneof) => void;

  ["FLUSHDB"]: (async?: oneof) => void;

  ["FUNCTION"]: () => void;

  ["FUNCTION DELETE"]: (library_name: string) => void;

  ["FUNCTION DUMP"]: () => void;

  ["FUNCTION FLUSH"]: (async?: oneof) => void;

  ["FUNCTION HELP"]: () => void;

  ["FUNCTION KILL"]: () => void;

  ["FUNCTION LIST"]: (
    library_name_pattern?: string,
    withcode?: "WITHCODE"
  ) => void;

  ["FUNCTION LOAD"]: (replace?: "REPLACE", function_code: string) => void;

  ["FUNCTION RESTORE"]: (serialized_value: string, policy?: oneof) => void;

  ["FUNCTION STATS"]: () => void;

  ["GEOADD"]: (
    key: Key,
    condition?: oneof,
    change?: "CH",
    ...longitude_latitude_member: block[]
  ) => void;

  ["GEODIST"]: (
    key: Key,
    member1: string,
    member2: string,
    unit?: oneof
  ) => void;

  ["GEOHASH"]: (key: Key, ...member: string[]) => void;

  ["GEOPOS"]: (key: Key, ...member: string[]) => void;

  ["GEORADIUS"]: (
    key: Key,
    longitude: number,
    latitude: number,
    radius: number,
    unit: oneof,
    withcoord?: "WITHCOORD",
    withdist?: "WITHDIST",
    withhash?: "WITHHASH",
    count?: block,
    order?: oneof,
    key?: Key,
    key?: Key
  ) => void;

  ["GEORADIUSBYMEMBER"]: (
    key: Key,
    member: string,
    radius: number,
    unit: oneof,
    withcoord?: "WITHCOORD",
    withdist?: "WITHDIST",
    withhash?: "WITHHASH",
    count?: block,
    order?: oneof,
    key?: Key,
    key?: Key
  ) => void;

  ["GEORADIUSBYMEMBER_RO"]: (
    key: Key,
    member: string,
    radius: number,
    unit: oneof,
    withcoord?: "WITHCOORD",
    withdist?: "WITHDIST",
    withhash?: "WITHHASH",
    count?: block,
    order?: oneof
  ) => void;

  ["GEORADIUS_RO"]: (
    key: Key,
    longitude: number,
    latitude: number,
    radius: number,
    unit: oneof,
    withcoord?: "WITHCOORD",
    withdist?: "WITHDIST",
    withhash?: "WITHHASH",
    count?: block,
    order?: oneof
  ) => void;

  ["GEOSEARCH"]: (
    key: Key,
    from: oneof,
    by: oneof,
    order?: oneof,
    count?: block,
    withcoord?: "WITHCOORD",
    withdist?: "WITHDIST",
    withhash?: "WITHHASH"
  ) => void;

  ["GEOSEARCHSTORE"]: (
    destination: Key,
    source: Key,
    from: oneof,
    by: oneof,
    order?: oneof,
    count?: block,
    storedist?: "STOREDIST"
  ) => void;

  ["GET"]: (key: Key) => void;

  ["GETBIT"]: (key: Key, offset: number) => void;

  ["GETDEL"]: (key: Key) => void;

  ["GETEX"]: (key: Key, expiration?: oneof) => void;

  ["GETRANGE"]: (key: Key, start: number, end: number) => void;

  ["GETSET"]: (key: Key, value: string) => void;

  ["HDEL"]: (key: Key, ...field: string[]) => void;

  ["HELLO"]: (arguments?: block) => void;

  ["HEXISTS"]: (key: Key, field: string) => void;

  ["HGET"]: (key: Key, field: string) => void;

  ["HGETALL"]: (key: Key) => void;

  ["HINCRBY"]: (key: Key, field: string, increment: number) => void;

  ["HINCRBYFLOAT"]: (key: Key, field: string, increment: number) => void;

  ["HKEYS"]: (key: Key) => void;

  ["HLEN"]: (key: Key) => void;

  ["HMGET"]: (key: Key, ...field: string[]) => void;

  ["HMSET"]: (key: Key, ...field_value: block[]) => void;

  ["HRANDFIELD"]: (key: Key, options?: block) => void;

  ["HSCAN"]: (
    key: Key,
    cursor: number,
    pattern?: Pattern,
    count?: number
  ) => void;

  ["HSET"]: (key: Key, ...field_value: block[]) => void;

  ["HSETNX"]: (key: Key, field: string, value: string) => void;

  ["HSTRLEN"]: (key: Key, field: string) => void;

  ["HVALS"]: (key: Key) => void;

  ["INCR"]: (key: Key) => void;

  ["INCRBY"]: (key: Key, increment: number) => void;

  ["INCRBYFLOAT"]: (key: Key, increment: number) => void;

  ["INFO"]: (...section: string[]) => void;

  ["KEYS"]: (pattern: Pattern) => void;

  ["LASTSAVE"]: () => void;

  ["LATENCY"]: () => void;

  ["LATENCY DOCTOR"]: () => void;

  ["LATENCY GRAPH"]: (event: string) => void;

  ["LATENCY HELP"]: () => void;

  ["LATENCY HISTOGRAM"]: (...command: string[]) => void;

  ["LATENCY HISTORY"]: (event: string) => void;

  ["LATENCY LATEST"]: () => void;

  ["LATENCY RESET"]: (...event: string[]) => void;

  ["LCS"]: (
    key1: Key,
    key2: Key,
    len?: "LEN",
    idx?: "IDX",
    len?: number,
    withmatchlen?: "WITHMATCHLEN"
  ) => void;

  ["LINDEX"]: (key: Key, index: number) => void;

  ["LINSERT"]: (key: Key, where: oneof, pivot: string, element: string) => void;

  ["LLEN"]: (key: Key) => void;

  ["LMOVE"]: (
    source: Key,
    destination: Key,
    wherefrom: oneof,
    whereto: oneof
  ) => void;

  ["LMPOP"]: (
    numkeys: number,
    ...key: Key[],
    where: oneof,
    count?: number
  ) => void;

  ["LOLWUT"]: (version?: number) => void;

  ["LPOP"]: (key: Key, count?: number) => void;

  ["LPOS"]: (
    key: Key,
    element: string,
    rank?: number,
    num_matches?: number,
    len?: number
  ) => void;

  ["LPUSH"]: (key: Key, ...element: string[]) => void;

  ["LPUSHX"]: (key: Key, ...element: string[]) => void;

  ["LRANGE"]: (key: Key, start: number, stop: number) => void;

  ["LREM"]: (key: Key, count: number, element: string) => void;

  ["LSET"]: (key: Key, index: number, element: string) => void;

  ["LTRIM"]: (key: Key, start: number, stop: number) => void;

  ["MEMORY"]: () => void;

  ["MEMORY DOCTOR"]: () => void;

  ["MEMORY HELP"]: () => void;

  ["MEMORY MALLOC-STATS"]: () => void;

  ["MEMORY PURGE"]: () => void;

  ["MEMORY STATS"]: () => void;

  ["MEMORY USAGE"]: (key: Key, count?: number) => void;

  ["MGET"]: (...key: Key[]) => void;

  ["MIGRATE"]: (
    host: string,
    port: number,
    key_or_empty_string: oneof,
    destination_db: number,
    timeout: number,
    copy?: "COPY",
    replace?: "REPLACE",
    authentication?: oneof,
    ...key: Key[]
  ) => void;

  ["MODULE"]: () => void;

  ["MODULE HELP"]: () => void;

  ["MODULE LIST"]: () => void;

  ["MODULE LOAD"]: (path: string, ...arg: string[]) => void;

  ["MODULE LOADEX"]: (
    path: string,
    ...configs: block[],
    ...args: block[]
  ) => void;

  ["MODULE UNLOAD"]: (name: string) => void;

  ["MONITOR"]: () => void;

  ["MOVE"]: (key: Key, db: number) => void;

  ["MSET"]: (...key_value: block[]) => void;

  ["MSETNX"]: (...key_value: block[]) => void;

  ["MULTI"]: () => void;

  ["OBJECT"]: () => void;

  ["OBJECT ENCODING"]: (key: Key) => void;

  ["OBJECT FREQ"]: (key: Key) => void;

  ["OBJECT HELP"]: () => void;

  ["OBJECT IDLETIME"]: (key: Key) => void;

  ["OBJECT REFCOUNT"]: (key: Key) => void;

  ["PERSIST"]: (key: Key) => void;

  ["PEXPIRE"]: (key: Key, milliseconds: number, condition?: oneof) => void;

  ["PEXPIREAT"]: (
    key: Key,
    unix_time_milliseconds: UnixTime,
    condition?: oneof
  ) => void;

  ["PEXPIRETIME"]: (key: Key) => void;

  ["PFADD"]: (key: Key, ...element: string[]) => void;

  ["PFCOUNT"]: (...key: Key[]) => void;

  ["PFDEBUG"]: (subcommand: string, key: Key) => void;

  ["PFMERGE"]: (destkey: Key, ...sourcekey: Key[]) => void;

  ["PFSELFTEST"]: () => void;

  ["PING"]: (message?: string) => void;

  ["PSETEX"]: (key: Key, milliseconds: number, value: string) => void;

  ["PSUBSCRIBE"]: (...pattern: block[]) => void;

  ["PSYNC"]: (replicationid: string, offset: number) => void;

  ["PTTL"]: (key: Key) => void;

  ["PUBLISH"]: (channel: string, message: string) => void;

  ["PUBSUB"]: () => void;

  ["PUBSUB CHANNELS"]: (pattern?: Pattern) => void;

  ["PUBSUB HELP"]: () => void;

  ["PUBSUB NUMPAT"]: () => void;

  ["PUBSUB NUMSUB"]: (...channel: string[]) => void;

  ["PUBSUB SHARDCHANNELS"]: (pattern?: Pattern) => void;

  ["PUBSUB SHARDNUMSUB"]: (...shardchannel: string[]) => void;

  ["PUNSUBSCRIBE"]: (...pattern: Pattern[]) => void;

  ["QUIT"]: () => void;

  ["RANDOMKEY"]: () => void;

  ["READONLY"]: () => void;

  ["READWRITE"]: () => void;

  ["RENAME"]: (key: Key, newkey: Key) => void;

  ["RENAMENX"]: (key: Key, newkey: Key) => void;

  ["REPLCONF"]: () => void;

  ["REPLICAOF"]: (host: string, port: number) => void;

  ["RESET"]: () => void;

  ["RESTORE"]: (
    key: Key,
    ttl: number,
    serialized_value: string,
    replace?: "REPLACE",
    absttl?: "ABSTTL",
    seconds?: number,
    frequency?: number
  ) => void;

  ["RESTORE-ASKING"]: (
    key: Key,
    ttl: number,
    serialized_value: string,
    replace?: "REPLACE",
    absttl?: "ABSTTL",
    seconds?: number,
    frequency?: number
  ) => void;

  ["ROLE"]: () => void;

  ["RPOP"]: (key: Key, count?: number) => void;

  ["RPOPLPUSH"]: (source: Key, destination: Key) => void;

  ["RPUSH"]: (key: Key, ...element: string[]) => void;

  ["RPUSHX"]: (key: Key, ...element: string[]) => void;

  ["SADD"]: (key: Key, ...member: string[]) => void;

  ["SAVE"]: () => void;

  ["SCAN"]: (
    cursor: number,
    pattern?: Pattern,
    count?: number,
    type?: string
  ) => void;

  ["SCARD"]: (key: Key) => void;

  ["SCRIPT"]: () => void;

  ["SCRIPT DEBUG"]: (mode: oneof) => void;

  ["SCRIPT EXISTS"]: (...sha1: string[]) => void;

  ["SCRIPT FLUSH"]: (async?: oneof) => void;

  ["SCRIPT HELP"]: () => void;

  ["SCRIPT KILL"]: () => void;

  ["SCRIPT LOAD"]: (script: string) => void;

  ["SDIFF"]: (...key: Key[]) => void;

  ["SDIFFSTORE"]: (destination: Key, ...key: Key[]) => void;

  ["SELECT"]: (index: number) => void;

  ["SET"]: (
    key: Key,
    value: string,
    condition?: oneof,
    get?: "GET",
    expiration?: oneof
  ) => void;

  ["SETBIT"]: (key: Key, offset: number, value: number) => void;

  ["SETEX"]: (key: Key, seconds: number, value: string) => void;

  ["SETNX"]: (key: Key, value: string) => void;

  ["SETRANGE"]: (key: Key, offset: number, value: string) => void;

  ["SHUTDOWN"]: (
    nosave_save?: oneof,
    now?: "NOW",
    force?: "FORCE",
    abort?: "ABORT"
  ) => void;

  ["SINTER"]: (...key: Key[]) => void;

  ["SINTERCARD"]: (numkeys: number, ...key: Key[], limit?: number) => void;

  ["SINTERSTORE"]: (destination: Key, ...key: Key[]) => void;

  ["SISMEMBER"]: (key: Key, member: string) => void;

  ["SLAVEOF"]: (host: string, port: number) => void;

  ["SLOWLOG"]: () => void;

  ["SLOWLOG GET"]: (count?: number) => void;

  ["SLOWLOG HELP"]: () => void;

  ["SLOWLOG LEN"]: () => void;

  ["SLOWLOG RESET"]: () => void;

  ["SMEMBERS"]: (key: Key) => void;

  ["SMISMEMBER"]: (key: Key, ...member: string[]) => void;

  ["SMOVE"]: (source: Key, destination: Key, member: string) => void;

  ["SORT"]: (
    key: Key,
    pattern?: Pattern,
    offset_count?: block,
    ...pattern: Pattern[],
    order?: oneof,
    sorting?: "ALPHA",
    destination?: Key
  ) => void;

  ["SORT_RO"]: (
    key: Key,
    pattern?: Pattern,
    offset_count?: block,
    ...pattern: Pattern[],
    order?: oneof,
    sorting?: "ALPHA"
  ) => void;

  ["SPOP"]: (key: Key, count?: number) => void;

  ["SPUBLISH"]: (shardchannel: string, message: string) => void;

  ["SRANDMEMBER"]: (key: Key, count?: number) => void;

  ["SREM"]: (key: Key, ...member: string[]) => void;

  ["SSCAN"]: (
    key: Key,
    cursor: number,
    pattern?: Pattern,
    count?: number
  ) => void;

  ["SSUBSCRIBE"]: (...shardchannel: string[]) => void;

  ["STRLEN"]: (key: Key) => void;

  ["SUBSCRIBE"]: (...channel: string[]) => void;

  ["SUBSTR"]: (key: Key, start: number, end: number) => void;

  ["SUNION"]: (...key: Key[]) => void;

  ["SUNIONSTORE"]: (destination: Key, ...key: Key[]) => void;

  ["SUNSUBSCRIBE"]: (...shardchannel: string[]) => void;

  ["SWAPDB"]: (index1: number, index2: number) => void;

  ["SYNC"]: () => void;

  ["TIME"]: () => void;

  ["TOUCH"]: (...key: Key[]) => void;

  ["TTL"]: (key: Key) => void;

  ["TYPE"]: (key: Key) => void;

  ["UNLINK"]: (...key: Key[]) => void;

  ["UNSUBSCRIBE"]: (...channel: string[]) => void;

  ["UNWATCH"]: () => void;

  ["WAIT"]: (numreplicas: number, timeout: number) => void;

  ["WATCH"]: (...key: Key[]) => void;

  ["XACK"]: (key: Key, group: string, ...id: string[]) => void;

  ["XADD"]: (
    key: Key,
    nomkstream?: "NOMKSTREAM",
    trim?: block,
    id_or_auto: oneof,
    ...field_value: block[]
  ) => void;

  ["XAUTOCLAIM"]: (
    key: Key,
    group: string,
    consumer: string,
    min_idle_time: string,
    start: string,
    count?: number,
    justid?: "JUSTID"
  ) => void;

  ["XCLAIM"]: (
    key: Key,
    group: string,
    consumer: string,
    min_idle_time: string,
    ...id: string[],
    ms?: number,
    unix_time_milliseconds?: UnixTime,
    count?: number,
    force?: "FORCE",
    justid?: "JUSTID",
    id?: string
  ) => void;

  ["XDEL"]: (key: Key, ...id: string[]) => void;

  ["XGROUP"]: () => void;

  ["XGROUP CREATE"]: (
    key: Key,
    groupname: string,
    id: oneof,
    mkstream?: "MKSTREAM",
    entries_read?: number
  ) => void;

  ["XGROUP CREATECONSUMER"]: (
    key: Key,
    groupname: string,
    consumername: string
  ) => void;

  ["XGROUP DELCONSUMER"]: (
    key: Key,
    groupname: string,
    consumername: string
  ) => void;

  ["XGROUP DESTROY"]: (key: Key, groupname: string) => void;

  ["XGROUP HELP"]: () => void;

  ["XGROUP SETID"]: (
    key: Key,
    groupname: string,
    id: oneof,
    entries_read?: number
  ) => void;

  ["XINFO"]: () => void;

  ["XINFO CONSUMERS"]: (key: Key, groupname: string) => void;

  ["XINFO GROUPS"]: (key: Key) => void;

  ["XINFO HELP"]: () => void;

  ["XINFO STREAM"]: (key: Key, full?: block) => void;

  ["XLEN"]: (key: Key) => void;

  ["XPENDING"]: (key: Key, group: string, filters?: block) => void;

  ["XRANGE"]: (key: Key, start: string, end: string, count?: number) => void;

  ["XREAD"]: (count?: number, milliseconds?: number, streams: block) => void;

  ["XREADGROUP"]: (
    group_consumer: block,
    count?: number,
    milliseconds?: number,
    noack?: "NOACK",
    streams: block
  ) => void;

  ["XREVRANGE"]: (key: Key, end: string, start: string, count?: number) => void;

  ["XSETID"]: (
    key: Key,
    last_id: string,
    entries_added?: number,
    max_deleted_entry_id?: string
  ) => void;

  ["XTRIM"]: (key: Key, trim: block) => void;

  ["ZADD"]: (
    key: Key,
    condition?: oneof,
    comparison?: oneof,
    change?: "CH",
    increment?: "INCR",
    ...score_member: block[]
  ) => void;

  ["ZCARD"]: (key: Key) => void;

  ["ZCOUNT"]: (key: Key, min: number, max: number) => void;

  ["ZDIFF"]: (
    numkeys: number,
    ...key: Key[],
    withscores?: "WITHSCORES"
  ) => void;

  ["ZDIFFSTORE"]: (destination: Key, numkeys: number, ...key: Key[]) => void;

  ["ZINCRBY"]: (key: Key, increment: number, member: string) => void;

  ["ZINTER"]: (
    numkeys: number,
    ...key: Key[],
    ...weight: number[],
    aggregate?: oneof,
    withscores?: "WITHSCORES"
  ) => void;

  ["ZINTERCARD"]: (numkeys: number, ...key: Key[], limit?: number) => void;

  ["ZINTERSTORE"]: (
    destination: Key,
    numkeys: number,
    ...key: Key[],
    ...weight: number[],
    aggregate?: oneof
  ) => void;

  ["ZLEXCOUNT"]: (key: Key, min: string, max: string) => void;

  ["ZMPOP"]: (
    numkeys: number,
    ...key: Key[],
    where: oneof,
    count?: number
  ) => void;

  ["ZMSCORE"]: (key: Key, ...member: string[]) => void;

  ["ZPOPMAX"]: (key: Key, count?: number) => void;

  ["ZPOPMIN"]: (key: Key, count?: number) => void;

  ["ZRANDMEMBER"]: (key: Key, options?: block) => void;

  ["ZRANGE"]: (
    key: Key,
    start: string,
    stop: string,
    sortby?: oneof,
    rev?: "REV",
    offset_count?: block,
    withscores?: "WITHSCORES"
  ) => void;

  ["ZRANGEBYLEX"]: (
    key: Key,
    min: string,
    max: string,
    offset_count?: block
  ) => void;

  ["ZRANGEBYSCORE"]: (
    key: Key,
    min: number,
    max: number,
    withscores?: "WITHSCORES",
    offset_count?: block
  ) => void;

  ["ZRANGESTORE"]: (
    dst: Key,
    src: Key,
    min: string,
    max: string,
    sortby?: oneof,
    rev?: "REV",
    offset_count?: block
  ) => void;

  ["ZRANK"]: (key: Key, member: string) => void;

  ["ZREM"]: (key: Key, ...member: string[]) => void;

  ["ZREMRANGEBYLEX"]: (key: Key, min: string, max: string) => void;

  ["ZREMRANGEBYRANK"]: (key: Key, start: number, stop: number) => void;

  ["ZREMRANGEBYSCORE"]: (key: Key, min: number, max: number) => void;

  ["ZREVRANGE"]: (
    key: Key,
    start: number,
    stop: number,
    withscores?: "WITHSCORES"
  ) => void;

  ["ZREVRANGEBYLEX"]: (
    key: Key,
    max: string,
    min: string,
    offset_count?: block
  ) => void;

  ["ZREVRANGEBYSCORE"]: (
    key: Key,
    max: number,
    min: number,
    withscores?: "WITHSCORES",
    offset_count?: block
  ) => void;

  ["ZREVRANK"]: (key: Key, member: string) => void;

  ["ZSCAN"]: (
    key: Key,
    cursor: number,
    pattern?: Pattern,
    count?: number
  ) => void;

  ["ZSCORE"]: (key: Key, member: string) => void;

  ["ZUNION"]: (
    numkeys: number,
    ...key: Key[],
    ...weight: number[],
    aggregate?: oneof,
    withscores?: "WITHSCORES"
  ) => void;

  ["ZUNIONSTORE"]: (
    destination: Key,
    numkeys: number,
    ...key: Key[],
    ...weight: number[],
    aggregate?: oneof
  ) => void;
};
