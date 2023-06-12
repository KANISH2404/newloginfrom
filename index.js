let express = require("express")
let app = express()
app.use(express.static("public"))
app.use(express.urlencoded({extended:false}))

let mongodb = require("mongodb")

let db = null

let dbName ="fristApp"

let dbString =" mongodb+srv://appUser:12345876@cluster0.iay8v76.mongodb.net/fristApp?retryWrites=true&w=majority"

const MongoClient = mongodb.MongoClient;

MongoClient.connect(dbString,{useNewUrlPraser:true,useUnifinedTopology:true},function(err,client){
    if (err) {
        throw err
    }
     db = client.db(dbName)
     app.listen(3000)
})


app.get("/index.html",function(req,res){
    // res.send ("hello")
})
app.post("/creat-item",function(req,res){
    // res.send(`<h1>notu</h1>`)
    // console.log(req.body.username);

    db.collection("todos").insertOne({text:req.body.username,password:req.body.userpassword},function(){
        res.send(`<h1>NOTU</H1>`)
    })

})

// app.listen(3000)
