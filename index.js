require('dotenv').config()
const server = require('./api/server.js')

const port = process.env.PORT || 8001
server.listen(port, () => console.log(`\n== API's UP amigo ${port} ==\n`))
