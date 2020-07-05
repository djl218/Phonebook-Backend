const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]
const enteredName = process.argv[3]
const enteredNumber= process.argv[4]

const url = 
    `mongodb+srv://fullstack:${password}@cluster0.juwea.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    name: enteredName,
    number: enteredNumber,
})

if (process.argv.length == 3) {
    Person.find({}).then(person => {
        console.log("phonebook:")
        person.forEach(person => {
            console.log(`${person.name} ${person.number}`)
        })
        mongoose.connection.close()
    })
} else {
    person.save().then(person => {
        console.log(`added ${enteredName} number ${enteredNumber} to phonebook`)
        mongoose.connection.close()
    })
}   