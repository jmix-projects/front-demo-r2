import React from "react";
import {gql, useQuery} from "@apollo/client";
import { PieChart, DonutChart } from "@haulmont/jmix-addon-charts";
import { registerScreen } from "@haulmont/jmix-react-web";
import {DatatypesTestEntity} from "../../jmix/entities/DatatypesTestEntity";

const ROUTING_PATH = "/pieChartScreen";

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


const PieChartScreen = () => {

  const { loading, data } = useQuery<{DatatypesTestEntityList: DatatypesTestEntity[]}>(
    DATATYPESTESTENTITY_LIST,
    { variables: { language: "english" } }
  );

  if (loading) return <p>Loading ...</p>


  return <div>
    Pie Chart
    <div>
      <PieChart
        idKey='name'
        labelKey='name'
        valueKey='bigDecimalAttr'
        data={data === undefined ? [] : data.DatatypesTestEntityList}
      />
    </div>

    Donut Chart
    <div>
      <DonutChart
        idKey='name'
        labelKey='name'
        valueKey='bigDecimalAttr'
        data={data === undefined ? [] : data.DatatypesTestEntityList}
      />
    </div>

  </div>;
}

registerScreen({
  component: PieChartScreen,
  caption: "screen.PieChartScreen",
  screenId: "PieChartScreen",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});



export default PieChartScreen;

