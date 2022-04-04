const fs = require('fs/promises')
const path = require('path')

const gajetsPath = path.join(__dirname, 'gajet.json')

const getAll = async () => {
    const data = await fs.readFile(gajetsPath, 'utf-8')
    return data
}

module.exports = getAll