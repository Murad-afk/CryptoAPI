import React, { useEffect, useState } from "react";

const Coin = ({
  name,
  symbol,
  icon,
  priceChangeOne,
  price,
  volume,
  marketCap,
  rank
}) => {
  return (
    <tr className="Coin">
      <td className="coin-img">
        {" "}
        <h1>{rank}.</h1>
        <img src={icon} className="icon" />
        <h1> {name}</h1>
      </td>

      <td>{symbol}</td>
      <td>${price.toFixed(2)}</td>
      <td>${(Math.round(volume * 100) / 100).toFixed(2)}</td>
      {priceChangeOne >= 0 ? (
        <td className="priceChangeOne green">{priceChangeOne}%</td>
      ) : (
        <td className="priceChangeOne red">{priceChangeOne}%</td>
      )}

      <td> Mkt Cap. ${marketCap.toFixed(2)}</td>
    </tr>
  );
};

export default Coin;
