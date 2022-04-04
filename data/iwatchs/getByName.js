const getAll = require('./getAll')

const getByName = async (name) => {
    const data = await getAll()
    const iwatchs = JSON.parse(data)
    const result = iwatchs.find(item => item.name === name)
    if (!result) {
        return null
    }
    return result
}

module.exports = getByName