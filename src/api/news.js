import debug from 'debug'
import server from '../server'
import error from 'boom'
import * as News from '../data/api/news'

const log = debug('breaking-news-aggregator:api')

server.route({
  method: 'GET',
  path: '/news',
  config: {
    auth: false,
    cors: false,
    tags: ['api', 'news'],
    description: 'Gets a list of the latest breaking news',
    handler: (request, reply) => {
      log('GETting /news')
      News.latest(request.params.slug, (err, docs) => {
        if (err) {
          log('Error: %s', err)
          return reply(err)
        }

        log('Delivering %d news', docs.length)
        reply(docs)
      })
    }
  }
})

export default server
