const iphonesOperation = require('../../data/iphones')

const iphonesActions = async ({action,id}) => {
    switch (action) {
        case 'getAll':
            return await iphonesOperation.getAll()
        case 'getByName':
            return await iphonesOperation.getByName(id)
        default:
            throw new Error('Unknown action')
    }
}

module.exports = iphonesActions