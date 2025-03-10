// show the directories in the folder

const fs = require("fs");

// create a directory or file
if (!fs.existsSync("./new")) {
    fs.mkdir("./new", (err) => {
       if(err) throw err;
       console.log("Directory created successfully");
    })
}


// remove the directory  or file

if (fs.existsSync("./new")) {
    fs.rmdir("./new", (err) => {
       if(err) throw err;
       console.log("Directory removed successfully");
    })
}