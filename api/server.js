const express = require('express')
const app = express()
/*const bodyParser = require('body-parser')
const cors = require('cors')*/

const PORT = process.env.S_PORT  || 3000
 app.listen(PORT, () => {
     console.log(PORT) 
    console.log(`Server is running on port ${PORT}`)
})

module.exports = app