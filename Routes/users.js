let express=require('express')

let router=express.Router()

router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/register',(req,res)=>{
    res.render('register')
})

router.post('/register',(req,res)=>{
    res.send(req.body)
})

router.get('/login',(req,res)=>{
    res.render('login')
})

router.get('/services',(req,res)=>{
    res.render('services')
})

router.post('/login',(req,res)=>{
    console.log(req.body)
})




module.exports=router