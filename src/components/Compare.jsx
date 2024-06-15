import React, { useState, useEffect } from 'react';

function Compare() {
  const [unitsCompare, setUnitsCompare] = useState(() => {
    const savedUnits = localStorage.getItem("unitsCompare");
    return savedUnits ? JSON.parse(savedUnits) : "";
  });

  const [resultCompare, setResultCompare] = useState(() => {
    const savedResult = localStorage.getItem("resultCompare");
    return savedResult ? JSON.parse(savedResult) : null;
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const newUnits = e.target.value;
    setUnitsCompare(newUnits);
    localStorage.setItem("unitsCompare", JSON.stringify(newUnits));
  };

  const handleCompareSubmit = async (e) => {
    e.preventDefault();

    if (unitsCompare.trim() !== "") {
      setLoading(true);
      try {
        const response = await fetch(
          "http://localhost:9000/.netlify/functions/api/compare",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ units: unitsCompare }),
          }
        );

        const data = await response.json();
        setResultCompare(data.Bills);
        localStorage.setItem("resultCompare", JSON.stringify(data.Bills));
        setError(null);

      } catch (err) {
        console.error(err);
        setError("An error occurred while fetching the comparison.");
      } finally {
        setLoading(false);
      }
    } else {
      setError("Units field cannot be empty.");
    }
  };

  return (
    <div className="compareBox">
      <h3 className='itemCompare'>Compare Prices in Different States</h3>
      <p className='itemCompare'>Enter the number of units consumed to compare prices in all the states.</p>
      <form className='itemCompare' onSubmit={handleCompareSubmit}>
        <label>
          Consumed Units:
          <input
            autoComplete="off"
            type="number"
            name="unitsCompare"
            value={unitsCompare}
            onChange={handleChange}
          />
        </label>
        <button className="submitStyle" type="submit">Calculate</button>
      </form>
      {loading && <p>Loading...</p>}
      {resultCompare && (
        <div>
          <h4>Comparison Result:</h4>
          {Object.keys(resultCompare).map(state => (
            <div id="my-chart">
              <table class="charts-css bar">
                <caption> States Bar Chart </caption>
                <ul class="charts-css legend">
                  <tbody >
                    <tr>
                      {/* <td> {state} </td> */}
                      <td> <span class="data">{resultCompare[state]}</span></td>
                    </tr>
                  </tbody>
                </ul>
              </table>
            </div>
          ))}
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Compare;
