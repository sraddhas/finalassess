const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect('mongodb+srv://sraddha:Sraddhas@cluster0.gwcul2m.mongodb.net/blogdb?retryWrites=true&w=majority&appName=Cluster0'
   
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
