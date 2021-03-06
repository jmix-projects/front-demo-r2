import { gql, useQuery } from "@apollo/client";
import { registerScreen } from "@haulmont/jmix-react-web";
import { RadarChart } from "@haulmont/jmix-addon-charts";
import {DatatypesTestEntity} from "../../jmix/entities/DatatypesTestEntity";


const ROUTING_PATH = "/radarChartScreen";

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


const RadarChartScreen = () => {

  const { loading, data } = useQuery<{DatatypesTestEntityList: DatatypesTestEntity[]}>(
    DATATYPESTESTENTITY_LIST,
    { variables: { language: "english" } }
  );

  if (loading) return <p>Loading ...</p>

  return <div>
    Radar Chart
    <RadarChart
      indexBy='name'
      keys={['bigDecimalAttr']}
      data={data === undefined ? [] : data.DatatypesTestEntityList}
    />
  </div>;
}


registerScreen({
  component: RadarChartScreen,
  caption: "screen.RadarChartScreen",
  screenId: "RadarChartScreen",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});

export default RadarChartScreen;

