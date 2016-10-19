/**
 * 用户输入配置
 */
 
module.exports = [
  {
    type: 'list',
    name: 'type',
    message: '请选择模板类型:',
    choices: [
      {
        name: '完整工程',
        value: 'project'
      }, {
        name: '单个页面',
        value: 'page'
      }
    ]
  },
  {
    type: 'input',
    name: 'name',
    message: '输入名称:',
    default: 'demo'
  }
]