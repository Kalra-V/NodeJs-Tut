const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`

// CREATE FILE
// fs.writeFileSync(filePath, 'file content');

//READ FILE
// fs.readFile(filePath,'utf-8' ,(err, item) => {
//     console.log(item)
// })

// UPDATE FILE
// fs.appendFile(filePath, ' while this is new file content appended', (err) => {
//     if(!err) console.log("File is updated!"); 
// })

//RENAME FILE
// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//     if(!err) console.log("File has been renamed!")
// })

//DELETE FILE
fs.unlinkSync(`${dirPath}/fruit.txt`)