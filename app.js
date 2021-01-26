process.env.FONTCONFIG_PATH = __dirname

const fs = require('fs')
const sharp = require('sharp')
const { pipeline } = require('stream')

run()

async function run() {
  const rs = fs.createReadStream('in.svg')
  const ws = fs.createWriteStream('out.jpg')
  pipeline(rs, sharp().jpeg(), ws, (err) => {
    if (err) {
      console.error(err)
      return
    }

    console.log('ok')
  })
}
