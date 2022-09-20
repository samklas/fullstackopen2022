const express = require('express')
const app = express()

app.use(express.json())

let persons = [
  {
    "id": 1,
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": 2,
    "name": "Ada Lovelace",
    "number": "0403123123"
  },
  {
    "id": 3,
    "name": "Dan Abramov",
    "number": "040-1435245"
  },
  {
    "id": 4,
    "name": "Mary Poppendick",
    "number": "040-1222356"
  },
]

const date = new Date().toString()

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/info', (req, res) => {
  res.send(`Phonebook has info for ${persons.length} people <br> ${date}`)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)

  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons.filter(person => person.id !== id)
  res.status(204).end()
})

app.post('/api/persons', (req, res) => {
  const person = req.body
  person.id = Math.floor(Math.random() * 100)


  if (!person.name) {
    res.status(400).json({error: 'name missing'})
  }
  if (persons.find(element => element.name === person.name)) {
    res.status(400).json({error: 'name must be unique'})
  }
  if (!person.number) {
    res.status(400).json({error: 'number missing'})
  } else {
    res.json(person)
    persons = persons.concat(person)
  }
})

const PORT = 3001
app.listen(PORT, () => console.log(`Server started in ${PORT}`))