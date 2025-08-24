import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'

interface RegisterBody {
  email?: string;
  password?: string;
}

export default async function authRoutes(app: FastifyInstance) {
  app.post('/login', async (req, res) => {
    return { message: 'Logging in...' }
  }),

  app.post('/register', async (req: FastifyRequest<{ Body: RegisterBody }>, res) => {
    return req.body
  })
}
