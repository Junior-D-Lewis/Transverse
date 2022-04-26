const app = require('./server')
const addUsers = require('./routes/addUsers')

app.get('/', (req, res) => {
    res.send('Hello World welcome to server for my mobile app')
}) 

app.post('/addUsers', (req, res) => {
    const add = addUsers(req, res)
})
