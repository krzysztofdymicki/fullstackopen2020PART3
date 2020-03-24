const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('You have to give a password')
  process.exit(1)
}

const password = process.argv[2]

const url =
 `mongodb+srv://alberteinstein:${password}@fullstackopen-dkb2y.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })


const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

if(process.argv.length === 3) {
  Person
    .find({})
    .then(persons => {
      persons.map(person => console.log(person.name, person.number))
      mongoose.connection.close()
      process.exit(1)
    })
}

const person = new Person({
  name: process.argv[3],
  number: process.argv[4]
})

person.save().then(() => {
  console.log('person saved')
  mongoose.connection.close()
})