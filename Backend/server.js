const express = require ('express')
const app = express()
const studentRoute = require('./routes/student.route')
const userRoute = require('./routes/user.route')
const adminRoute = require('./routes/admin.route')
const port = process.env.PORT
const cors = require('cors')
app.use(cors({
  origin: 'http://localhost:4200', // Your frontend origin
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization', 'Role'], // Add any other headers you need
}));

app.use(express.json()) //Send or recieve Data to client/server
app.use(express.urlencoded({extended:true})) //Recieve data FORM  

app.use('/',studentRoute)
app.use('/',userRoute)
app.use('/admin',adminRoute)
//CORS : secure our api , not protected 100% because exist extension in brower to allow CORS
//SOLUTION : SecrtKEY





app.listen(port,()=>console.log(`Listen on PORT ${port}`))