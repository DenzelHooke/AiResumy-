import { FastifyInstance } from 'fastify'
import userRoutes from '../routes/user.routes.js'
import authRoutes from '../routes/auth.routes.js'

export default function registerRoutes(server: FastifyInstance){ 
    server.register(userRoutes, {prefix:'/user' })
    server.register(authRoutes, {prefix: '/auth'})
}

