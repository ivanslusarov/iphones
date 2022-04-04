const iphonesOperation = require('../../data/iphones')

const iphonesActions = async ({action,name}) => {
    switch (action) {
        case 'getAll':
            return await iphonesOperation.getAll()
        case 'getByName':
            return await iphonesOperation.getByName(name)
        default:
            throw new Error('Unknown action')
    }
}

module.exports = iphonesActions