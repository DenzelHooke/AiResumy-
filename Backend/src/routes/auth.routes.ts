import { FastifyInstance } from 'fastify'

export default async function authRoutes(app: FastifyInstance) {
  app.post('/login', async (req, res) => {
    return { message: 'Logging in...' }
  })
}
