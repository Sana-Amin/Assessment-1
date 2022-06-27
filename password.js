let password = 'HelloWorld'
for(let i =0; i< password.length; i++)
if(password.length <= 10 && !isNaN(password.charAt(i))){
consolog.log("Your password is good to go")
}else{
    console.log("Please make sure your password is at least 10 charcters long and contains one number")
}

if(password.length >= 20){
    console.log("password needs to be shorter than 20 characters long")
}
//checks to see if the password is more than 20 characters long

let contains = /?s*(?:;|$)\s*/
let contains2 = password.split(contains)
password.split('')
//Checks for speical characters

