const getAll = require('./getAll')

const getByName = async (name) => {
    const data = await getAll()
    const result = data.find(item => item.name === name)
    if (!result) {
        return null
    }
    return result
}

module.exports = getByName