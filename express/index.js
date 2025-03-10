const {format} = require("date-fns");
const { v4: uuidv4 } = require("uuid");

const date = new Date();
console.log(format(date, "yyyy-MM-dd HH:mm:ss"));

console.log(uuidv4());
console.log(uuidv4());

