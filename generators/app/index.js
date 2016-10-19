'use strict'

var yeoman = require('yeoman-generator')

var pkg = require('../../package.json')
var prompts = require('./prompts')
var log = require('../../util/log')
var composeSubGenerator = require('../../util/composeSubGenerator')

module.exports = yeoman.Base.extend({
  // 初始化的工作
  initializing: function () {
    log.init(this)
  },

  // 接受用户输入
  prompting: function () {
    log.yosay(`前端工程速建脚手架！\n版本：v${ pkg.version }`)

    return this.prompt(prompts).then(function (props) {
      this.props = props
    }.bind(this))
  },

  // 保存配置文件及配置项目（生成.editorconfig）
  configuring: function() {
    // this.config.set({
    //   author: this.props.author,
    //   email: this.props.email
    // })
    // this.config.save()
  },

  // 自定义任务，方法名可更改
  default: function() {
    var projectType = this.props.projectType

    // 组合使用子生成器，选择工程类型后下一步需要选择操作类型，以选择要创建的内容
    composeSubGenerator.call(this, projectType)
  },

  // 输出模板到指定路径
  writing: function () {
    
  },

  // 安装npm依赖
  install: function () {
    // this.installDependencies()
  }
})
