// code your solution here
saturdayFun('bathe my dog')
function saturdayFun( activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`}

const mondayWork = function(activity = 'go to the office') {
    return  `This Monday, I will ${activity}.`

}
mondayWork("work from home")

function wrapAdjective(character = "*") {
    return function(type = "special") {
        return `You are ${character}${type}${character}!`
    }
}

wrapAdjective("*")("a hard worker")
wrapAdjective("||")("a dedicated programmer")


