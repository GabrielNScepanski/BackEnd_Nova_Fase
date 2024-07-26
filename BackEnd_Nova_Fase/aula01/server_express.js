const express = require ('express')

const server = express ()

server.get('/',(req,res)=>{
    res.send('Olá, ExpressJs na área')
})

server.listen(3000)