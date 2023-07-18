const fs = require('fs');

function serveStaticFile(response) {
    const filePath = 'C:\\Users\\Aakash Prajapati\\OneDrive\\Desktop\\http-server\\index.html';
    fs.readFile(filePath, (err, content) => {
        if (err) {
            console.log('File Not Find..', err);
        }
        else {
            response.write(content);
            response.end();
        }
    })
}

module.exports = serveStaticFile;
