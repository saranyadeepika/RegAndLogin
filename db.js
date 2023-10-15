var sql=require("mysql")

const con=sql.createPool(
    {
        host:'localhost',
        user:'root',
        password:'root123',
        database:'registrationdetails',
        connectionLimit:10,
        
    }
)
module.exports=con