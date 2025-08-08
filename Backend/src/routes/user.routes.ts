import {FastifyInstance } from 'fastify'

export default async function userRoutes(server: FastifyInstance) {
    server.get('/', async (req, res) => {
        return {message: "Welcome to the user route!"}
    })

    server.get('/:id', async (req, res) => {
        const { id } = req.params as { id: string }
        return { userId: id }
    })
}