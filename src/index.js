// https://www.youtube.com/watch?v=o3ka5fYysBM&index=7&t=0s&list=PLo2PSuBYZiOodPcZEAK3W7G0aZHRSqfO8
let express = require('express')
let app = express()

let personRoute = require('./routes/person')

let path = require('path')

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`)
    next()
})
app.use(personRoute)
app.use(express.static( 'public' ))

// Handler for 404- Resource Not Found
app.use((req, res, next) => {
    res.status(404).send('We think you are lost!')
})

// Handler for Error 500
app.use((err, req, res, next) =>{
    console.error(err.stack);

    res.sendFile(path.join(__dirname, '../public/500.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server has started on ${PORT}`))