export const users = [
  { id: 1 ,  name: 'James Hillier' },
  { id: 2 ,  name: 'Guy Martin' },
  { id: 3 ,  name: 'Ian Hutchinson' }
]

export const me = { id: 4, name: 'Peter Hickman' }
export const messages = {
  1: [
    { id: 1,
      to: 1,
      from: 4,
      body: 'Hello'
    },
    {
      id: 2,
      to: 4,
      from: 1,
      body: 'Hey!'
    }
  ],
  2: [
    { 
      id: 3,
      to: 4,
      from: 1,
      body: 'Hello'
    },
    {
      id: 4,
      to: 1,
      from: 4,
      body: 'Hey!'
    }
  ],
  3: [] 
}
