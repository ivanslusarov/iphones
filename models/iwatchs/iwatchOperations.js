const iwatchsOperation = require('../../data/iwatchs')

const iwatchsActions = async ({action,name}) => {
    switch (action) {
        case 'getAll':
            return await iwatchsOperation.getAll()
        case 'getByName':
            return await iwatchsOperation.getByName(name)
        default:
            throw new Error('Unknown action')
    }
}

module.exports = iwatchsActions