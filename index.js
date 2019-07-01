const Nexpress = require('./server');
const Router = require('./router');

const port = process.env.PORT || 3000;

const nexpress = new Nexpress();
const router = Nexpress.router('/');

router.get('/', (request, response) => {
    response.end('fooo');
});

nexpress.use(router);

nexpress.listen(port, (err) => {
    if (err) {
        return console.log('error starting server:', err);
    }
    console.log(`Server is listening on port ${port}`);
});
