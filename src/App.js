import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import axios from "axios";
import Coin from "./components/Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const[search, setSearch] = useState('');
  useEffect(() => {
    axios
      .get("https://api.coinstats.app/public/v1/coins?skip=0")
      .then((response) => setCoins(response.data.coins));
  }, []);

  return (
    <div className="App">
      <div className="header">
        {" "}
        <Search search={search} setSearch={setSearch}/>
      </div>
      <table>
        <tr>
          <th>Rank Name</th>
          <th>Symbol</th>
          <th>Price</th>
          <th>Volume</th>
          <th>%1Day</th>
          <th>MarketCap</th>
        </tr>
        {coins.filter(crypto=> crypto.name.toLowerCase().includes(search.toLocaleLowerCase())).map((coin, key) => {
          return (
            <Coin
              key={key}
              rank={coin.rank}
              name={coin.name}
              volume={coin.volume}
              symbol={coin.symbol}
              price={coin.price}
              marketCap={coin.marketCap}
              priceChangeOne={coin.priceChange1d}
              icon={coin.icon}
            />
          );
        })}
      </table>
    </div>
  );
}

export default App;
