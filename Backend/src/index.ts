'use strict'

import Fastify from 'fastify'
import registerRoutes from './plugins/registerRoutes.js'
import cors from "@fastify/cors"


const server = Fastify({
    logger: true
}).register(cors, {
    // CHATGPT CORS SUGGESTION
        origin: 'http://localhost:5173', // Specify the allowed origin(s)
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
        allowedHeaders: ['Content-Type', 'Authorization'], // Allowed request headers
        // credentials: true, // Set to true if you need to send cookies/auth headers
})

registerRoutes(server)

server.get('/', async (req, res) => {
    return {message: 'Welcome to the AI resume apiii!'}
})

server.get('/ping', async (req, res) => {
    return 'pong\n'
})


console.log(server.printRoutes())

try {
    await server.listen({ port: 8080 })
} catch(err) {
    server.log.error(err)
}




