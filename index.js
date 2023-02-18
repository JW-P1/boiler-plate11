const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const { User } =require("./models/User");

//aplication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//aplication/json
app.use(bodyParser.json());

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sws2664:sws690215@cluster905858.dufhjj5.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('MongoDB ...'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
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