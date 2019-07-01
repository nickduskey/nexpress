class Route {
    constructor(method, path, callback) {
        this.method = method.toUpperCase();
        this.path = path;
        this.callback = callback;
    }
}

class Router {
    constructor(server, basePath) {
        this.basePath = basePath;
        this.server = server;
        this.routes = [];
    }

    get(path, callback) {
        this.routes.push(new Route('GET', path, callback));
    }

    post(path, callback) {
        this.routes.push(new Route('POST', path, callback));
    }

    patch(path, callback) {
        this.routes.push(new Route('PATCH', path, callback));
    }

    put(path, callback) {
        this.routes.push(new Route('PUT', path, callback));
    }

    delete(path, callback) {
        this.routes.push(new Route('DELETE', path, callback));
    }

    match(request) {
        return this.routes.find((route) => {
            return request.method === route.method && request.url === route.path;
        });
    }
}

module.exports = Router;
