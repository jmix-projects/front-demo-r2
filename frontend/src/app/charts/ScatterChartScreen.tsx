import { gql, useQuery } from "@apollo/client";
import { registerScreen } from "@haulmont/jmix-react-web";

import {ScatterChart} from "@haulmont/jmix-addon-charts";
import {DatatypesTestEntity} from "../../jmix/entities/DatatypesTestEntity";

const SCATTER_ROUTING_PATH = "/scatterChartScreen";

const DATATYPESTESTENTITY_LIST = gql`
  query DatatypesTestEntityList {
    DatatypesTestEntityList {
      id
      _instanceName
      bigDecimalAttr
      booleanAttr
      dateAttr
      dateTimeAttr
      doubleAttr
      enumAttr
      integerAttr
      localDateAttr
      localDateTimeAttr
      localTimeAttr
      longAttr
      name
      offsetDateTimeAttr
      offsetTimeAttr
      stringAttr
      timeAttr
      uuidAttr
    }
  }
`;

const ScatterChartScreen = () => {

  const { loading, data } = useQuery<{DatatypesTestEntityList: DatatypesTestEntity[]}>(
    DATATYPESTESTENTITY_LIST,
    { variables: { language: "english" } }
  );

  if (loading) return <p>Loading ...</p>

  // map x axis to array index
  const chartData = data === undefined
    ? [] :
    data.DatatypesTestEntityList
      .map((item, index) => ({x: index, bigDecimalAttr: item.bigDecimalAttr}));

  return <div>
    Scatter Chart
    <ScatterChart
      id={'scatter-chart-id'}
      data={chartData}
      xKey='x'
      yKey='bigDecimalAttr'
    />
  </div>;
}


registerScreen({
  component: ScatterChartScreen,
  caption: "screen.ScatterChartScreen",
  screenId: "ScatterChartScreen",
  menuOptions: {
    pathPattern: SCATTER_ROUTING_PATH,
    menuLink: SCATTER_ROUTING_PATH
  }
});

export default ScatterChartScreen;

