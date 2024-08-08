const { open } = require('node:fs/promises')
const path = require('node:path')
const target = path.resolve(process.argv.slice(2)[0])
const skipLineCount = 3
async function main() {
  const file = await open(target)
  let lineCount = 0
  let question = {}
  let list = []
  for await (const line of file.readLines({ encoding: 'utf-8' })) {
    lineCount++
    if (lineCount < skipLineCount + 1) {
      continue
    }
    if (isEmptyOrBlank(line)) {
      continue
    }

    // console.log(c)
    if (question.title === undefined) {
      let c = line.replace(/^(\d+)\./, '')
      question.title = c
    } else if (question.a === undefined) {
      question.a = line
    } else if (question.b === undefined) {
      question.b = line
    } else if (question.c === undefined) {
      question.c = line
    } else if (question.d === undefined) {
      question.d = line
    } else if (question.answer === undefined) {
      question.answer = line.replace('答案：', '').replace(' ', '')
      list.push(question)
      question = {}
    }
    // console.log(line, isEmptyOrBlank(line))
  }
  console.log(JSON.stringify(list))
}
function isEmptyOrBlank(str) {
  return !str || /^\s*$/.test(str) // test if string is empty or blank
}
main()
