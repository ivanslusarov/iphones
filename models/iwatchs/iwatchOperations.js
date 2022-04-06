const iwatchsOperation = require('../../data/iwatchs')

const iwatchsActions = async ({action,id}) => {
    switch (action) {
        case 'getAll':
            return await iwatchsOperation.getAll()
        case 'getByName':
            return await iwatchsOperation.getByName(id)
        default:
            throw new Error('Unknown action')
    }
}

module.exports = iwatchsActions