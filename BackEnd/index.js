require('dotenv').config();
const express = require('express')
const cors=require('cors');

const connectToMongo=require("./database");
const userRoute=require('./router/userRoute')
connectToMongo();
const app = express()


app.use(cors());
app.use(express.json());
app.use('/app',userRoute);
const port = 7001
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})