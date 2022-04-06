const macsOperation = require('../../data/macs')

const macsActions = async ({action,id}) => {
    switch (action) {
        case 'getAll':
            return await macsOperation.getAll()
        case 'getByName':
            return await macsOperation.getByName(id)
        default:
            throw new Error('Unknown action')
    }
}

module.exports = macsActions