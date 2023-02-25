
const express = require('express')
const http = require('http')
const {Server} = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.get('/home',function(req,res){
    res.sendFile(__dirname+'/templates/chat.html')
})

io.on("connection", (socket) => {
    console.log('User connected')
    socket.on("disconnect",() => {
        console.log('User disconnected')
    })
    socket.on("chatinfo",(data) => {
        console.log(data)
        socket.broadcast.emit("chatinfo",data)
    })
})

server.listen(3000)