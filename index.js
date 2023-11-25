const app = require('express')()
const server = require('http').createServer(app)

const io = require('socket.io')(server)

app.get('/health', (req, res) => {
    res.json({status: 'running'})
})

io.on('connection', () => console.log('new connection'))
app.listen(process.env.PORT || '3000', () => console.log('Running on port:3000'))