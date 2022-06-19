import { useState, useEffect } from "react";
import Coin from "./Coin";

function App() {

  const [backendData, setBackendData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  let coinElements;
  
 
  useEffect(() => {
    fetch("http://localhost:5000/").then(
      response => response.json()
      ).then(
        data => {
          setBackendData(data)
          setLoaded(true)
        }
      )
  }, [] )


  if (loaded) {

    coinElements = backendData.map(coin => 
      <Coin 
        key = {coin["name"]}
        name = {coin["name"]}
        price ={coin["price"]}
        volume ={coin["volume"]}
        change ={coin["change"]}
      />)

  }

  

  return (
  <div>
    <h1>Cryptocurrecy Realtime Price</h1>
   <div className="container">
   {coinElements}
   </div>
  </div> 
  );
}

export default App;
