const ipadsOperation = require('../../data/ipads')

const ipadsActions = async ({action,id}) => {
    switch (action) {
        case 'getAll':
            return await ipadsOperation.getAll()
        case 'getByName':
            return await ipadsOperation.getByName(id)
        default:
            throw new Error('Unknown action')
    }
}

module.exports = ipadsActions