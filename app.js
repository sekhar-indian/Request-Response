const express=require('express');
const app=express();
const bodyParser = require('body-parser');

// Middleware to parse URL-encoded data from forms
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/add-product',(req,res,next)=>{
    res.send(`<form action="/products" method="POST" placeholder="Product Title">
                <input type="text" name="title"> <button type="submit">add</button>
            </form>`)
})
app.use('/products',(req,res,next)=>{
    console.log(req.body)
})


app.listen(3000)