

const fs =require('fs');
const addPerson=(id,fname,lname,age,city)=>{
 const allData=loadInfo()
 const dublicatedData = allData.filter((obj)=>{
    return obj.id ===id
 })
 if (dublicatedData.length==0){
allData.push({
id: id,
fname:fname,
lname: lname,
age: age,
city: city


})
saveallData(allData)

}else{
console.log("Erorr dublicated Data")
}
}

const loadInfo =()=>{

try{
    const dataJson =fs.readFileSync("data.json").toString()
    return JSON.parse(dataJson)
}
catch{
    return []
}
}

const saveallData=(allData)=>{

const saveallDataJson=JSON.stringify(allData)
fs.writeFileSync("data.json",saveallDataJson)
}
 

const deleteData=(id)=>{
const allData=loadInfo()
const dataToKeep=allData.filter((obj)=>{
return obj.id!==id 
})
saveallData(dataToKeep)
console.log ("you have successfully deleted an item")
console.log(dataToKeep)
}
  
const readData= (id)=>{
const allData =loadInfo()
const itemNeeded=allData.find((obj)=>{
return obj.id == id

})    
console.log(itemNeeded)
if (itemNeeded){
    console.log(itemNeeded.id)
}else{
    console.log("id needed not found")
}
}

const listData =()=>{
const allData=loadInfo()
allData.forEach(obj => {
    console.log(obj.fname,obj.age,obj.city)
});
}


module.exports ={
    addPerson,
    deleteData,
    readData,
    listData
}