// Code your solution in this file!
const returnFirstTwoDrivers = (arr) =>  {
    return [ arr[0], arr[1]];
}

const returnLastTwoDrivers = (arr) => {
    const driver1 = arr[arr.length-1] 
    const driver2 = arr[arr.length-2] 
    return [ driver2, driver1 ];
};

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = fare => value => value * fare;

const fareDoubler = fare => createFareMultiplier(fare)(2);

const fareTripler = fare => createFareMultiplier(fare)(3);

const selectDifferentDrivers = (driverArray, driverFunction) => {
    return driverFunction(driverArray);
}