const express = require('express');
const router = require('./router');
const app = express();


app.use(express.json());

app.use('/api', router);

app.use((err, req, res, next) => {
    if (res.headersSent) {
        return console.log(err);
    }
    res.status(err?.status ?? 500).send({
        data: {
            message: err?.message ?? message
        }
    })
})

module.exports = app;