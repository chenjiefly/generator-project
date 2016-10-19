'use strict'

var yeoman = require('yeoman-generator')

var prompts = require('./prompts')
var log = require('../../util/log')

module.exports = yeoman.Base.extend({
  // 初始化的工作
  initializing: function () {
    log.init(this)
  },

  // 接受用户输入
  prompting: function () {
    log.yosay('正在创建前端Web应用！')

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

  // 输出模板到指定路径
  writing: function () {
    var type = this.props.type  // 待创建模板类型
    var name = this.props.name  // 待创建模板名称
    var dest = name

    // 新建工程在执行脚手架的根目录，新建页面在已有工程的pages目录内
    if (type === 'page') {
      dest = `pages/${ name }`
    }
    // 模板拷贝用copyTpl，普通拷贝用copy
    this.fs.copyTpl(
      this.templatePath(type),    // type和templates中的模板文件夹名字刚好保持一致
      this.destinationPath(dest)
    )
  },

  // 安装npm依赖
  install: function () {
    // this.installDependencies()
  }
})
