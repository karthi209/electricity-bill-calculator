import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({selectedState: "", units: ""});

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "http://localhost:9000/.netlify/functions/api/calculate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();
    setResult(data);

  };

  return (
    <>
      <div className="form-box">
        <h4>Electricity Bill Calculator</h4>
        <form className="formStyle" onSubmit={handleSubmit}>
          <label className="stateStyle">
            State:
            <select className="fieldStyle" name="selectedState" value={formData.selectedState} onChange={handleChange}>
              <option value="None">None</option>
              {[
                "Andhra Pradesh", "Arunachal Pradesh","Assam","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Kerala","Madhya Pradesh", "Maharashtra", "Manipur","Meghalaya","Nagaland","Odisha","Punjab","Rajasthan","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"
              ].map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </label>
          <label className="unitsStyle">
            Consumed Units:
            <input
              className="fieldStyle-1"
              autoComplete="off"
              type="text"
              name="units"
              value={formData.units}
              onChange={handleChange}
            />
          </label>
          <input className="submitStyle" type="submit" value="Calculate" />
        </form>
        {result && (
          <div className="result">
            <h5>Total Billabe Amount:</h5>
            <h2>{`Rs. ${Math.round(result.bill)}`}</h2>
            <h5>Break up of the bill </h5>
            <table>
              <thead>
                <tr>
                  <th scope="col">From Unit</th>
                  <th scope="col">To Unit</th>
                  <th scope="col">Units</th>
                  <th scope="col">Rate</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
              {result.breakdown.map((item, index) => (
                <tr key={index}>
                  <td>{item.fromUnit}</td>
                  <td>{item.toUnit}</td>
                  <td>{item.units}</td>
                  <td>{item.rate}</td>
                  <td>{item.cost}</td>
                </tr>
              ))}
            </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
