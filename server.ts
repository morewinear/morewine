import express, { Request, Response } from 'express'
import next from 'next'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = process.env.NODE_ENV || 3001;

(
  async () => {
    try {
      await app.prepare()
      const server = express()

      server.all('*', (req: Request, res: Response) => {
        return handle(req, res)
      })

      server.listen(port, (error?: any) => {
        if (error) throw error
        console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
      })
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }
)()