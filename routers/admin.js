const express=require('express');
const router=express.Router();
const fs=require('fs')

router.get('/login',(req,res,next)=>{
    res.send(`<form action="/products" method="POST" placeholder="user name">
                <input type="text" name="userid"> <button type="submit">login</button>
            </form>`)
})
router.post('/products',(req,res,next)=>{
   
    const id=req.body.userid
    console.log(id);
    localStorage.setItem();
    res.redirect('/chat');
})
router.get('/chat',(req,res,next)=>{
 res.send(`<form action="/chat" method="POST" placeholder="masage">
                <input type="text" name="masge"> <button type="submit">send</button>
            </form>`)
  
})
router.post('/chat',(req,res,next)=>{
     fs.writeFile('masage.text','hello')
   })

module.exports=router;