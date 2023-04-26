const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const indexRouter = require('./routes/indexRouter.js');
const boardRouter = require('./routes/boardRouter.js');

app.use(morgan());
app.use(cors());  
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))

app.use("/", indexRouter);
app.use("/freeboard", boardRouter);

app.use((req,res,next)=>{
  res.status(404).json({
    "message":"요청되는 주소는 없습니다",
  })
});

app.listen(10000, function () {
  console.log("Example app listening on port 10000!");
});
