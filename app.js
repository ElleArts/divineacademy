let express=require('express')

let appRouter=require('./Routes/users')

let app=express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use('/', appRouter)
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(2000, (()=>{
    console.log('server is listening on port 2000')
}))