const http = require('http');
const Router = require('./router');

class Nexpress {
    constructor(opts) {
        this.routers = [];
        this.requestHandler = (request, response) => {
            console.log('handling request');
            console.log('routers:', this.routers);
            console.log(`${new Date().toISOString()} - ${request.method} - ${request.url}`);
            this.routers.forEach((router) => {
                const match = router.match(request);
                if (match) {
                    console.log('route matched:', match);
                    return match.callback(request, response);
                }
            });
            setTimeout(() => {
                response.end('Hello world');
            }, 2000);
        }
        this.server = http.createServer(opts, this.requestHandler);
    }

    static router(basePath) {
        return new Router(basePath, this.server);
    }

    listen(port, callback) {
        this.server.listen(port, callback);
    }

    use(router) {
        this.routers.push(router);
    }
}

module.exports = Nexpress;
