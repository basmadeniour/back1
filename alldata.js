const fname="Basma"
const lname="Deniour"

//to be able to read this file from any external file we must EXPORT it
/////module.exports=fname
/////module.exports=fname
//when exporting more than specific data ,the last export only which will appear
//SO we using object to export more than one data

function mul (x,y){
    console.log(x*y)
}

///////the right way to export
module.exports={
    fname:fname,
    lname:lname,
    //you also can export function
    mul:mul
}