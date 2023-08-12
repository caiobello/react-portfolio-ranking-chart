import React from 'react';
import './App.css';

import { TradingChart } from "./components/ChartTradingView"

const App = () => {
  return (
    <div className="app-container"> {/* Apply a class to the outer div */}
       <TradingChart />
      <footer>
      </footer>
    </div>
  );
};


export default App;
