import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCard.js';
import Cors from  'cors';

//APP CONFIGERTION
const app = express();
const port = process.env.PORT || 8000;

// MIDDLEWARES
app.use(express.json());
app.use(Cors());

//DS CONFIGERTION
const connection = "mongodb+srv://DSmark:COn9zFxp1R59af46@cluster0.6fn9o.mongodb.net/tinderCard?retryWrites=true&w=majority"
mongoose.connect(connection , { useNewUrlParser : true, useUnifiedTopology : true})
.then((res)=>console.log('> Connected...'))
.catch(err=>console.log(`> Error while connecting to mongoDB : ${err.message}` ))

//API ENDPOINTS
app.get("/",(req,res)=>{
    res.status(200).send("hey");
});

app.post("/tinder/card",(req,res)=>{
    const dsCard = req.body;
    
    Cards.create(dsCard,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })
    // console.log(dsCard);
});

app.get("/tinder/card",(req,res)=>{
  Cards.find((err,data)=>{
      if(err){
          res.status(500).send(err);
      }
      else{
          res.status(200).send(data)
      }
  })
})
//LISTERNER
app.listen(port,(err)=>{
    console.log(`running port on ${port}`);
});
