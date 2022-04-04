const ipadsOperation = require('../../data/ipads')

const ipadsActions = async ({action,name}) => {
    switch (action) {
        case 'getAll':
            return await ipadsOperation.getAll()
        case 'getByName':
            return await ipadsOperation.getByName(name)
        default:
            throw new Error('Unknown action')
    }
}

module.exports = ipadsActions