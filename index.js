// performing the curd operation by using fs module of node js

//creating a file
const fs = require("node:fs");
const createFile = ()=>{
    try{
fs.writeFileSync("text.txt","hello my first file is created");
console.log("file is created successfully");
    }
    catch(err){
        console.log("error fetching while craeting a file" + " "+err)
    }
}

// readFile 

const readfile = ()=>{
   try{
    const data = fs.readFileSync("text.txt",{encoding :'utf-8'});
    console.log("Data fetching from text file : "+data);
   }
   catch(err){
    console.log("error fetching while reading  a file" + " "+err)
   }
}

// append data in the file

const appendData = ()=>{
    try{
        fs.appendFileSync("text.txt","\n the data is append");
console.log("The data is successfully Append in the file")
    }
    catch(err){
        console.log("error fetching while appending the data a file" + " "+err)
    }
}

// Delete the file

const deleteFile = ()=>{
    try{
        fs.unlinkSync("text.txt");
        console.log("The file has been deleted successfully!!")
    }
    catch(err){
        console.log("error fetching while deleting the file" + " "+err)
    }
}


// console.log(createFile());
// console.log(readfile())
// console.log(appendData());
// console.log(deleteFile())


// path module

const path = require("node:path");

console.log(__dirname);
console.log(__filename);

const parse = path.parse(__filename);

console.log(parse);

console.log(path.join(__filename,"file"))
console.log(path.basename(__filename))


// readline module
const readline = require('node:readline');
const ans = readline.createInterface({
    input :process.stdin,
    output :process.stdout
});
 
ans.question("what is your name",(answer)=>{
    console.log(`hello,${answer}`)
    ans.close();
})

