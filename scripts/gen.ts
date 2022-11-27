import { readUrl } from 'dl-vampire'
import { AllCommands } from '.'
import { format } from 'prettier'
import fs from 'fs'
import _ from 'lodash'

main()

async function main() {
  const commands = JSON.parse(
    await readUrl({
      url: 'https://raw.githubusercontent.com/redis/redis-doc/master/commands.json',
      file: __dirname + '/data/commands.json',
      encoding: 'utf8',
    })
  ) as AllCommands

  let defCode = ''

  const cmds = Object.keys(commands) as (keyof AllCommands)[]
  for (const cmd of cmds) {
    const command = commands[cmd]

    let argsStr: string[] = []
    if (command.arguments?.length) {
      command.arguments.forEach((arg) => {
        let { name, type, optional = false, multiple = false } = arg

        let tstype: string = type
        if (['string'].includes(type)) {
          // we are ok
          tstype = type
        }

        // unix-time
        else if (['unix-time', 'key', 'pattern'].includes(type)) {
          tstype = _.upperFirst(_.camelCase(type))
        }

        // num
        else if (type === 'integer' || type === 'double') {
          tstype = 'number'
        }

        //
        else if (type === 'pure-token') {
          tstype = `"${arg.token}"`
        }

        // not supported
        else {
          console.log(cmd, type)
        }

        /**
         * 处理 name
         */
        if (name.includes('-')) {
          name = _.snakeCase(name)
        }
        if (name === 'function') {
          name = '_' + name
        }

        if (!multiple) {
          argsStr.push(`${name}${optional ? '?' : ''}: ${tstype}`)
        } else {
          argsStr.push(`...${name}${optional ? '?' : ''}: ${tstype}[]`)
        }
      })
    }

    defCode += `
      ['${cmd}']: (${argsStr.join(', ')}) => void;
    `
  }

  let code = `
    type Key = string; // redis key
    type Pattern = string; // redis key
    type UnixTime = number;

    declare type RedisCommands = {
      ${defCode}
    }
  `.trim()
  fs.writeFileSync(__dirname + '/../src/commands.d.ts', code)

  code = format(code, { parser: 'typescript' })
  fs.writeFileSync(__dirname + '/../src/commands.d.ts', code)
}
