/* eslint-disable @typescript-eslint/triple-slash-reference */

/// <reference path='./commands.d.ts' />

type NotListed<T> = T extends keyof RedisCommands ? never : T

declare type Redis = {
  /**
   * call
   */
  // if command listed, use strict arguments
  call<CMD extends keyof RedisCommands>(
    this: void,
    cmd: CMD,
    ...args: Parameters<RedisCommands[CMD]>
  ): ReturnType<RedisCommands[CMD]>
  // https://stackoverflow.com/questions/51442157/type-for-every-possible-string-value-except
  // if command not listed, fallback to any
  call<CMD extends string>(this: void, cmd: NotListed<CMD>, ...args: any[]): any

  /**
   * pcall
   */

  // if command listed, use strict arguments
  pcall<CMD extends keyof RedisCommands>(
    this: void,
    cmd: CMD,
    ...args: Parameters<RedisCommands[CMD]>
  ): ReturnType<RedisCommands[CMD]>
  // if command not listed, fallback to any
  pcall<CMD extends string>(this: void, cmd: NotListed<CMD>, ...args: any[]): any

  error_reply(x: string): { err: string }
  status_reply(x: string): { ok: string }

  sha1hex(x: string): string

  log(level: REDIS_LOG_LEVEL, message: string): void
  LOG_DEBUG: REDIS_LOG_LEVEL.LOG_DEBUG
  LOG_VERBOSE: REDIS_LOG_LEVEL.LOG_VERBOSE
  LOG_NOTICE: REDIS_LOG_LEVEL.LOG_NOTICE
  LOG_WARNING: REDIS_LOG_LEVEL.LOG_WARNING

  /**
   * This function allows the executing script to switch between Redis Serialization Protocol (RESP)
   * versions for the replies returned by redis.call()](#redis.call) and [redis.pall().
   * It expects a single numerical argument as the protocol's version.
   * The default protocol version is 2, but it can be switched to version 3.
   */
  setresp(x: 2 | 3): void

  set_repl(x: REDIS_REPL_ENUM): void
  REPL_ALL: REDIS_REPL_ENUM.REPL_ALL // replicates the effects to the AOF and replicas.
  REPL_AOF: REDIS_REPL_ENUM.REPL_AOF // replicates the effects to the AOF alone.
  REPL_REPLICA: REDIS_REPL_ENUM.REPL_REPLICA // replicates the effects to the replicas alone.
  REPL_SLAVE: REDIS_REPL_ENUM.REPL_SLAVE // same as REPL_REPLICA, maintained for backward compatibility.
  REPL_NONE: REDIS_REPL_ENUM.REPL_NONE // disables effect replication entirely.

  replicate_commands(): void
  breakpoint(): void
  debug(x: any)

  // if command listed, use strict arguments
  acl_check_cmd<CMD extends keyof RedisCommands>(
    this: void,
    cmd: CMD,
    ...args: Parameters<RedisCommands[CMD]>
  ): boolean
  // if command not listed, fallback to any
  acl_check_cmd<CMD extends string>(this: void, cmd: NotListed<CMD>, ...args: any[]): boolean

  register_function(name: string, callback: () => any)
  register_function(options: {
    function_name: string
    callback: () => any
    flags?: ScriptFlags[]
    description?: string
  })

  /**
   * Since version: 7.0.0
   * Available in scripts: yes
   * Available in functions: yes
   *
   * Returns the current Redis server version as a Lua string. The reply's format is MM.mm.PP, where:
   * MM: is the major version.
   * mm: is the minor version.
   * PP: is the patch level.
   */
  REDIS_VERSION: string

  /**
   * Since version: 7.0.0
   * Available in scripts: yes
   * Available in functions: yes
   *
   * Returns the current Redis server version as a number. The reply is a hexadecimal value structured as 0x00MMmmPP, where:
   * MM: is the major version.
   * mm: is the minor version.
   * PP: is the patch level.
   */
  REDIS_VERSION_NUM: string
}

declare enum REDIS_LOG_LEVEL {
  LOG_DEBUG,
  LOG_VERBOSE,
  LOG_NOTICE,
  LOG_WARNING,
}

declare enum REDIS_REPL_ENUM {
  REPL_ALL,
  REPL_AOF,
  REPL_REPLICA,
  REPL_SLAVE,
  REPL_NONE,
}

declare type ScriptFlags =
  | 'no-writes'
  | 'allow-oom'
  | 'allow-stale'
  | 'no-cluster'
  | 'allow-cross-slot-keys'

declare const redis: Redis
declare const KEYS: string[]
declare const ARGV: string[]

// lua lib
// string table math

/**
 * Runtime libraries
 *
 * The Redis Lua runtime context always comes with several pre-imported libraries.
 * The following standard Lua libraries are available to use:
 * The String Manipulation (string) library
 * The Table Manipulation (table) library
 * The Mathematical Functions (math) library
 *
 * In addition, the following external libraries are loaded and accessible to scripts:
 * The struct library
 * The cjson library
 * The cmsgpack library
 * The bitop library
 */

declare namespace structs {
  declare function pack(this: void, format: string, ...values: any[]): string
  declare function unpack(this: void, format: string, packed: string): any[]
  declare function size(this: void, format: string): number
}

declare namespace cjson {
  declare function encode(this: void, value: any): string
  declare function decode(this: void, encoded: string): any
}

declare namespace cmsgpack {
  declare function pack(this: void, value: any): string
  declare function unpack(this: void, encoded: string): any
}

declare namespace bitop {
  declare function encode(this: void, value: any): string
  declare function decode(this: void, encoded: string): any

  //!! what's this, I don't understand

  declare function tobit(x: number): number

  /**
   * Converts its first argument to a hex string. The number of hex digits is given by the absolute value of the optional second argument.
   */
  declare function tohex(x: number, n?: number): string

  /**
   * Returns the bitwise not of its argument
   */
  declare function bnot(x: number): number

  /**
   * bit.bor(x1 [,x2...]), bit.band(x1 [,x2...]) and bit.bxor(x1 [,x2...])
   * Returns either the bitwise or, bitwise and, or bitwise xor of all of its arguments.
   * Note that more than two arguments are allowed.
   */
  declare function bor(...nums: number[]): number
  declare function band(...nums: number[]): number
  declare function bxor(...nums: number[]): number

  /**
   * bit.lshift(x, n), bit.rshift(x, n) and bit.arshift(x, n)
   *
   * Returns either the bitwise logical left-shift, bitwise logical right-shift,
   * or bitwise arithmetic right - shift of its first argument by the number of bits given by the second argument.
   *
   */
  declare function lshift(x: number, n: number): number
  declare function rshift(x: number, n: number): number
  declare function arshift(x: number, n: number): number

  /**
   * bit.rol(x, n) and bit.ror(x, n)
   *
   * Returns either the bitwise left rotation, or bitwise right rotation of its first argument
   * by the number of bits given by the second argument.
   * Bits shifted out on one side are shifted back in on the other side.
   */
  declare function rol(x: number, n: number): number
  declare function ror(x: number, n: number): number

  /**
   * Swaps the bytes of its argument and returns it. This can be used to convert
   * little-endian 32-bit numbers to big-endian 32-bit numbers and vice versa.
   */
  declare function bswap(x: number): number
}
