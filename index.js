const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const { User } =require("./models/User");
const config = require('./config/key')
//aplication/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

//aplication/json
app.use(express.json());

const mongoose = require('mongoose');

mongoose.connect('config.mongoURI')
.then(() => console.log('MongoDB ...'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! 123')
})


app.post('/register', ( req,res) => {
  // 회원 가입 할때 필요한 정보 client에서 가져오면 데이터 베이스에 넣어줌,

  const user = new User(req.body)

  user.save((err,userInfo)=>{
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  });

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})