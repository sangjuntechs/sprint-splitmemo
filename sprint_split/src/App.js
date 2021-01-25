import React from 'react'
import CardInfo from './components/CardInfo';
import FoodInfo from './components/FoodInfo';
import UserMemo from './components/Usermemo'

function App() {
  return (
    <>
    <div style={{display:'flex'}}>
      <CardInfo/>
      <UserMemo/>
    </div>
    <FoodInfo/>
    </>
  );
}

export default App;
