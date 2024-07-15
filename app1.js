/////////////////////////////////lec2
//////process.argv[url of node , url of your current app]
// console.log(process.argv)
// console.log(process.argv[2])

const { type } = require("os")
const yargs = require("yargs")
const app2 = require("./app2.js");

//we can hold the value user enter by varu=iable to handel any logic
// const process2=console.log(process.argv[2])
// if(x==="add"){
//     console.log("you have already added an item")
// }
// else if(x==="delete"){
//     console.log("you have already deleted an item")
// }
// else{
//     console.log("Error")   
// }
// user can enter object as following (--fname="Basma")
//here  if user enter abject  ,coimplier will deal with it as string.SO we should use yargs package which (parsing the arguments)
//before using any package we must require it
// console.log(yargs.argv)

////////////////commands using yargs
yargs.command({
    command:"add",
    describe:"to add an item",
    builder:{
      fname:{
        describe:"this is the frist name describe",
       demandOption: true,
       type: "string",
      },
      lname:{
        describe:"this is the last name describe",
       demandOption: true,
       type: "string",
      }
    },
    handler:(x)=>{
        // console.log(x.fname,x.lname)
        app2.adddata(x.id,x.fname,x.lname,x.city,x.age)
    }
    })
    // console.log(yargs.argv)

    yargs.command({
        command:"delete",
        describe:"you have already deleted an item",
        handler:(x)=>{
            // console.log("you have already deleted an item")
            app2.deletedata(x.id)
        }
    })

    yargs.command({
      command:"read",
      describe:"you have already read an item",
      builder:{
       id:{
       describe:"id describation",
       demandOption:true,
       type:"string"
       }
      },
      handler:(x)=>{
          // console.log("you have already read an item")
          app2.readdata(x.id)
      }
  })

  yargs.command({
    command:"list",
    describe:"you have already list items",
    handler:(x)=>{
       app2.listdata()
    }
})
        // console.log(yargs.argv)
        yargs.parse()
   