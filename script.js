var con = require('./db.js');
const express = require("express");
const app = express();
app.use(express.static("public"));
const bodyParser = require('body-parser');
const { name } = require('ejs');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let flag=0


app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get('/register', (req, res) => {
    res.render("register.ejs");
});


app.get('/login', (req, res) => {
    res.render("login.ejs");
});
app.get('/final', (req, res) => {
    res.render("final.ejs");
});


app.post('/register', (req, res) => {
    const Regname = req.body.Name;
    const email = req.body.email;
    const password = req.body.password;
   

    const sqlCheck = "SELECT * FROM details WHERE name=? AND email = ?";
    const sqlInsert = "INSERT INTO details(name, email, password) VALUES (?, ?, ?)";

    // First, check if the user already exists in the database
    con.query(sqlCheck, [Regname, email], (err, result) => {
        if (err) {
            console.log(err);
            res.redirect('/register');
        } else {
            if (result.length > 0) {
                // User already exists, redirect to registration page
                const message=1
                res.render('register.ejs', {message});
            } else {
                // User does not exist, insert into the database
                con.query(sqlInsert, [Regname, email, password], (err, result) => {
                    if (err) {
                        console.log(err);
                        res.redirect('/register');
                    } else {
                        // Registration successful, redirect to login page
                        res.redirect('/login');
                    }
                });
            }
        }
    });
});

app.post('/login',(req,res)=>
{     
    
    let email=req.body.email;
    let password=req.body.password;
  
            var sql = "SELECT name FROM details WHERE email = ? AND password = ?";
           
            con.query(sql,[email,password],(err,result)=>
            {  
                if(err)
                {
                    console.log(err);
                }
                else if(result.length>0){
                   
                    const userName = result[0].name; 
                    
                    res.render("final.ejs",{name:userName});
                    
                }
                else{
                    res.redirect("/login")
                }

            })
        
})


const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


