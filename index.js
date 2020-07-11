require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const Person = require('./models/person')

const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))

morgan.token('POSTData', function getPOSTData (request, response) {
    const body = request.body
    if (JSON.stringify(body) === '{}') {
        return ''
    } else {
        return JSON.stringify(body)
    }
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :POSTData'))

let persons = [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    }
]

app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons)
    })
})

app.get('/info', (request, response) => {
    response.send(`<div>Phonebook has info for ${persons.length} people</div>
        <div>${new Date()}</div>`)
})

app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(person => {
        response.json(person)
    })
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

/*const generateId = () => {
    const postID = Math.round(Math.random() * 10000)
    return postID
}*/

app.post('/api/persons', (request, response) => {
    const body = request.body
   
    if (!body.name) {
        return response.status(400).json({
            error: 'name is missing'
        })
    }
    if (body.name) {
        const duplicateCheck = persons.find(person => 
            person.name.toLowerCase() === body.name.toLowerCase()
        )  
        if (duplicateCheck) {
            return response.status(400).json({
                error: 'name must be unique'
            })    
        }
    }
    if (!body.number) {
        return response.status(400).json({
            error: 'number is missing'
        })
    }

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person.save().then(savedPerson => {
        response.json(savedPerson.toJSON())
    })
})

app.use(unknownEndpoint)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})    