import express, { Express, Request, Response } from 'express'
import { PORT } from './secret'
import rootRouter from './routes'
import { PrismaClient } from '@prisma/client'
import { errorMiddleware } from './middlewares/errors'
import { SignUpSchema } from './schema/users'

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
  res.send('working')
})

app.use(express.json())

app.use('/api', rootRouter)

export const prismaClient = new PrismaClient({
  log: ['query'],
})
// .$extends({
//   query: {
//     user: {
//       create({ args, query }) {
//         args.data = SignUpSchema.parse(args.data)
//         return query(args)
//       },
//     },
//   },
// })

app.use(errorMiddleware)

app.listen(PORT, () => {
  console.log('App working')
})
