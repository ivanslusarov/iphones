const fs = require('fs/promises')
const path = require('path')

const macsPath = path.join(__dirname, 'mac.json')

const getAll = async () => {
    const data = await fs.readFile(macsPath, 'utf-8')
    return data
}

module.exports = getAll