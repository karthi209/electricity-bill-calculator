const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require('body-parser');
const cors = require('cors');

const tamilnaduRate = require('./tamilnaduBilling');
const telanganaRate = require('./telanganaBilling');

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

const rates = {
  "Tamil Nadu": tamilnaduRate,
  "Telangana": telanganaRate,
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

  let bill, breakdown, customerCharge, sourceText, lastUpdateText;
  if (typeof rate === 'function') {
    // Call the specific rate function for the state
    const result = rate(unitCount);
    bill = result.bill;
    breakdown = result.breakdown;
    customerCharge = result.customerCharge;
    sourceText = result.sourceText;
    lastUpdateText = result.lastUpdateText;
  } else {
    // Use the flat rate
    bill = rate * unitCount;
    breakdown = [{ fromUnit: 1, toUnit: unitCount, units: unitCount, rate: rate, cost: bill }];
    
  }

  res.json({ bill, breakdown, customerCharge, sourceText, lastUpdateText });

});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);