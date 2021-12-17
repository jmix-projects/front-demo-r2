import { gql, useQuery } from "@apollo/client";
import {registerScreen} from "@haulmont/jmix-react-web";
import {RadialBarChart} from "@haulmont/jmix-addon-charts";


const ROUTING_PATH = "/radialBarChartScreen";

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


const RadialBarChartScreen = () => {

  const { loading, data } = useQuery(
    DATATYPESTESTENTITY_LIST,
    { variables: { language: "english" } }
  );

  if (loading) return <p>Loading ...</p>

  return <div>
    RadialBar Chart
    <div>
      <RadialBarChart id='rb-chart-id'
                 data={data.DatatypesTestEntityList}
                 xKey='name'
                 yKey='integerAttr'/>
    </div>
  </div>;
}

registerScreen({
  component: RadialBarChartScreen,
  caption: "screen.RadialBarChartScreen",
  screenId: "RadialBarChartScreen",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});

export default RadialBarChartScreen;

