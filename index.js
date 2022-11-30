// code your solution here
function saturdayFun(activity) {
    if (activity){
    return "This Saturday, I want to " + activity + "!"}
    else {
        return "This Saturday, I want to roller-skate!"
    }
}
const mondayWork = function (activity){
    if(activity){
        return "This Monday, I will " + activity + "."
    }
    else {
        return "This Monday, I will go to the office."  
    }

}
function wrapAdjective(string = '*'){
    console.log("unknown",string)
   return function pizza(name = "special"){
    return 'You are ' + string + name + string + '!'
   }
}
 // const part1 = function(name = "special") {
    //     return function 'You are' + name + '!'
    // }
    // const part2 = function(symbol = "*"){
    // }
