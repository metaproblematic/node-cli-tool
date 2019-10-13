const {Command, flags} = require('@oclif/command')

class ByeCliCommand extends Command {
  async run() {
    const {flags} = this.parse(ByeCliCommand)
    const name = flags.name || 'world'
    const pet = flags.pet || 'imaginary pet'
    this.log(`goodbye ${name}`)
    pet && name === flags.name ? this.log(`goodbye to your little ${pet}, too`) : ''
    name === 'world' ? this.log('hello zombies') : ''
  }
}

ByeCliCommand.description = `says goodbye to world or name of user and optionally to user's pet
`

ByeCliCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
  name: flags.string({char: 'n', description: 'name to print'}),
  pet: flags.string({char: 'p', description: 'kind of pet to print'}),
}

module.exports = ByeCliCommand
