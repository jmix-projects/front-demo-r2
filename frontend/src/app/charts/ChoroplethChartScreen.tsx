import {registerScreen} from "@haulmont/jmix-react-web";
import {ChoroplethChart} from "@haulmont/jmix-addon-charts";
import {geoData} from "./data/geoData";
import geoFeatures from "./data/geoFeatures.json";

const ROUTING_PATH = "/choroplethChartScreen";

const ChoroplethChartScreen = () => {

  return <div>
    Choropleth Chart - test data
    <div>
      <ChoroplethChart
        data={geoData}
        features={geoFeatures.features}
        domain={[ 0, 1000000 ]}
      />
    </div>
  </div>;
}

registerScreen({
  component: ChoroplethChartScreen,
  caption: "screen.ChoroplethChartScreen",
  screenId: "ChoroplethChartScreen",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});

export default ChoroplethChartScreen;

