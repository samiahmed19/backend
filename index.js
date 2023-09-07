const express = require('express');
const port = 8000;
const app = express();

// const data = require('./models/Data.json');
// app.get('/users', (req, res) => {
//     res.send({ data });
// });

const userRouters = require('./router/users');
// app.use('/', userRouters);
app.use('/api', userRouters);

const profileRouter = require('./router/profiles');
// app.use('/', profileRouter);
app.use('/api', profileRouter);

app.listen(port, function (err) {
    if (err) {
        console.log("Error is running on the server");
    }
    console.log(`server is running on port: ${port}`);
});