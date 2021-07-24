import React from "react";
import { AppBar, Box, Tabs, Tab, Typography } from "@material-ui/core";
import { StockContext } from "./contexts/stock-context";
import LineChart from "./components/lineChart";
import StockTable from "./components/stockTable";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function App() {
  const { aggregateStockData, stockData } = React.useContext(StockContext);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  console.log("aggregateStockData >>", aggregateStockData);
  console.log("stockData >>", stockData);

  return (
    <div className="App">
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Line Chart" />
          <Tab label="Stock Table" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <LineChart />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <StockTable />
      </TabPanel>
    </div>
  );
}

export default App;
