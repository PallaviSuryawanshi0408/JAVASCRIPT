const programming = new Map()
programming.set("js")
programming.set("java")
programming.set("python")
programming.set("cpp")


const Myarr = ["Apple","mango","cherry","Banana"]
// Myarr.forEach(function(val){
//     console.log(val);
// })
// another method
// Myarr.forEach((val)=>{
//     console.log(val);
// })
// another method
// function print(item){
//     console.log(item);
// }
// Myarr.forEach(print)
// Myarr.forEach((item,index,Myarr)=>{
//     console.log(`${item} :->${index} :-> ${Myarr}`);

// })

const Myarrobj =[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]
Myarrobj.forEach((item)=>{
    console.log(item);
})
Myarrobj.forEach((item)=>{
    console.log(item.languageName);
})