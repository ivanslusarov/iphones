const fs = require('fs/promises')
const path = require('path')

const ipadsPath = path.join(__dirname, 'ipad.json')

const getAll = async () => {
    const data = await fs.readFile(ipadsPath, 'utf-8')
    return data
}

module.exports = getAll