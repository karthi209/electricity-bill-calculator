function telanganaRate(units) {
    const rate50 = 1.95;
    const rate100 = 3.1;
    const rate100a = 3.4;
    const rate200 = 5.1;
    const rate300 = 7.7;
    const rate400 = 9;
    const rate800 = 9.5;
    const rate800plus = 10;
  
    const customercharge50 = 80;
    const customercharge100 = 140;
    const customercharge200 = 180;
    const customercharge300 = 200;
    const customercharge400 = 240;
    const customercharge800 = 280;
    const customercharge800plus = 320;
  
    let bill = 0;
    let breakdown = [];
    let customerCharge = [];
    const sourceText = "* Rates from Telangana State Northern Power Distribution Company Limited, Telangana State Southern Power Distribution Company Limited";
    const lastUpdateText = "Last Updated: June 2024";
  
    if (units >= 0 && units <= 50) {
      bill = (units * rate50) + customercharge50;
      breakdown.push({ fromUnit: 1, toUnit: units, units: units, rate: rate50, cost: units * rate50 });
      customerCharge.push({ addCharges: "Fixed Charge", cost: customercharge50 });
    } 
    else if (units > 50 && units <= 100) {
      bill = 50 * rate50 + (units - 50) * rate100 + customercharge100;
      breakdown.push({ fromUnit: 1, toUnit: 50, units: 50, rate: rate50, cost: 50 * rate50 });
      breakdown.push({ fromUnit: 51, toUnit: units, units: units - 50, rate: rate100, cost: (units - 50) * rate100 });
      customerCharge.push({ addCharges: "Fixed Charge", cost: customercharge100 });
    } 
    else if (units > 100 && units <= 200) {
      bill = 100 * rate100a + (units - 100) * rate200 + customercharge200;
      breakdown.push({ fromUnit: 1, toUnit: 100, units: 100, rate: rate100a, cost: 100 * rate100a });
      breakdown.push({ fromUnit: 101, toUnit: units, units: units - 100, rate: rate200, cost: (units - 100) * rate200 });
      customerCharge.push({ addCharges: "Fixed Charge", cost: customercharge200 });
    } 
    else if (units > 200 && units <= 300) {
      bill = 100 * rate100a + 100 * rate200 + (units - 200) * rate300 + customercharge300;
      breakdown.push({ fromUnit: 1, toUnit: 100, units: 100, rate: rate100a, cost: 100 * rate100a });
      breakdown.push({ fromUnit: 101, toUnit: 200, units: 100, rate: rate200, cost: 100 * rate200 });
      breakdown.push({ fromUnit: 201, toUnit: units, units: units - 200, rate: rate300, cost: (units - 200) * rate300 });
      customerCharge.push({ addCharges: "Fixed Charge", cost: customercharge300 });
    } 
    else if (units > 300 && units <= 400) {
      bill = 100 * rate100a + 100 * rate200 + 100 * rate300 + (units - 300) * rate400 + customercharge400;
      breakdown.push({ fromUnit: 1, toUnit: 100, units: 100, rate: rate100a, cost: 100 * rate100a });
      breakdown.push({ fromUnit: 101, toUnit: 200, units: 100, rate: rate200, cost: 100 * rate200 });
      breakdown.push({ fromUnit: 201, toUnit: 300, units: 100, rate: rate300, cost: 100 * rate300 });
      breakdown.push({ fromUnit: 301, toUnit: units, units: units - 300, rate: rate400, cost: (units - 300) * rate400 });
      customerCharge.push({ addCharges: "Fixed Charge", cost: customercharge400 });
    } 
    else if (units > 400 && units <= 800) {
      bill = 100 * rate100a + 100 * rate200 + 100 * rate300 + 100 * rate400 + (units - 400) * rate800 + customercharge800;
      breakdown.push({ fromUnit: 1, toUnit: 100, units: 100, rate: rate100a, cost: 100 * rate100a });
      breakdown.push({ fromUnit: 101, toUnit: 200, units: 100, rate: rate200, cost: 100 * rate200 });
      breakdown.push({ fromUnit: 201, toUnit: 300, units: 100, rate: rate300, cost: 100 * rate300 });
      breakdown.push({ fromUnit: 301, toUnit: 400, units: 100, rate: rate400, cost: 100 * rate400 });
      breakdown.push({ fromUnit: 401, toUnit: units, units: units - 400, rate: rate800, cost: (units - 400) * rate800 });
      customerCharge.push({ addCharges: "Fixed Charge", cost: customercharge800 });
    } 
    else if (units > 800) {
      bill = 100 * rate100a + 100 * rate200 + 100 * rate300 + 100 * rate400 + 400 * rate800 + (units - 800) * rate800plus + customercharge800plus;
      breakdown.push({ fromUnit: 1, toUnit: 100, units: 100, rate: rate100a, cost: 100 * rate100a });
      breakdown.push({ fromUnit: 101, toUnit: 200, units: 100, rate: rate200, cost: 100 * rate200 });
      breakdown.push({ fromUnit: 201, toUnit: 300, units: 100, rate: rate300, cost: 100 * rate300 });
      breakdown.push({ fromUnit: 301, toUnit: 400, units: 100, rate: rate400, cost: 100 * rate400 });
      breakdown.push({ fromUnit: 401, toUnit: 800, units: 400, rate: rate800, cost: 400 * rate800 });
      breakdown.push({ fromUnit: 801, toUnit: units, units: units - 800, rate: rate800plus, cost: (units - 800) * rate800plus });
      customerCharge.push({ addCharges: "Fixed Charge", cost: customercharge800plus });
    } else {
      bill = 0;
    }
  
    return { bill, breakdown, customerCharge, sourceText, lastUpdateText };
  }
  
  module.exports = telanganaRate;
  