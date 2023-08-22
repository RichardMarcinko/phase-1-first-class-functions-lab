// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
}
const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier = (multiplier) => {
     return function fareMultiplier(fare) {
        return fare * multiplier;
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
function selectDifferentDrivers(drivers, driversSlice) {
    if (driversSlice === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers)
    }
    if (driversSlice === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers)
    }
    else false;
}