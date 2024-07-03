const { log } = require('console');
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');
console.warn(dirPath)
// for(i = 0; i < 5; i++) {
//     fs.writeFileSync(`${dirPath}/file${i}.txt`, 'a text file')
// }

fs.readdir(dirPath, (err, files) => {
    files.forEach((file) => {
        console.log("file name is: ", file)
    })
})
