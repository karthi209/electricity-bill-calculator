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

  const result = rate(unitCount);

  res.json(result);
});

router.post('/compare', (req, res) => {
  const { units } = req.body;
  const unitCount = parseFloat(units);

  if (isNaN(unitCount) || unitCount < 0) {
    return res.status(400).json({ error: 'Invalid number of units' });
  }

  const Bills = {};

  for (const state in rates) {
    if (rates.hasOwnProperty(state)) {
      const rate = rates[state];
      const result = rate(unitCount);
      Bills[state] = result.bill;
    }
  }

  res.json({ Bills });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
