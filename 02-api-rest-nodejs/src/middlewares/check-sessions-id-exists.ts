import { FastifyReply, FastifyRequest } from 'fastify'

export async function checkSessionIdexist(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const sessionId = request.cookies.sessionId
  if (!sessionId) {
    reply.status(401).send({ error: 'Unathourized' })
  }
}
