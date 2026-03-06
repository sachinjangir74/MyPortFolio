const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('public/resume.pdf');

pdf(dataBuffer).then(function(data) {
    console.log("=== PDF CONTENT START ===");
    console.log(data.text);
    console.log("=== PDF CONTENT END ===");
}).catch(err => {
    console.error("Error reading PDF:", err);
});
