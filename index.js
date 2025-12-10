const express=require('express');
let port=2100;
const app=express();
app.get({
    sucess: true,
    message:"Server is running successfully",
});
app.listen(port,async()=>{
    console.log(`App is running  on port ${port}`);
});