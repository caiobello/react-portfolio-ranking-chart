import React from "react";
import { AdvancedChart } from "react-tradingview-embed";

const TradingChart = () => {
  return (
    <div>
      <h1>Trading Chart</h1>

      <AdvancedChart widgetProps={{

        "symbol": "BABYDOGEUSDT_BF7CD3",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "save_image": true,
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "withdateranges": true,
        "hide_legend": false,
        "hotlist": true,
        "calendar": true,
        "enable_publishing": false,
        "range": "YTD",
        "locale": "br",

        "watchlist": [
          "BINANCE:BTCUSDT",
          "CRYPTOCAP:TOTAL",
          "CRYPTOCAP:BTC.D",
          "CRYPTOCAP:TOTALDEFI",
          "BABYDOGEUSDT_BF7CD3",
          "BINANCE:ETHUSDT",
          "BINANCE:BNBUSDT",
          "BINANCE:USDCUSDT",
          "BINANCE:XRPUSDT",
          "BINANCE:LUNAUSDT",
          "BINANCE:ADAUSDT",
          "BINANCE:SOLUSDT",
          "BINANCE:AVAXUSDT",
          "BINANCE:DOGEUSDT",
          "BINANCE:DOTUSDT",
          "BINANCE:SHIBUSDT",
          "BINANCE:NEARUSDT",
          "BINANCE:ATOMUSDT",
          "BINANCE:BUSDUSDT",
          "BINANCE:GRTUSDT",
          "BINANCE:MATICUSDT",
          "BINANCE:RUNEUSDT",
          "BINANCE:FTMUSDT",
          "BINANCE:APEUSDT",
          "BINANCE:DYDXUSD",
          "BINANCE:UNIUSDT",
          "BINANCE:AVAXUSDT",
          "BINANCE:DOGEUSDT",
          "BINANCE:MATICUSDT",
          "BINANCE:SHIBUSDT",
          "BINANCE:NEARUSDT",
          "BINANCE:ATOMUSDT",
          "BINANCE:BUSDUSDT",
          "BINANCE:GRTUSDT",
          "BINANCE:MATICUSDT",
          "BINANCE:RUNEUSDT",
          "BINANCE:FTMUSDT",
          "BINANCE:APEUSDT",
          "BINANCE:TRXUSDT",
          "BINANCE:LTCUSDT",
          "BINANCE:XLMUSDT",
          "BINANCE:LINKUSDT",
          "BINANCE:BUSDUSDT",
          "BINANCE:VETUSDT",
          "BINANCE:ALGOUSDT",
          "BINANCE:MANAUSDT",
          "BINANCE:THETAUSDT",
          "BINANCE:AVAXUSDT",
          "BINANCE:DOGEUSDT",
          "BINANCE:MATICUSDT",
          "BINANCE:SHIBUSDT",
          "BINANCE:NEARUSDT",
          "BINANCE:ATOMUSDT",
          "BINANCE:BUSDUSDT",
          "BINANCE:GRTUSDT",
          "BINANCE:MATICUSDT",
          "BINANCE:RUNEUSDT",
          "BINANCE:FTMUSDT",
          "BINANCE:APEUSDT"
        ],
        "studies": [
          "STD;MA%1Cross"
        ],

      }} />


    </div>
  );
};

export { TradingChart };
