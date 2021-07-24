import React, { FC, createContext, useEffect, useState } from "react";
import { parseCsvData } from "../utils/papaparseUtil";

export const StockContext = createContext({
  aggregateStockData: [],
  stockData: [],
});

interface IStockProviderProps {
  children: React.ReactNode;
}

const StockProvider: FC<IStockProviderProps> = ({ children }) => {
  const [aggregateData, setAggregateData] = useState([]);
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    parseCsvData("../data/aggregated_stock_exchange.csv", setAggregateData);
    parseCsvData("../data/stock_data.csv", setStockData);
  }, []);

  return (
    <StockContext.Provider
      value={{
        aggregateStockData: aggregateData,
        stockData: stockData,
      }}
    >
      {children}
    </StockContext.Provider>
  );
};

export default StockProvider;
