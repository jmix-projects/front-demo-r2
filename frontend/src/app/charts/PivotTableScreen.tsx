import React from "react";
import {registerScreen} from "@haulmont/jmix-react-web";
import {EntityPivotTable} from "@haulmont/jmix-addon-charts";
import {DatatypesTestEntity} from "../../jmix/entities/DatatypesTestEntity";
import {gql, useQuery} from "@apollo/client";
import {BarDatum} from "@nivo/bar";

const ROUTING_PATH = "/pivotTableScreen";

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
const PivotTableScreen = () => {

  const { loading, data } = useQuery<{DatatypesTestEntityList: DatatypesTestEntity[]}>(
    DATATYPESTESTENTITY_LIST,
    { variables: { language: "english" } }
  );

  if (loading) return <p>Loading ...</p>

  const chartData: DatatypesTestEntity[] = data === undefined ? [] : data.DatatypesTestEntityList;

return (
  <div>PivotTable
    <EntityPivotTable<DatatypesTestEntity>
      entities={chartData as BarDatum[]}
      fields={['doubleAttr', 'integerAttr', 'name', 'longAttr', 'booleanAttr', 'bigDecimalAttr']}
    />
  </div>
)
}

registerScreen({
  component: PivotTableScreen,
  caption: "screen.PivotTableScreen",
  screenId: "PivotTableScreen",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});

export default PivotTableScreen;
