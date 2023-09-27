// code your solution here
function saturdayFun(activity = "roller-skate"){
    return(`This Saturday, I want to ${activity}!`)
}
saturdayFun()

function mondayWork(activity = "go to the office"){
    return(`This Monday, I will ${activity}.`)
}
mondayWork()

function wrapAdjective(flair = "*"){
    const innerFunction = function (adjective = "|special|"){
        return `You are ${flair}${adjective}${flair}!`
    }
    return innerFunction
}
wrapAdjective("%")("a dedicated programmer")


//function outer(greeting, msg = "It's a fine day to learn") {
  //const innerFunction = function (name, lang = "Python") {
    //return `${greeting}, ${name}! ${msg} ${lang}`;
  //};
  //return innerFunction;
//}