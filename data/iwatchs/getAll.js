const fs = require('fs/promises')
const path = require('path')

const iwatchsPath = path.join(__dirname, 'iwatch.json')

const getAll = async () => {
    const data = await fs.readFile(iwatchsPath, 'utf-8')
    return data
}

module.exports = getAll