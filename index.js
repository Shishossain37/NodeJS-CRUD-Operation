const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname, "CRUD")
const filePath = `${dirPath}/hello.txt`
fs.writeFileSync(filePath, "Hello world")
fs.readFile(filePath, 'utf-8', (err, item) => {
    console.log(item);
})
fs.appendFile(filePath, ' Hello prithibi', (err) => {
    if (!err) {
        console.log("file is updated");
    }
})
fs.rename('hi.txt', filePath, (err) => {
    if (!err) {
        console.log('rename success');
    }
})

fs.unlinkSync(filePath)