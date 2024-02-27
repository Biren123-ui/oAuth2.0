const app = require("./server/app.server");
const port = process.env.PORT;
const {connectDB}=require("./db/connection")

connectDB().then(()=>
{
  app.listen(process.env.PORT||8000,()=>
  {
    console.log(`server running in ${process.env.PORT}`);
  })
}).catch((err)=>
{    
  console.log("mongo db connection failed",err);
})


