const fs = require('fs');
const folderNameStr = process.argv[2] || 'Project';
 
try {
    fs.mkdirSync(folderNameStr);
    fs.writeFileSync(`${folderNameStr}/index.html`, '');
    fs.writeFileSync(`${folderNameStr}/app.js`, '');
    fs.writeFileSync(`${folderNameStr}/styles.css`, '');

} catch (e) {
    console.log("SOMETHING WENT WRONG!!!");
    console.log(e);
}