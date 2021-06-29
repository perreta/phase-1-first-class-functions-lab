// Code your solution in this file!
 const returnFirstTwoDrivers = function() {
    const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'] 
    const firstTwo = drivers.slice(0, 2)
    return firstTwo
 } 

 const returnLastTwoDrivers = function() {
    const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
    const lastTwo = drivers.slice (2, 4)
    return lastTwo 
 }

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
 
 const createFareMultiplier = function(multiplier) {
     return function(fare){
         return fare * multiplier
     }
     } 

const fareDoubler = function(fare){
    return (fare) * 2
}

const fareTripler = function(fare){
    return (fare) * 3
}

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

const selectDifferentDrivers = (drivers, choose) => choose(drivers)