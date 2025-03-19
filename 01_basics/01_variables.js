const accountId = 1444553
let accountEmail = "mdfa@gmail.com"
var accountPassword = "12345"
accountCity= "aligarh"

// accountId = 2 // Not allowed

accountEmail = "fa@gmail.com"
accountPassword = "1234567"
accountCity = "agra"
let accountState;

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountState, accountId, accountEmail, accountPassword, accountCity])
