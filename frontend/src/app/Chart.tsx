import React from "react";
import { registerScreen } from "@haulmont/jmix-react-web";
import { Bar } from "@nivo/bar";

const ROUTING_PATH = "/chart";

const data = [
  {
    day: "Monday",
    degress: 59
  },
  {
    day: "Tuesday",
    degress: 61
  },
  {
    day: "Wednesday",
    degress: 55
  },
  {
    day: "Thursday",
    degress: 78
  },
  {
    day: "Friday",
    degress: 71
  },
  {
    day: "Saturday",
    degress: 56
  },
  {
    day: "Sunday",
    degress: 67
  }
];

const Chart = () => (
  <div>
    Chart
    <Bar
      width={600}
      height={400}
      data={data}
      keys={["degress"]}
      indexBy="day"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    />
  </div>
);

registerScreen({
  component: Chart,
  caption: "screen.Chart",
  screenId: "Chart",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});

export default Chart;
