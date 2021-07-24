import React from "react";
import Plot from "react-plotly.js";
import aggregateStock from "../data/aggregated_stock_exchange";

interface ILineChartState {
  data: any;
  layout: object;
  frames: any;
  config: object;
}

interface ILineChartProps {}

class LineChart extends React.Component<ILineChartProps, ILineChartState> {
  constructor(props: ILineChartProps) {
    super(props);
    this.state = {
      data: [],
      layout: { width: 1370, height: 685, title: "Stock Information" },
      frames: [],
      config: {
        scrollZoom: true,
        displayModeBar: true,
        responsive: true,
        displaylogo: false,
      },
    };
  }

  componentDidMount() {
    const dates: string[] = [];
    const totalRevs: number[] = [];

    aggregateStock.forEach((item) => {
      dates.push(item.date);
      totalRevs.push(item.total_rev);
    });
    const data = {
      x: dates,
      y: totalRevs,
      type: "scatter",
      mode: "lines+markers",
      marker: { color: "red" },
    };
    this.setState({ data: [data] });
  }

  render() {
    const { data, layout, frames, config } = this.state;
    return (
      <Plot
        data={data}
        layout={layout}
        frames={frames}
        config={config}
        onInitialized={(figure) => this.setState(figure)}
        onUpdate={(figure) => this.setState(figure)}
      />
    );
  }
}

export default LineChart;
