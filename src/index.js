const {Command, flags} = require('@oclif/command')

class ByeCliCommand extends Command {
  async run() {
    const {flags} = this.parse(ByeCliCommand)
    const name = flags.name || 'world'
    this.log(`goodbye ${name} from ./src/index.js`)
  }
}

ByeCliCommand.description = `says goodbye to world or name of user
`

ByeCliCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = ByeCliCommand
