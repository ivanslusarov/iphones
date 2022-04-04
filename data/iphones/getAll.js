const fs = require('fs/promises')
const path = require('path')

const iphonesPath = path.join(__dirname, 'iphone.json')

const getAll = async () => {
    const data = await fs.readFile(iphonesPath, 'utf-8')
    return data
}

module.exports = getAll