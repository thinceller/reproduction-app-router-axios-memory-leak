import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { setTimeout } from 'node:timers/promises'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/todos', async (c) => {
  await setTimeout(2_000)

  return c.json({ todos: [
    { id: 1, text: 'Buy milk' },
    { id: 2, text: 'Buy eggs' },
    { id: 3, text: 'Buy bread' },
    { id: 4, text: 'Buy butter' },
    { id: 5, text: 'Buy cheese' },
    { id: 6, text: 'Buy jam' },
    { id: 7, text: 'Buy honey' },
    { id: 8, text: 'Buy coffee' },
    { id: 9, text: 'Buy tea' },
    { id: 10, text: 'Buy sugar' },
  ]})
})

app.get('/me', async (c) => {
  await setTimeout(1_000)

  return c.json({ message: 'unauthorized' }, { status: 401 })
})

const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
