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

router.get('/:id', async(req, res) => {
    const { id } = req.params
    const mac = await macsOperations({action:'getByName', id:id})
    res.json({
        status: 'success',
        code: 200,
        data: {
            result: mac
        }
    })
})

module.exports = router