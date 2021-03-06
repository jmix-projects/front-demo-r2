import React from "react";
import {Label, registerScreen} from "@haulmont/jmix-react-web";
import {Button, Card, Space, Tooltip, Typography} from "antd";
import {DataTable, EntityHierarchyTree, ProgressBar} from "@haulmont/jmix-react-antd";
import {Calendar} from "antd/es";
import Paragraph from "antd/es/typography/Paragraph";
import Link from "antd/lib/typography/Link";
import EventCalendar from "./calendar/EventCalendar";
import {ImageFieldDemo} from "./image/ImageFieldDemo";

const ROUTING_PATH = "/dataDisplayComponentsDemoScreen";
const DATA_TABLE_CODE = `<DataTable/>`;

const DataDisplayComponentsDemoScreen = () => (
  <Space direction={"vertical"} style={{width: "100%"}}>
    <Card title="Label">
      <Label entityName="Order_" propertyName="numberOfSpecialProducts">
      </Label>
    </Card>
    <Card title="Tree">
      <EntityHierarchyTree
        items={[
          {
            id: '1',
            _instanceName: 'Instance A',
            parent: undefined,
          },
          {
            id: '2',
            _instanceName: 'Instance B',
            parent: '1'
          },
          {
            id: ' 3',
            _instanceName: 'Instance C',
            parent: '2'
          }]}
        hierarchyProperty='parent'
      />
    </Card>
    <Card title={"DataTable"}>
      <Paragraph>
        <Typography.Text code>{DATA_TABLE_CODE}</Typography.Text>
      </Paragraph>
      <DataTable loading={false}
                 items={[{id: '1', name: "Test Instance"},]}
                 onFilterChange={() => {
                   alert("Filter Changed")
                 }}
                 onSortOrderChange={() => {
                   alert("Sort Order Changed")
                 }}
                 onPaginationChange={() => {
                   alert("Pagination Changed")
                 }}
                 entityName={"DatatypesTestEntity"}
                 columnDefinitions={[
                   "name",
                   "booleanAttr",
                 ]}/>
      <Link
        href={"https://github.com/jmix-projects/front-demo-r1/blob/main/frontend/src/app/datatypes/datatypes-test-entity/DatatypesTestEntityList.tsx#L168"}>Code
        Example</Link>
      <br/>
      <Link href={"/datatypesTestEntityList"}>Demo</Link>
    </Card>
    <Card title="Calendar">
      <EventCalendar/>
    </Card>
    <Card title="ProgressBar">
      <ProgressBar percent={50} />
    </Card>
    <Card title="ImagePreview">
      <ImageFieldDemo/>
    </Card>
    <Card title="Tooltip">
      <Tooltip title="Tooltip title">
        <Button>Hover me</Button>
      </Tooltip>
    </Card>
  </Space>
);

registerScreen({
  component: DataDisplayComponentsDemoScreen,
  caption: "screen.DataDisplayComponentsDemoScreen",
  screenId: "DataDisplayComponentsDemoScreen",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});

export default DataDisplayComponentsDemoScreen;
