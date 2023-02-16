const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://sws2664:sws690215@cluster905858.dufhjj5.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('MongoDB ...'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})