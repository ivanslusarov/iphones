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

router.get('/:name', async(req, res) => {
    const { name } = req.params
    const editedName = name.split('-').join(' ')
    const ipad = await ipadsOperations({action:'getByName', name:editedName})
    res.json({
        status: 'success',
        code: 200,
        data: {
            result: ipad
        }
    })
})

module.exports = router