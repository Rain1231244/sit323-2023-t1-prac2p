const express= require("express") ;
const res = require("express/lib/response");
const app= express();
const addTwoNumber = (n1, n2) => {
    return n1+n2;
}


app.get ("/addTwoNumber", (req,res)=>{
    const n1 = parseInt(req.query.n1); 
    const n2 = parseInt(req.query.n2) ;
    const result = addTwoNumber (n1, n2);
    res. json({statusCode: 200, data: result });
});

app.get ("/", (req,res)=>{
    
    res.write("<h1>Hello, This is the simple html page</h1>");
    res.write("<p>for SIT323 Task2.1</p>");
    res.end();
})

console. log (addTwoNumber (19,12));
const port =3040;
app.listen (port, ()=> {
    console.log("hello i'm listening to port"+port);
})

//use ：localhost:3040/addTwoNumber?n1=4&n2=7  to test