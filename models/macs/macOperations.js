const macsOperation = require('../../data/macs')

const macsActions = async ({action,name}) => {
    switch (action) {
        case 'getAll':
            return await macsOperation.getAll()
        case 'getByName':
            return await macsOperation.getByName(name)
        default:
            throw new Error('Unknown action')
    }
}

module.exports = macsActions