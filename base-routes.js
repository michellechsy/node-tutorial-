
const baseRoute = {
  register: (server, options, next) => {
    const routes = [
      // optional params
      {
        method: 'GET',
        path: '/{identifier?}',
        handler: (request, reply) => {
          reply('request response')
        }
      }, {
        method: ['POST', 'PUT'],
        path: '/',
        handler: (request, reply) => {
          reply('Awesome')
        }
      }, {
        method: 'GET',
        path: '/page/{page*}',
        handler: (request, reply) => {
          reply('Greetings from page:' + encodeURIComponent(page))
        }
      }
    ]

    server.route(routes)
    next()
  }
}

baseRoute.register.attributes = {
  name: 'base-routes',
  version: '1.0.0'
}

module.exports = baseRoute
