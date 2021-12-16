import {gql, useQuery} from "@apollo/client";
import {registerScreen} from "@haulmont/jmix-react-web";
import {LineChart, SmoothedLineChart, StackedLineChart} from "@haulmont/jmix-addon-charts";

const ROUTING_PATH = "/lineChartScreen";

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


const LineChartScreen = () => {

  const { loading, data } = useQuery(
    DATATYPESTESTENTITY_LIST,
    { variables: { language: "english" } }
  );

  if (loading) return <p>Loading ...</p>

  return <div>
    Line Chart
    <div>
      <LineChart id='line-chart-id'
                 data={data.DatatypesTestEntityList}
                 xKey='name'
                 yKey='bigDecimalAttr'/>
    </div>

    Smoothed Line Chart
    <div>
      <SmoothedLineChart id='smooth-line-chart-id'
                         data={data.DatatypesTestEntityList}
                         xKey='name'
                         yKey='bigDecimalAttr'/>
    </div>

    Stacked Line Chart
    <div>
      <StackedLineChart id='stacked-line-chart-id'
                        data={data.DatatypesTestEntityList}
                        xKey='name'
                        yKey='bigDecimalAttr'/>
    </div>
  </div>;
}

registerScreen({
  component: LineChartScreen,
  caption: "screen.LineChartScreen",
  screenId: "LineChartScreen",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});

export default LineChartScreen;

