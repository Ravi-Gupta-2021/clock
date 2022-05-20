import React, {useState } from 'react';
import './App.css';

const App = () => {
  
  const d = new Date();

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let month = months[d.getMonth()];

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  let day = days[d.getDay()];

  let date = d.getDate();
  let year = d.getFullYear();

  let time = new Date().toLocaleTimeString();
  const [ctime,setCtime] = useState(time);
  
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(UpdateTime,1000);

  return(
    <div className='App-header'>
      <h1>{date}&ensp;{month}&ensp;{year}</h1>
      <h1>{day}</h1>
      <h1>{ctime}</h1>
    </div>
  )
}

export default App;
