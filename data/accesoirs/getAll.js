const fs = require('fs/promises')
const path = require('path')

const accesoirsPath = path.join(__dirname, 'accesoir.json')

const getAll = async () => {
    const data = await fs.readFile(accesoirsPath, 'utf-8')
    return data
}

module.exports = getAll