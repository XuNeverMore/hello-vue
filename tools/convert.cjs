const fs = require('node:fs')
const path = require('node:path')
const xml2js = require('xml2js')

const xmlFile = path.resolve(process.argv.slice(2)[0])
console.log('path >>> ' + xmlFile)
const jsonFile = 'dist/strings.json'

const parser = new xml2js.Parser()

fs.readFile(xmlFile, (err, data) => {
  if (err) {
    console.error('Error reading XML file:', err)
    return
  }
  parser.parseString(data, (err, result) => {
    if (err) {
      console.error('Error parsing XML:', err)
      return
    }
    // console.dir(result)
    const jsonData = {}
    result.resources.string.forEach((item) => {
      jsonData[item.$.name] = item._
    })
    //string-array
    result.resources['string-array'].forEach((item) => {
      jsonData[item.$.name] = item.item
      console.log('string-array>>>>', item.$.name)
    })
    result.resources.array.forEach((item) => {
      jsonData[item.$.name] = item.item
      console.log('array >>> ' + item.$.name)
      console.log(JSON.stringify(item.$.item))
    })
    fs.writeFile(jsonFile, JSON.stringify(jsonData, null, 4), (err) => {
      if (err) {
        console.error('Error writing JSON file:', err)
        return
      }
      console.log('Conversion successful!')
    })
  })
})
