// const math = require("./math.js");
const path = require("path");
// console.log(math.add(1, 2));
// console.log(math.subtract(1, 2));
const fs = require("fs");
const fsPromises = fs.promises;

const fileOps = async () => {
    try {
       const data = await fsPromises.readFile("./files/lorem.txt", "utf-8");
       
       console.log(data);
       await fsPromises.writeFile("./files/akp.txt", "Hello I am web Developement and I am learning web developement and I am learning web developement");
    //    await fsPromises.unlink("./files/akp.txt");
       console.log("File has been deleted");
    }
    catch(err) {
        console.log(err);
    }
}

fileOps();





// console.log(__filename);
// console.log(path.dirname(__filename));

// <--------- Acces the files in the folder and read the files --------> 


// fs.readFile("./files/lorem.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// <--------- Acces the files in the folder and write the files -------->

// fs.writeFile("./files/akp.txt", "Hello I am web Developement and I am learning web developement and I am learning web developement", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Created file successfully");
//     }
// });

// <--------- Acces the files in the folder and delete the files -------->

// fs.unlink("./files/aman.txt", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File has been deleted");
//     }
// });

// console.log("File has been deleted"); 