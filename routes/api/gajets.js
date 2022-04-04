const {gajetsOperations} = require('../../models')

const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
    const gajets = await gajetsOperations({ action: 'getAll' })
    const parcedGajets = await JSON.parse(gajets)
    res.json({
        status: 'success',
        code: 200,
        data: {
            result: parcedGajets
        }
    })
})

module.exports = router