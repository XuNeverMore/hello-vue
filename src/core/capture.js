import * as htmlToImage from 'html-to-image'
// 将dataURL保存为图片文件并下载
function downloadImage(dataURL, filename) {
  var link = document.createElement('a')
  link.href = dataURL
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
function capture(element) {
  htmlToImage
    .toPng(element)
    .then(function (dataUrl) {
      downloadImage(dataUrl, `${Date.now()}.png`)
    })
    .catch(function (error) {
      console.error('oops, something went wrong!', error)
    })
}

export default capture
