import {gql, useQuery} from "@apollo/client";
import { registerScreen } from "@haulmont/jmix-react-web";
import { BarChart, ClusteredBarChart } from "@haulmont/jmix-addon-charts";
import {DatatypesTestEntity} from "../../jmix/entities/DatatypesTestEntity";
import {BarDatum} from "@nivo/bar";

const ROUTING_PATH = "/barChartScreen";

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

const BarChartScreen = () => {

  const { loading, data } = useQuery<{DatatypesTestEntityList: DatatypesTestEntity[]}>(
    DATATYPESTESTENTITY_LIST,
    { variables: { language: "english" } }
  );

  if (loading) return <p>Loading ...</p>

  const chartData: DatatypesTestEntity[] = data === undefined ? [] : data.DatatypesTestEntityList;

  return <div>
    Bar Chart
    <div>
      <BarChart data={chartData as BarDatum[]}
                indexBy='name'
                keys={['bigDecimalAttr', 'integerAttr']}/>
    </div>

    Clustered Bar Chart
    <div>
      <ClusteredBarChart data={chartData as BarDatum[]}
                         indexBy='name'
                         keys={['bigDecimalAttr', 'integerAttr']}/>
    </div>
  </div>;
}

registerScreen({
  component: BarChartScreen,
  caption: "screen.BarChartScreen",
  screenId: "BarChartScreen",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});

export default BarChartScreen;

