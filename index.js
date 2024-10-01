// const batteryBatches = [4, 5, 3, 4, 4,];
 
// const totalBatteries = batteryBatches.reduce((total, batch) =>{
//     return total + batch;
// }, 0);
// console.log(totalBatteries);
  

// const batteryBatches = [4, 5, 3, 4, 4];

// const totalBatteries = batteryBatches.reduce((total, batch) => {
//     return total + batch;
// }, 0);

// console.log("Total Assembled Batteries:", totalBatteries); // Output: Total Assembled Batteries: 20


const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((total, batch) =>{
    return total + batch;
}, 0); // Starting the total at 0

console.log(totalBatteries); // Output: 20

// Code your solution here
