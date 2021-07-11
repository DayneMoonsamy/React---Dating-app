
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "subzero1",
    database: "users"
});

app.use(express.urlencoded({extended: true}));
app.use(express.json())



app.get("/api", (req, res) => {  
    const sql = "SELECT * FROM reviewer;"
    db.query(sql, (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.json({message: result});
    });   
   //res.json({ message: "Hello from server!" });
});

app.get("/apiCust", (req, res) => {  
    const sql = "SELECT * FROM cust;"
    db.query(sql, (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.json({message: result});
    });   
   //res.json({ message: "Hello from server!" });
});

app.post("/userRate", (req, res) => {  
    console.log(req.body)
    const sql = "UPDATE review SET useful = ? WHERE id = ?;"
    db.query(sql, [req.body.rating, req.body.id] ,(err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.json({message: result});
    });   
    //res.json({ message: "Hello from server!" });
});

app.post("/userhandleReview", (req, res) => {  
    console.log(req.body)
        let sql = "insert into review(user_id, reviewer_id) select ?,? from dual WHERE NOT EXISTS (SELECT * FROM review where user_id=? and reviewer_id=?);"
        db.query(sql, [req.body.id, req.body.submit, req.body.id, req.body.submit],(err,result)=>{
            if(err) {
                console.log(err)
            } 
            res.json({message: result});
        });  
    //res.json({message: "Success"});
});

app.post("/submitReview", (req, res) => {  
    console.log(req.body)
    let sql = "UPDATE review SET description = ?, rating = ? WHERE user_id =? and reviewer_id=?;"
        db.query(sql, [req.body.text, req.body.rating, req.body.uID, req.body.rID ],(err,result)=>{
            if(err) {
                res.json(err)
            } 
            res.json({message: result});
        });  
});

app.post("/Rrating", (req, res) => {  
    console.log(req.body)
    let sql = "select useful from review where reviewer_id=? and useful is not null;"
        db.query(sql, [req.body.id],(err,result)=>{
            if(err) {
                res.json(err)
            } 
            res.json({message: result});
        });  
});

app.post("/view", (req, res) => {  
    console.log(req.body)
    let sql = "select useful from review where reviewer_id=? and useful is not null;"
        db.query(sql, [req.body.id],(err,result)=>{
            if(err) {
                res.json(err)
            } 
            res.json({message: result});
        });  
});


app.post("/fetchReview", (req, res) => {  
    console.log(req.body)
    if(req.body.type == "User")
        var sql = "SELECT r.*, rr.name, rr.picture FROM reviewer rr,review r where r.user_id = ? and r.reviewer_id = rr.id and r.rating IS NOT NULL and r.useful is null;"
    else
        var sql = "SELECT c.* FROM reviewer rr,review r, cust c where c.id=r.user_id and rr.id = r.reviewer_id and r.rating IS NULL and rr.id =?;"
    db.query(sql, [req.body.id] ,(err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send({message: result});
    });   
    //res.json({ message: "Hello from server!" });
});


app.post("/login", (req, res) => {
    console.log(req.body)
    if(req.body.user == "User")
        var sql = "SELECT * FROM cust where username = ?"
    else if(req.body.user == "Reviewer")
        var sql = "SELECT * FROM reviewer where name = ?"
    else if(req.body.user == "Admin")
        var sql = "SELECT * FROM administrator where name = ?"
    db.query(sql, [req.body.name], (err,result)=>{
        if(err) {
            console.log(err)
        } 
        console.log(result)
        res.json({message: result});
    });   
   // res.json({ message: "Hello from server!" });
});

app.post("/registerUser", (req, res) => {
    const sql = `INSERT INTO users.cust (username, location, genderUser, genderMatch, picture, userLike, matchLike) VALUES (?,?,?,?,?,?,?)`
    db.query(sql, [req.body.name, req.body.loc, req.body.gend, req.body.genderMatch, req.body.data, req.body.like, req.body.matchLike],(err,result)=>{
        if(err) {
            res.json({message: "Duplicate key"})
        } 
        else
            res.json({message: result});
    });   
   // res.json({ message: "Hello from server!" });
});


app.post("/registerReviewer", (req, res) => {
    const sql = `INSERT INTO users.reviewer (name, picture, description) VALUES (?,?,?)`
    db.query(sql, [req.body.name, req.body.picture, req.body.description],(err,result)=>{
        if(err) {
            res.json({message: "Duplicate key"})
        } 
        else
            res.json({message: result});
    });   
   // res.json({ message: "Hello from server!" });
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});