import express from "express";
import router from './router.js';

const app = express();
const port = 3001;
const cors = require('cors')
const axios = require('axios')


app.use(cors())
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    });
