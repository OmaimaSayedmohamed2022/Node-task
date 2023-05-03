const yargs =require("yargs");


const data = require ("./data")
// console.log(yargs.argv)
yargs.command({
command:"add",
describe: "you add an item",
builder:{
    fname:{
    describe:"this is the first name in add command",
    demandOption:true,
    type:"string",
    },
    lname:{
        describe:"this is the last name in add command",
        demandOption:true,
        type:"string",
        }
},
handler:(x)=>{
    data.addPerson( x.id,x.fname , x.lname , x.age , x.city )
}
})

yargs.command({
command:"delete",
describe:"delete an item",
handler:(x)=>{
data.deleteData(x.id)
}
})
console.log(yargs.argv)


yargs.command({
command:"read",
describe:"read an item",
builder:{
    id:{
        describe:" this is dec in read command",
        demandOption: true,
        type:"string"
    }
},
handler:(x)=>{
data.readData(x.id)

}

})

console.log(yargs.argv)


yargs.command({
command:"list",
describe:"list data",
handler:()=>{
    data.listData()
}

})
console.log(yargs.argv)
yargs.parse()