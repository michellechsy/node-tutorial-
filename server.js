const Hapi = require('hapi')
const Good = require('good')

const server = new Hapi.Server()

server.connection({
  host: 'localhost',
  port: 5002
})

// register plugins to server
// server.register('plugins', (err) => {})

server.register([{
  register: './base-route'
}, {
  register: Good,
  options: {
    ops: {
      interval: 10000
    },
    reporters: {
      console: [
        {
          module: 'good-squeeze',
          name: 'Squeeze',
          args: [ { log: '*', response: '*', request: '*' }]
        }, {
          module: 'good-console'
        },
        'stdout'
      ]
    }
  }
}], (err) => {
})

server.start(err => {
  if (err) {
    throw err
  }
  console.log('Server started at:', server.info.uri)
})
