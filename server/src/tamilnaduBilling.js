function tamilnaduRate(units) {
    const rate100 = 0;
    const rate400 = 4.5;
    const rate500 = 6;
    const rate600 = 8;
    const rate800 = 9;
    const rate1000 = 10;
    const rate1000plus = 11;
  
    let bill = 0;
    let breakdown = [];
    let fromUnit = 1;
    
    if (units <= 100) {
      bill = units * rate100;
      breakdown.push({ fromUnit: 1, toUnit: units, units: units, rate: rate100, cost: bill });
    } 
    else if (units <= 400) {
      bill = 100 * rate100 + (units - 100) * rate400;
      breakdown.push({ fromUnit: 1, toUnit: 100, units: 100, rate: rate100, cost: 100 * rate100 });
      breakdown.push({ fromUnit: 101, toUnit: units, units: units - 100, rate: rate400, cost: (units - 100) * rate400 });
    } 
    else if (units <= 500) {
      bill = 100 * rate100 + 300 * rate400 + (units - 400) * rate500;
      breakdown.push({ fromUnit: 1, toUnit: 100, units: 100, rate: rate100, cost: 100 * rate100 });
      breakdown.push({ fromUnit: 101, toUnit: 400, units: 300, rate: rate400, cost: 300 * rate400 });
      breakdown.push({ fromUnit: 401, toUnit: units, units: units - 400, rate: rate500, cost: (units - 400) * rate500 });
    } 
    else if (units <= 600) {
      bill = 100 * rate100 + 300 * rate400 + 100 * rate500 + (units - 500) * rate600;
      breakdown.push({ fromUnit: 1, toUnit: 100, units: 100, rate: rate100, cost: 100 * rate100 });
      breakdown.push({ fromUnit: 101, toUnit: 400, units: 300, rate: rate400, cost: 300 * rate400 });
      breakdown.push({ fromUnit: 401, toUnit: 500, units: 100, rate: rate500, cost: 100 * rate500 });
      breakdown.push({ fromUnit: 501, toUnit: units, units: units - 500, rate: rate600, cost: (units - 500) * rate600 });
    } 
    else if (units <= 800) {
      bill = 100 * rate100 + 300 * rate400 + 100 * rate500 + 200 * rate600 + (units - 600) * rate800;
      breakdown.push({ fromUnit: 1, toUnit: 100, units: 100, rate: rate100, cost: 100 * rate100 });
      breakdown.push({ fromUnit: 101, toUnit: 400, units: 300, rate: rate400, cost: 300 * rate400 });
      breakdown.push({ fromUnit: 401, toUnit: 500, units: 100, rate: rate500, cost: 100 * rate500 });
      breakdown.push({ fromUnit: 501, toUnit: 600, units: 100, rate: rate600, cost: 100 * rate600 });
      breakdown.push({ fromUnit: 601, toUnit: units, units: units - 600, rate: rate800, cost: (units - 600) * rate800 });
    } 
    else if (units <= 1000) {
      bill = 100 * rate100 + 300 * rate400 + 100 * rate500 + 200 * rate600 + 200 * rate800 + (units - 800) * rate1000;
      breakdown.push({ fromUnit: 1, toUnit: 100, units: 100, rate: rate100, cost: 100 * rate100 });
      breakdown.push({ fromUnit: 101, toUnit: 400, units: 300, rate: rate400, cost: 300 * rate400 });
      breakdown.push({ fromUnit: 401, toUnit: 500, units: 100, rate: rate500, cost: 100 * rate500 });
      breakdown.push({ fromUnit: 501, toUnit: 600, units: 100, rate: rate600, cost: 100 * rate600 });
      breakdown.push({ fromUnit: 601, toUnit: 800, units: 200, rate: rate800, cost: 200 * rate800 });
      breakdown.push({ fromUnit: 801, toUnit: units, units: units - 800, rate: rate1000, cost: (units - 800) * rate1000 });
    } 
    else {
      bill = 100 * rate100 + 300 * rate400 + 100 * rate500 + 200 * rate600 + 200 * rate800 + 200 * rate1000 + (units - 1000) * rate1000plus;
      breakdown.push({ fromUnit: 1, toUnit: 100, units: 100, rate: rate100, cost: 100 * rate100 });
      breakdown.push({ fromUnit: 101, toUnit: 400, units: 300, rate: rate400, cost: 300 * rate400 });
      breakdown.push({ fromUnit: 401, toUnit: 500, units: 100, rate: rate500, cost: 100 * rate500 });
      breakdown.push({ fromUnit: 501, toUnit: 600, units: 100, rate: rate600, cost: 100 * rate600 });
      breakdown.push({ fromUnit: 601, toUnit: 800, units: 200, rate: rate800, cost: 200 * rate800 });
      breakdown.push({ fromUnit: 801, toUnit: 1000, units: 200, rate: rate1000, cost: 200 * rate1000 });
      breakdown.push({ fromUnit: 1001, toUnit: units, units: units - 1000, rate: rate1000plus, cost: (units - 1000) * rate1000plus });
    }
  
    return { bill, breakdown };
  }
  
  module.exports = tamilnaduRate;
  