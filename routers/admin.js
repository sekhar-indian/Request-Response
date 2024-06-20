const express=require('express');
const router=express.Router();

router.get('/add-product',(req,res,next)=>{
    res.send(`<form action="/products" method="POST" placeholder="Product Title">
                <input type="text" name="title"> <button type="submit">add</button>
            </form>`)
})
router.post('/products',(req,res,next)=>{
    console.log(req.body)
})

module.exports=router;