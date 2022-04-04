const {iwatchsOperations} = require('../../models')

const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
    const iwatchs = await iwatchsOperations({ action: 'getAll' })
    const parcedIwatchs = await JSON.parse(iwatchs)
    res.json({
        status: 'success',
        code: 200,
        data: {
            result: parcedIwatchs
        }
    })
})

router.get('/:name', async(req, res) => {
    const { name } = req.params
    const editedName = name.split('-').join(' ')
    const iwatch = await iwatchsOperations({action:'getByName', name:editedName})
    res.json({
        status: 'success',
        code: 200,
        data: {
            result: iwatch
        }
    })
})

module.exports = router