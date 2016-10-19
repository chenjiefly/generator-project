/**
 * 组合子生成器方法
 * @param  {String} subGenerator 子生成器名字
 * @param  {Object} options      传递给子生成器的参数
 */
module.exports = function composeSubGenerator(subGenerator, options) {
  this.composeWith(`project:${ subGenerator }`, {  // 组合生成器
    options
  }, {
    local: require.resolve(`../generators/${ subGenerator }`)
  })
}
