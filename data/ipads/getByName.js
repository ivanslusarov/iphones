const getAll = require('./getAll')

const getByName = async (id) => {
    const data = await getAll()
    const ipads = JSON.parse(data)

    const result = ipads.find(item => item.id === JSON.parse(id))
    if (!result) {
        return null
    }
    return result
}

module.exports = getByName