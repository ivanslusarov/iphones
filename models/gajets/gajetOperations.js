const gajetsOperation = require('../../data/gajets')

const gajetsActions = async ({action,name}) => {
    switch (action) {
        case 'getAll':
            return await gajetsOperation.getAll()
        case 'getByName':
            return await gajetsOperation.getByName(name)
        default:
            throw new Error('Unknown action')
    }
}

module.exports = gajetsActions