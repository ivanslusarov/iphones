const {macsOperations} = require('../../models')

const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
    const macs = await macsOperations({ action: 'getAll' })
    const parcedMacs = await JSON.parse(macs)
    res.json({
        status: 'success',
        code: 200,
        data: {
            result: parcedMacs
        }
    })
})

router.get('/:name', async(req, res) => {
    const { name } = req.params
    const editedName = name.split('-').join(' ')
    const mac = await macsOperations({action:'getByName', name:editedName})
    res.json({
        status: 'success',
        code: 200,
        data: {
            result: mac
        }
    })
})

module.exports = router