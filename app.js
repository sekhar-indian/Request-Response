const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const admin=require('./routers/admin');
const user=require('./routers/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(admin);
app.use(user);

app.listen(3000)