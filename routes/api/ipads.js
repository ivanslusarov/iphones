const {ipadsOperations} = require('../../models')

const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
    const ipads = await ipadsOperations({ action: 'getAll' })
    const parcedIpads = await JSON.parse(ipads)
    res.json({
        status: 'success',
        code: 200,
        data: {
            result: parcedIpads
        }
    })
})

router.get('/:id', async(req, res) => {
    const { id } = req.params
    const ipad = await ipadsOperations({ action: 'getByName', id: id })
    res.json({
        status: 'success',
        code: 200,
        data: {
            result: ipad
        }
    })
})

module.exports = router