/**
 * 用户输入配置
 */
 
module.exports = [
  {
    type: 'list',
    name: 'projectType',
    message: '请选择创建类型:',
    choices: [
      {
        name: 'Web工程',
        value: 'web'
      }, {
        name: 'Node工程',
        value: 'node'
      }
    ]
  }
]