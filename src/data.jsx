import React from 'react';

class DataDisplay extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <h2>Air Humidity</h2>
        <p>Minimum: {data['Air Humidity'].Minimum}</p>
        <p>Maximum: {data['Air Humidity'].Maximum}</p>
        <p>Average: {data['Air Humidity'].Average}</p>
        <p>Array: {data['Air Humidity'].Array.join(', ')}</p>

        <h2>Temperature</h2>
        <p>Minimum: {data['Temperature'].Minimum}</p>
        <p>Maximum: {data['Temperature'].Maximum}</p>
        <p>Average: {data['Temperature'].Average}</p>
        <p>Array: {data['Temperature'].Array.join(', ')}</p>

        <h2>Soil Moisture</h2>
        <p>Minimum: {data['Soil Moisture'].Minimum}</p>
        <p>Maximum: {data['Soil Moisture'].Maximum}</p>
        <p>Average: {data['Soil Moisture'].Average}</p>
        <p>Array: {data['Soil Moisture'].Array.join(', ')}</p>

        <h2>Water Flow</h2>
        <p>Minimum: {data['Water Flow'].Minimum}</p>
        <p>Maximum: {data['Water Flow'].Maximum}</p>
        <p>Average: {data['Water Flow'].Average}</p>
        <p>Array: {data['Water Flow'].Array.join(', ')}</p>
      </div>
    );
  }
}

export default DataDisplay;
