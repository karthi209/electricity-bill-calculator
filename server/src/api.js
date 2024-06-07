const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require('body-parser');
const cors = require('cors');

const tamilnaduRate = require('./tamilnaduBilling');

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

const rates = {
  "Andhra Pradesh": 5.5,
  "Arunachal Pradesh": 4.5,
  "Assam": 5.0,
  "Chhattisgarh": 5.3,
  "Goa": 5.2,
  "Gujarat": 6.0,
  "Haryana": 5.7,
  "Himachal Pradesh": 4.8,
  "Jharkhand": 5.4,
  "Kerala": 5.1,
  "Madhya Pradesh": 5.6,
  "Maharashtra": 5.9,
  "Manipur": 4.9,
  "Meghalaya": 5.0,
  "Nagaland": 4.7,
  "Odisha": 5.3,
  "Punjab": 5.8,
  "Rajasthan": 6.1,
  "Tamil Nadu": tamilnaduRate,
  "Telangana": 5.5,
  "Tripura": 4.6,
  "Uttar Pradesh": 5.5,
  "Uttarakhand": 5.2,
  "West Bengal": 5.6
};

router.post('/calculate', (req, res) => {
  const { selectedState, units } = req.body;

  if (!selectedState || !units || selectedState === "") {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const rate = rates[selectedState];
  const unitCount = parseFloat(units);

  if (isNaN(unitCount) || unitCount < 0) {
    return res.status(400).json({ error: 'Invalid number of units' });
  }

  let bill, breakdown;
  if (typeof rate === 'function') {
    // Call the specific rate function for the state
    const result = rate(unitCount);
    bill = result.bill;
    breakdown = result.breakdown;
  } else {
    // Use the flat rate
    bill = rate * unitCount;
    breakdown = [{ fromUnit: 1, toUnit: unitCount, units: unitCount, rate: rate, cost: bill }];
    
  }

  res.json({ bill, breakdown });

});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);