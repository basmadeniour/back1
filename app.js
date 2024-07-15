 const fs=require("fs")
 //here we call the file system to be able to use it
//you must require any core module before using it
 fs.writeFileSync("data1.txt","Basma")
 //after require file system we can use its build in methods
 //this method used to create new file and store data in it
 //first parameter for the file name ,scend parameter for the data you want to store
//  console.log(fs.readFileSync("data1.txt").toString())
 //here we read the data we stored    //shown in terminal
 //the output of (readfilesync) is BUFFER type   ,SO we use tostring() method
 fs.appendFileSync("data1.txt"," "+"Deniour")
 console.log(fs.readFileSync("data1.txt").toString())
 /////////////////////////////////////////////////////////////////////////////
 //HOW TO DEAL WITH EXTERNAL FILE.    (alldata file)
 // we must require any external data to be able to deal with it
 const alldata=require("./alldata.js")     //alldata hold the last export
// console.log(alldata.fname )    here as we export only the (fname) .we must print alldata
//we print (alldata.fname) when we export object contain alot of things      sequence is wrong without export using object
console.log(alldata.fname)
console.log(alldata.lname)
console.log(alldata.mul(2,6))


///////////////////////////////////NPM
//before using any pakage ,you must first initalize them once (npm init -y) ,then require what you want
// will create package.json file (will contain any package you install)
// we install pakages using (npm i packagename )
// any package you install will be stored in(package.json --> dependencies)with its versions ,for easy restore
//dependencies (reverse process)
//after install the package you must require it
const validator=require("validator")
//after require the first package (opackage-lock.json)will be created (security and performance) ,,,,node-modules (packages code)
// console.log(validator.isEmail("Basma")) ///false ,Email format isnot true
console.log(validator.isEmail("Basma@gmail.com"))//////true
//////////////////after delete node-modules   ,to restore it we write (npm i) ,restoring using dependencies

