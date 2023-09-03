const express = require('express')
const userRoute = require('./routes/user')




const app = express()


app.get('/', (req, res) => {
    res.send('Perfect')
})

app.use('/user', userRoute)





app.listen(3000, () => {
    console.log({msg: 'Server is working'})
})




