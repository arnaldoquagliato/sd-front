// import React, { useEffect, useState } from 'react';
// import socketIOClient from 'socket.io-client';
// import {io}  from "socket.io-client";

// const App = () => {
//   const [data, setData] = useState('');

//   useEffect(() => {
//     const socket = io('http://localhost:3005', {
//         cors: {
//             origin: "*",
//         }
//     });

//     socket.on('connect', () => {
//       console.log('Conectado ao servidor Socket.IO');
//     });

//     socket.on("reconnect_error", (error) => {
//       console.log(error)
//     })
//     socket.on('disconnect', () => {
//       console.log('Desconectado do servidor Socket.IO');
//     });

//     socket.on('data', (receivedData) => {
//       // console.log(receivedData)
//       setData(receivedData);
//     });

//     return () => {
//       socket.disconnect(); // Desconectar do servidor quando o componente for desmontado
//     };
//   }, []);

//   return (
//     <div className="App">
//       <h2>Socket.IO Data Receiver</h2>
//       <p>Received data: {data}</p>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import DataDisplay from './data';

class App extends React.Component {
  render() {
    const data = {
      'Air Humidity': {
        'Minimum': 10,
        'Maximum': 50,
        'Average': 30,
        'Array': [15, 20, 25],
      },
      'Temperature': {
        'Minimum': 15,
        'Maximum': 35,
        'Average': 25,
        'Array': [18, 22, 28],
      },
      'Soil Moisture': {
        'Minimum': 20,
        'Maximum': 60,
        'Average': 40,
        'Array': [25, 30, 35],
      },
      'Water Flow': {
        'Minimum': 5,
        'Maximum': 15,
        'Average': 10,
        'Array': [7, 9, 12],
      },
    };

    return (
      <div>
        <h1>Data Display</h1>
        <DataDisplay data={data} />
      </div>
    );
  }
}

export default App;
