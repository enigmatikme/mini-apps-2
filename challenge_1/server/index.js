const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(`${__dirname}/../data/db.json`)

const middlewares = jsonServer.defaults()

server.use(middlewares)

// server.get('/events?q=intern', function(err, result) {
//     if (err) {
//         console.log('error found in reroute attempt', err)
//     } else {
//         console.log('rESULT IN HEURRR ', result);
//     }
// });
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
});