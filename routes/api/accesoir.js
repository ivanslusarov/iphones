const {accesoirsOperations} = require('../../models')

const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
    const accesoirs = await accesoirsOperations({ action: 'getAll' })
    const parcedAccesoirs = await JSON.parse(accesoirs)
    res.json({
        status: 'success',
        code: 200,
        data: {
            result: parcedAccesoirs
        }
    })
})

module.exports = router