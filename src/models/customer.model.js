let mongoose = require('mongoose')

//1h00 ! daTabas8
// Sandbox databases do not have redundancy and therefore are not suitable for production. Read our documentation on how to upgrade.
// mongodb://<dbuser>:<dbpassword>@ds024548.mlab.com:24548/rest-api-workshop
// mongo ds024548.mlab.com:24548/rest-api-workshop -u <dbuser> -p <dbpassword>
// https://robomongo.org/download

const server = 'ds024548.mlab.com:24548'
const database = 'rest-api-workshop'
const user = 'lydstyl'
const password = 'lydstyl6' // comment faire pour la sécurité ?

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)


let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)
