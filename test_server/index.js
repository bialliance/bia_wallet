const express = require('express')
const cors = require('cors')

var app = new express();
app.use(cors())
app.use(express.json())

// app.get('/auth', (req, res) => {
//     res.send({success: true, data: {token: "asdadsasds"}});
// })

// app.post('/auth', (req, res) => {
//     console.log(req.body);
//     if (req.body.login == "login" && req.body.password == "password")
//         res.send({success: true, data: {token: "asdadsasds"}});
//     else
//         res.status(403).end();
// })

// app.get('/test', (req, res) => {

//     var token = req.headers.authorization.replace('Bearer ', '').trim();

//     console.log("token: ", token);

//     res.send({success: true, data: {token: token}});
// })

// Routes
app.use(require('./routes/routes.js'));




app.listen(3000);