const {expect, test} = require('@oclif/test')
const cmd = require('..')

describe('bye-cli', () => {
  test
  .stdout()
  .do(() => cmd.run([]))
  .it('runs goodbye', ctx => {
    expect(ctx.stdout).to.contain('goodbye world')
  })

  test
  .stdout()
  .do(() => cmd.run(['--name', 'jeff']))
  .it('runs goodbye --name jeff', ctx => {
    expect(ctx.stdout).to.contain('goodbye jeff')
  })
})
