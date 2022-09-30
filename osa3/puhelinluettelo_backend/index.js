const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const Person = require('./model/person')
app.use(express.static('build'))
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))


const date = new Date().toString()

//Haetaan puhelintiedot MongoDB:stä
app.get('/api/persons', (req, res) => {
  Person.find({}).then(persons => {
    console.log(persons)
    res.json(persons)
  })
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
  per.filter(person => person.id !== id)
  res.status(204).end()
})

//Luodaan uusi puhelintieto
app.post('/api/persons', (req, res) => {
  const person = new Person({
    name: req.body.name,
    number: req.body.number
  })
 if (!person.name) {
    res.status(400).json({error: 'name missing'})
  }
  /*if (Person.find(element => element.name === person.name)) {
    res.status(400).json({error: 'name must be unique'})
  }*/
  if (!person.number) {
    res.status(400).json({error: 'number missing'})
  }
  else {
    person.save().then(savedPerson => {
      res.json(savedPerson)
    })
  }
    
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})