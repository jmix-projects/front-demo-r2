import React from "react";
import {EntityProperty, Label, registerScreen} from "@haulmont/jmix-react-web";
import {Card, Form, Space, Typography} from "antd";
import Link from "antd/lib/typography/Link";
import Paragraph from "antd/es/typography/Paragraph";
import {useForm} from "antd/es/form/Form";
import {
  Card as JmixCard,
  Col,
  DataTable,
  EntityHierarchyTree,
  Field,
  Footer,
  Header,
  MultiTabs,
  Row,
  Sidebar,
} from "@haulmont/jmix-react-antd";
import styles from './style.module.css'

const FIELD_CODE = `<Field/>`;
const FORM_CODE = `<Form/>`;
const DATA_TABLE_CODE = `<DataTable/>`;
const ENTITY_PROPERTY_CODE = `<EntityProperty/>`;

export const VisualComponentsDemoScreen = () => {
  const [form] = useForm();

  return (
    <Space direction={"vertical"} style={{width: "100%"}}>
      <Card title={"Grid"}>
        <Row>
          <Col span={8} className={styles.colBg}>Col-8</Col>
          <Col span={8} className={styles.colBg}>Col-8</Col>
          <Col span={8} className={styles.colBg}>Col-8</Col>
        </Row>
        <Row>
          <Col span={3}>Col-3</Col>
          <Col span={18}>Col-18</Col>
          <Col span={3}>Col-3</Col>
        </Row>
      </Card>
      <Card title="Header">
        <Header>
          <Typography.Title level={3} style={{color: '#FFF', padding: '15px 0'}}>
            Header content
          </Typography.Title>
        </Header>
      </Card>
      <Card title="Footer">
        <Footer>Footer content</Footer>
      </Card>
      <Card title="Sidebar">
        <Sidebar style={{minHeight: "100px"}}>
        </Sidebar>
      </Card>
      {/*<Card title="MultiTabs">*/}
      {/*  <MultiTabs/> { /* todo extract for demonstration *!/*/}
      {/*</Card>*/}
      <Card title="Card">
        <JmixCard title={"Card Title"}>
          <p>Card content</p>
        </JmixCard>
      </Card>
      <Card title="Label">
        <Label entityName="Order_" propertyName="numberOfSpecialProducts">
        </Label>
      </Card>
      <Card>
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
      <Card title={"Field"}>
        <Paragraph>
          <Typography.Text code>{FIELD_CODE}</Typography.Text> - Renders UI component for given entity attribute,
          depending on attribute data type.
          Provides data binding when used with <Typography.Text code>{FORM_CODE}</Typography.Text>
        </Paragraph>
        <Form
          layout="vertical"
          form={form}
        >
          <Field
            entityName={"DatatypesTestEntity"}
            propertyName="stringAttr"
          />
          <Field
            entityName={"DatatypesTestEntity"}
            propertyName="booleanAttr"
          />
          <Field
            entityName={"DatatypesTestEntity"}
            propertyName="dateAttr"
          />
          <Field
            entityName={"DatatypesTestEntity"}
            propertyName="dateTimeAttr"
          />
          <Field
            entityName={"DatatypesTestEntity"}
            propertyName="uuidAttr"
          />
          <Field
            entityName={"DatatypesTestEntity"}
            propertyName="enumAttr"
          />
          <Field
            entityName={"DatatypesTestEntity"}
            propertyName="integerAttr"
          />
        </Form>
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

      <Card title={"EntityProperty"}>
        <Paragraph>
          <Typography.Text code>{ENTITY_PROPERTY_CODE}</Typography.Text> - component is used to display a value of an
          entity property. It automatically applies formatting according to the type of the property and adds a
          corresponding label from global message pack (defined on the backend)
        </Paragraph>
        <EntityProperty
          entityName={"DatatypesTestEntity"}
          propertyName={"localDateTimeAttr"}
          value={"2021-06-10 17:45:32"}
        />
      </Card>
    </Space>
  );
}

registerScreen({
  screenId: "VisualComponentsDemo",
  component: VisualComponentsDemoScreen,
  caption: "Visual Components Demo",
  menuOptions: {
    menuLink: "/visual-components",
    pathPattern: "/visual-components"
  }
})
