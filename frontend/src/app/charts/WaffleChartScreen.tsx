import { gql, useQuery } from "@apollo/client";
import {registerScreen} from "@haulmont/jmix-react-web";
import {WaffleChart, HorizontalWaffleChart} from "@haulmont/jmix-addon-charts";

const ROUTING_PATH = "/waffleChartScreen";

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

const WaffleChartScreen = () => {

  const { loading, data } = useQuery(
    DATATYPESTESTENTITY_LIST,
    { variables: { language: "english" } }
  );

  if (loading) return <p>Loading ...</p>

  return <div>
    Waffle Chart
    <div>
      <WaffleChart
        total={500}
        rows={18}
        columns={14}
        data={data.DatatypesTestEntityList}
        idKey='name'
        labelKey='bigDecimalAttr'
        valueKey='bigDecimalAttr'
      />
    </div>

    Horizontal Waffle Chart
    <div>
      <HorizontalWaffleChart
        total={500}
        rows={18}
        columns={14}
        data={data.DatatypesTestEntityList}
        idKey='name'
        labelKey='bigDecimalAttr'
        valueKey='bigDecimalAttr'
      />
    </div>


  </div>;
}

registerScreen({
  component: WaffleChartScreen,
  caption: "screen.WaffleChartScreen",
  screenId: "WaffleChartScreen",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});

export default WaffleChartScreen;

