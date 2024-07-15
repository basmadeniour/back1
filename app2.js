//instead of showing in terminal ,we want to show data in file
//SO WE NEED TO
//1* CREATE function to read data   (read->load +convert)

const fs=require("fs")


const adddata=(id,fname,lname,city,age)=>{
//first we need to load data and convert it to object
const load=loaddata()

//to prevent the duplicateddata 
const duplicateddata =load.filter((obj)=>{
return obj.id===id
})
// console.log(duplicateddata)
if(duplicateddata.length==0){
//to add new data to data2.json .which holded by load ,we use push method
load.push({
    id:id,
    fname:fname,
    lname:lname,
    city:city,
    age:age,
})
//now we must convert again to json to store it
savedata(load)
}
else{
    console.log("ERROR duplicateddata")
}
}
/////////////////functions
 const loaddata=()=>{
    //uploading data means converting it from json to object
    //any data user enter will be stored at data2.json .which holded at datajson variable
   try{
    const datajson= fs.readFileSync("data2.json").toString()
    //after loading we should convert to object
    //as we donont have data10.json file,it will cause error,SO we will use (try,catch block)
    return JSON.parse(datajson)
}
catch{     //will be executed only one
    return[]
}
}

const savedata=(load)=>{
const alldatajson=JSON.stringify(load)
///store
fs.writeFileSync("data2.json",alldatajson)
}

///////deleted data:
const deletedata=(id)=>{
    const load=loaddata();
//////to deiete data we will store all data with different id
const datatosave=alldata.filter((obj)=>{
    return obj.id !== id
})
// console.log(datatosave)
savedata(datatosave)
}

//////////////to read data
const readdata=(id)=>{
    const load=loaddata()
const itemneeded=load.find((obj)=>
{
return obj.id == id
})
// console.log(itemneeded)
if(itemneeded){
    console.log(itemneeded)  
}
else{
    console.log("NOT FOUNF")
}
}
//////list
const listdata=()=>{
    const load=loaddata()  
    load.forEach((obj) => {
        console.log(obj.fname,obj.lname)
    });
}
  
module.exports={
    adddata,
    deletedata,
    readdata,
    listdata
}