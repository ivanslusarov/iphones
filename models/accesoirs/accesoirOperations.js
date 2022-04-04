const accesoirsOperations = require('../../data/accesoirs')

const accesoirsActions = async ({action,name}) => {
    switch (action) {
        case 'getAll':
            return await accesoirsOperations.getAll()
        case 'getByName':
            return await accesoirsOperations.getByName(name)
        default:
            throw new Error('Unknown action')
    }
}

module.exports = accesoirsActions