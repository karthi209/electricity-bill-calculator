import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({selectedState: "", units: ""});

  const [result, setResult] = useState(null);

  const [store, setStore] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.selectedState != "None" && formData.units.trim() !== "") {

      const response = await fetch(
        "https://electricitybillcalculator.in/.netlify/functions/api/calculate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
  
      const data = await response.json();
      data.bill = parseFloat(data.bill);
      
      setResult(data);

      setStore(false);

    }

    else {
      setStore(true);
    }

  };

  const goBack = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="form-box">
        <h4>electricity bill calculator</h4>
        { !result &&
        <form className="formStyle" onSubmit={handleSubmit} result>
          <label className="stateStyle">
            State:
            <select className="fieldStyle" name="selectedState" value={formData.selectedState} onChange={handleChange}>
              <option value="None" >Select the State</option>
              {[
                "Tamil Nadu","Telangana"
              ].map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </label>
          <label>
            Consumed Units:
            <input
              className="fieldStyle-1"
              autoComplete="off"
              type="number"
              name="units"
              value={formData.units}
              onChange={handleChange}
            />
          </label>
          {store && <p style={{ color: 'Red', fontSize: '18px' }}>Invalid Input!</p>}
          <p>Note: Fixed charges are calculated assuming the billing is Bi-Monthly</p>
          <input className="submitStyle" type="submit" value="Calculate" />
        </form>
        }
        {result && (
          <div className="result">
            <h5>Total Billable Amount: <span className="bill-amount">₹ {(Math.round(result.bill)).toLocaleString()}</span></h5>
            <h5>Break up of the bill </h5>
            <table style={{ border: 'none' }} className="tableStyle">
              <thead>
                <tr>
                  <th scope="col" className="roundCorner1">From Unit</th>
                  <th scope="col" className="bcFix">To Unit</th>
                  <th scope="col" className="bcFix">Units (1 kWh)</th>
                  <th scope="col" className="bcFix">Rate (in ₹)</th>
                  <th scope="col" className="roundCorner2">Amount (in ₹)</th>
                </tr>
              </thead>
              <tbody>
              {result.breakdown.map((item, index) => (
                <tr key={index}>
                  <td>{item.fromUnit}</td>
                  <td>{item.toUnit}</td>
                  <td>{item.units}</td>
                  <td>{item.rate}</td>
                  <td>{Math.round(item.cost)}</td>
                </tr>
              ))}
            </tbody>
            <tbody>
              {result.customerCharge.map((item, index) => (
                <tr key={index}>
                  <td style={{ border: 'none' }}></td>
                  <td style={{ border: 'none' }}></td>
                  <td style={{ border: 'none' }}></td>
                  <td>{item.addCharges}</td>
                  <td>{Math.round(item.cost)}</td>
                </tr>
              ))}
            </tbody>
            <tbody>
              <tr>
                <td style={{ border: 'none' }}></td>
                <td style={{ border: 'none' }}></td>
                <td style={{ border: 'none' }}></td>
                <td className="roundCorner3"><strong>Total Bill</strong></td>
                <td className="roundCorner4"><strong>₹ {(Math.round(result.bill)).toLocaleString()}</strong></td>
              </tr>
            </tbody>
            </table>
            <button type="button" className="submitStyle" onClick={goBack}>Go Back</button>
            <p className="marginGap">{`${result.sourceText}`}</p>
            <p>{`${result.lastUpdateText}`}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
