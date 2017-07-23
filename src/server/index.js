const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');

const root = './';
const port = process.env.port || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(root, 'dist')));
app.use('/api', routes);
// route

app.get('*', (req, res) => {
    res.sendfile('dist/index.html', { root })
})


app.listen(port, () => console.log(`Api is running on ${port}`))