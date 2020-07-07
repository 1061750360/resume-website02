const path = require('path')

// 拼接路径函数，暂时用不到
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "./",
  /* 输出文件目录：在npm run build时，生成文件的目录名称 */
  outputDir: "dist",
  /* 放置生成的静态资源 (json、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
  assetsDir: "static"
}
