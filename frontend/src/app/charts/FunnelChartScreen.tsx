import {gql, useQuery} from "@apollo/client";
import {registerScreen} from "@haulmont/jmix-react-web";
import {FunnelChart} from "@haulmont/jmix-addon-charts";


const ROUTING_PATH = "/funnelChartScreen";

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


const FunnelChartScreen = () => {

  const { loading, data } = useQuery(
    DATATYPESTESTENTITY_LIST,
    { variables: { language: "english" } }
  );

  if (loading) return <p>Loading ...</p>

  const sortedData = [...data.DatatypesTestEntityList].sort((item1, item2) => item2.bigDecimalAttr - item1.bigDecimalAttr);

  return <div>
    Funnel Chart
    <div>
      <FunnelChart
        idKey={'name'}
        valueKey={'bigDecimalAttr'}
        data={sortedData}
      />
    </div>
  </div>;
}

registerScreen({
  component: FunnelChartScreen,
  caption: "screen.FunnelChartScreen",
  screenId: "FunnelChartScreen",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});

export default FunnelChartScreen;

