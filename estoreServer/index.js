const express = require('express');
const productCategories = require('./Routes/productCategories');
const app = express();
const cors = require('cors');

app.use(cors());

app.use("/productCategories", productCategories);

// app.use("/",product)



const PORT = 5000;
const server = app.listen(PORT, ()=>{
    console.log("App is running on the port - 5000");
})

