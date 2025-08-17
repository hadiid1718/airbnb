const path = require('path')

const express = require("express")
const userRouter = require("./routes/userRouter")
const hostRouter = require("./routes/hostRouter")
const rootDir = require("./utils/pathUtils")

const app = express()


app.use("/",(req,res,next)=> {
    console.log(req.url, req.method)
    next()

})
app.use(express.urlencoded())


     app.use(hostRouter)
    app.use(userRouter)
     app.use((req, res, next)=> {
        res.sendFile(path.join(rootDir,  'views', '404.html'))
      
     })   


const PORT =3002
app.listen(PORT, ()=> {
    console.log(`Server running at: http://localhost:${PORT}`)
})