import React from 'react'
import GoBack from './GoBack';

function Compare() {
  return (
    <div className="form-box">
        <h3>Compare Prices in different States </h3>
        <p> Enter the number of units consumed to comapre prices in all the states.</p>
        <form>
          <label>
            Consumed Units:
            <input
              autoComplete="off"
              type="number"
              name="units"
            />
          </label>
          <button className="submitStyle" type="submit">Calculate</button>
        </form>
      </div>
  )
}

export default Compare