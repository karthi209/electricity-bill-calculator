import React from 'react'
import "./css/Home.css";
import GoBack from './GoBack';

const resultsPage = ( {result, setResult}) => {
  return (
    <div className="result">
    <h4 style={{ fontSize: '28px' }} >electricity bill calculator</h4>
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
    <button type="button" className="submitStyle" onClick={() => GoBack(setResult)}>Go Back</button>
    <p className="marginGap">{`${result.sourceText}`}</p>
    <p>{`${result.lastUpdateText}`}</p>
  </div>
  )
}

export default resultsPage;