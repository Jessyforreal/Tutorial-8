const { Router } = require('express')
const db = require('../db')


const router = Router()

router.get('/user', async (req, res) => {
    const result = await db.promise().query (`SELECT * FROM users`)
    res.send(result[0])
})



module.exports = router


