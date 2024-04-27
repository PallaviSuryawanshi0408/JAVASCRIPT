//this refer to the current context of the website

const user ={
    username : "pallavi",
    age : 23,
    welcome : function(){
        console.log(`${this.username},welcome to website`)
        console.log(this)
    }
}
user.welcome()
user.username ="sam"
user.welcome()

console.log(this)//this will refer a empty object because we are in node environment globally it is not referring to any object but in browser this will refer some window object
