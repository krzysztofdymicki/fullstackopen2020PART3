const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

let persons = [
    {
        id: 1,
        name: "Krzysztof Dymicki",
        number: "55443322"
    },
    {
        id: 2,
        name: "Adrian Krasa",
        number: "333222233"
    }
]

const generateId = () => {
    return Math.floor(Math.random() * 10000000)
}


const app = express()
app.use(cors())
app.use(express.json())

morgan.token('content', function(req, res) { return JSON.stringify(req.body)})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :content'))

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    response.send(`<p>Phonebook has info for ${persons.length} people</p>
                   <p>${new Date()}</p>`)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    person
    ? response.json(person)
    : response.status(404).end()
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    persons = persons.filter(person => person.id !== id)

    person
    ? response.status(204).end()
    : response.status(404).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'number or name missing'
        })
    }

    const finded = persons.find(person => person.name === body.name || person.number === body.number)

    if(finded) {
        return response.status(400).json({
            error: 'names and numbers must be unique'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId()
    }

    persons = persons.concat(person)

    response.json(person)

})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})