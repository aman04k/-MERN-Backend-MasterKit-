// const math = require("./math.js");
// const path = require("path");
// console.log(math.add(1, 2));
// console.log(math.subtract(1, 2));

// console.log(__filename);
// console.log(path.dirname(__filename));

// <--------- Acces the files in the folder and read the files --------> 

const fs = require("fs");

// fs.readFile("./files/lorem.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// <--------- Acces the files in the folder and write the files -------->

// fs.writeFile("./files/aman.txt", "Hello I am web Developement and I am learning web developement", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File has been updated");
//     }
// });

// <--------- Acces the files in the folder and delete the files -------->

fs.unlink("./files/aman.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File has been deleted");
    }
});
