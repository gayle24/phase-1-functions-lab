// Code your solution in this file!
let distance
function distanceFromHqInBlocks(someValue) {
    if (someValue > 42) {
        distance = someValue - 42
    } else {
        distance = 42 - someValue
    } 
    return distance
}
distanceFromHqInBlocks()


function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue) ;
    let feet
    if (someValue > 42) {
        feet = (someValue - 42) * 264
    } else {
        feet = (42 - someValue) * 264
    } 
    return feet
}
distanceFromHqInFeet()


function distanceTravelledInFeet(start, destination) {
    let travelled
    if (destination < start) {
        travelled = (start - destination) * 264
    } else {
        travelled = (destination - start) * 264
    }
    return travelled
}
distanceTravelledInFeet()


function calculatesFarePrice(start, destination) {
    let distance
        if 
       
}
