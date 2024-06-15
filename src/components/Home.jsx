import { useState } from "react";
import "./css/Home.css";
import ResultsPage from "./Results";

function App() {
  const [formData, setFormData] = useState(() => {
    const savedFormData = localStorage.getItem("formData");
    return savedFormData ? JSON.parse(savedFormData) : { selectedState: "", units: "" };
  });

  const [result, setResult] = useState(() => {
    const savedResult = localStorage.getItem("result");
    return savedResult ? JSON.parse(savedResult) : null;
  });

  const [store, setStore] = useState(false);

  const handleChange = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
    localStorage.setItem("formData", JSON.stringify(newFormData));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.selectedState != "None" && formData.units.trim() !== "") {

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
      data.bill = parseFloat(data.bill);
      setResult(data);
      localStorage.setItem("result", JSON.stringify(data));
      setStore(false);
    }
    else {
      setStore(true);
    }

  };

  const goBack = () => {
    setResult(null);
    localStorage.removeItem("result");
  };

  return (
    <>
      <div className="form-box">
        { !result ? (
          <div>
            <h4>electricity bill calculator</h4>
            <form className="formStyle" onSubmit={handleSubmit}>
              <label className="stateStyle">
                State:
                <select className="fieldStyle" name="selectedState" value={formData.selectedState} onChange={handleChange}>
                  <option value="None" >Select State</option>
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
              <button className="submitStyle" type="submit">Calculate</button>
            </form>
          </div>
          ) : (<ResultsPage result={result} setResult={setResult} />  
          )}
      </div>
    </>
  );
}

export default App;
