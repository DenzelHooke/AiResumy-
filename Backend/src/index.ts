'use strict'

import Fastify from 'fastify'
import registerRoutes from './plugins/registerRoutes.js'

const server = Fastify({
    logger: true
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




