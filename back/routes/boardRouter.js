const express = require('express');
const router = express.Router();
const {sequelize,Board} = require("../db/board.js");
const {Op} = require("sequelize");

router.post("/insert",(req,res)=>{
  const {title,content,writer} = req.body;
  Board.create({
    title,
    content,
    writer
  });
  res.send("insert 됨");
});

router.get("/list/:text?", async(req,res)=>{
    // select * from boards 
    // where title like '%a%'
    // limit 0,10;
    console.log(`req.params.text ${req.params.text}`)
    let text = req.params.text;
    if(!req.params.text){
        text='';
    }
    const boards = await Board.findAll({
        limit :5,
        where:[
            { title: { [Op.like]: `%${text}%` }}
        ]
    });
    res.json(boards);
});

module.exports=router;