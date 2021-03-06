import React from "react";
import {EntityProperty, registerScreen} from "@haulmont/jmix-react-web";
import {Card, Form, Space, Typography} from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import {useForm} from "antd/es/form/Form";
import {Field,} from "@haulmont/jmix-react-antd";

const FIELD_CODE = `<Field/>`;
const FORM_CODE = `<Form/>`;

const ENTITY_PROPERTY_CODE = `<EntityProperty/>`;

export const VisualComponentsDemoScreen = () => {
  const [form] = useForm();

  return (
    <Space direction={"vertical"} style={{width: "100%"}}>
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
