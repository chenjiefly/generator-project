// 提供彩色的输出提示

var chalk = require('chalk')
var yosay = require('yosay')

module.exports = {
  self: null,

  init: function(yeoman) {
    this.self = yeoman
  },

  print: function(text) {
    this.self.log(chalk.gray(text))
  },

  success: function(text) {
    this.self.log(chalk.green(text))
  },

  warn: function(text) {
    this.self.log(chalk.yellow(text))
  },

  error: function(text, err) {
    this.self.log(chalk.red(text))

    if (err) {
      this.self.log(chalk.red(err))
    }
  },
  yosay: function(msg) {
    this.self.log(
      yosay(msg)
    )
  }
}