import { marked } from 'marked'
import fs from 'node:fs'
// 获取除了Node路径和文件路径之外的参数
const args = process.argv.slice(2)

// 打印所有参数
console.log('命令行参数:', args)

// 使用参数，例如获取第一个参数
const firstArg = args[0]
const outputArg = args[1] || './output.html'
console.log('第一个参数:', firstArg)
fs.readFile(firstArg, 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  let result = marked.parse(data)
  console.log('Result:', result)
  fs.writeFile(outputArg, result, 'utf8', (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('文件写入成功:', outputArg)
  })
})
