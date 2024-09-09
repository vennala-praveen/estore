const express = require('express');
const product = express.Router();
const mysql = require('mysql');


const pool = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "Root@123",
    database : "estore",
    port : 3306,
    multipleStatements : true
})

product.get("/productCategories",(req,res)=>{

    let categorydata;

            pool.query("Select * from categories",(error,categories)=>{
                if(error){
                    categorydata = error;
                    res.status(500).send(error);
                }else{
                    categorydata = categories;
                    res.status(200).send(categorydata);
                }
            })
    })

product.get("/getProducts",(req,res)=>{
    let productData;

    pool.query("select * from products", (err,rows)=>{
        if(err){
            res.status(500).send(err);
        }else{
            productData = rows;
            res.status(200).send(productData);
        }
    })
})


module.exports = product;