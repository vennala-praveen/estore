const express = require('express');
const productCategories = express.Router();
// const app = express();
const mysql = require('mysql');

// app.use(cors());

// app.use("/",product)

const pool = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "Root@123",
    database : "estore",
    port : 3306,
    multipleStatements : true
})

productCategories.get("/",(req,res)=>{

    let categorydata;

    pool.getConnection((err,connection)=>{
        if(err){
            res.status(500).send(err);
        }else{
            pool.query("Select * from categories",(error,categories)=>{
                if(error){
                    categorydata = error;
                    res.status(500).send(error);
                }else{
                    categorydata = categories;
                    res.status(200).send(categorydata);
                }
            })

        }
        // res.status(200).send("Connection Established.");
    })
})

module.exports = productCategories;