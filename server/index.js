const express = require('express');
const app = express();
const router = require('./router.js');
const port = 3001;
const cors = require('cors')


app.use(cors())
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    });
