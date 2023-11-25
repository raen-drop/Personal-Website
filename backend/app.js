const express = require('express');
const app = express();

const port = 3005;

const listener = () => console.log(`App runnin on port ${port}!`);
app.listen(port, listener)

// testing...