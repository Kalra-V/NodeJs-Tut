const mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'test'
});
//CHECK CONNECTION
// conn.connect((err) => {
//     if(err) {
//         console.log("Error!")
//     } else {
//         console.log("Connected!")
//     }
// })

conn.query("select * from user", (err, result) => {
    console.log("Result: ", result)
})
