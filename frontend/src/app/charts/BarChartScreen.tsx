import {gql, useQuery} from "@apollo/client";
import { registerScreen } from "@haulmont/jmix-react-web";
import { BarChart, ClusteredBarChart } from "@haulmont/jmix-addon-charts";

const ROUTING_PATH = "/barChartScreen";


const DATATYPESTESTENTITY_LIST = gql`
  query DatatypesTestEntityList(
    $limit: Int
    $offset: Int
    $orderBy: inp_DatatypesTestEntityOrderBy
    $filter: [inp_DatatypesTestEntityFilterCondition]
  ) {
    DatatypesTestEntityCount
    DatatypesTestEntityList(
      limit: $limit
      offset: $offset
      orderBy: $orderBy
      filter: $filter
    ) {
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

  const { loading, data } = useQuery(
    DATATYPESTESTENTITY_LIST,
    { variables: { language: "english" } }
  );

  if (loading) return <p>Loading ...</p>

  return <div>
    Bar Chart - Garage Capacity
    <div>
      <BarChart data={data.DatatypesTestEntityList}
                indexBy='name'
                keys={['bigDecimalAttr', 'integerAttr']}/>
    </div>

    Clustered Bar Chart - Garage Capacity
    <div>
      <ClusteredBarChart data={data.DatatypesTestEntityList}
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

