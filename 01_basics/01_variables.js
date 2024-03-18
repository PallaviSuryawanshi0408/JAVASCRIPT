const AccountId = 101
// AccountId=201 
// console.log(AccountId)
// not allowed to change the value of const

let AccountHolderName ="pallavi"
var Branch ="Indore"
State="MP"
let city;//undefined variable
console.table([AccountId,AccountHolderName,Branch,State,city])

AccountHolderName ="Sandeep"
Branch ="New Delhi"
State="Delhi"
console.table([AccountId,AccountHolderName,Branch,State])

// prefer to use let for variables and for constants use const avoid to use var beacause of the problem of block and functional scope