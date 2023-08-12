import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CryptoRanking = () => {
  const [cryptoRanking, setCryptoRanking] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 250,
          page: 1,
        },
      })
      .then(response => {
        setCryptoRanking(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter o ranking das criptomoedas:', error);
      });
  }, []);

  return (
    <div className="CryptoRanking">
      <h2>Top 250 Criptomoedas</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Nome</th>
            <th>Symbol</th>
            <th>24h Change</th>
            <th>Preço (USD)</th>
            <th>All-Time High</th>
            <th>Capitalização de Mercado (USD)</th>
            <th>Volume (24h)</th>
          </tr>
        </thead>
        <tbody>
          {cryptoRanking.map(crypto => (
            <tr key={crypto.id}>
              <td>{crypto.market_cap_rank}</td>
              <td>{crypto.name}</td>
              <td>{crypto.symbol}</td>
              <td>{crypto.price_change_percentage_24h ? crypto.price_change_percentage_24h.toFixed(2) : 'N/A'}%</td>
              <td>${crypto.current_price ? crypto.current_price.toFixed(2) : 'N/A'}</td>
              <td>${crypto.ath ? crypto.ath.toLocaleString() : 'N/A'}</td>
              <td>${crypto.market_cap ? crypto.market_cap.toLocaleString() : 'N/A'}</td>
              <td>${crypto.total_volume ? crypto.total_volume.toLocaleString() : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoRanking;
