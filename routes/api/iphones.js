const { iphonesOperations } = require('../../models')

const express = require("express")

const router = express.Router()

router.get('/', async (req, res) => {
    const iphones = await iphonesOperations({ action: 'getAll' })
    const parcedIphones = await JSON.parse(iphones)
    res.json({
        status: 'success',
        code: 200,
        data: {
            result: parcedIphones
        }
    })
})

router.get('/:id', async(req, res) => {
    const { id } = req.params
    
    const iphone = await iphonesOperations({action:'getByName', id:id})
    res.json({
        status: 'success',
        code: 200,
        data: {
            result: iphone
        }
    })
})

module.exports = router