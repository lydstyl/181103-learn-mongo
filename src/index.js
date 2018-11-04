// https://www.youtube.com/watch?v=o3ka5fYysBM&index=7&t=0s&list=PLo2PSuBYZiOodPcZEAK3W7G0aZHRSqfO8
// installer insomnia ou postman

// 18min / 1h39

let express = require('express')

let app = express()

let personRoute = require('./routes/person')

app.use(personRoute)
app.use(express.static( 'public' ))
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server has started on ${PORT}`))