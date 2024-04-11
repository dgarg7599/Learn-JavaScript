
//  ** Variables: A variable is a container that holds a value. It has a name and can be used to store and manipulate data in a program.

// ** Values:  A value is a piece of information that a program can work with. It can be a number, text, true/false, or more complex data.


const accountId = 144553
let accountEmail = "divyansh@google.com"
var accountPassword = "12345"
accountCity = "Agra"    //not to use like this but Js allows it.
let accountState;     //undefined

// accountId = 2 // not allowed


accountEmail = "dg@dg.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope. Js changes var to let.
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
//it can print in tabular form