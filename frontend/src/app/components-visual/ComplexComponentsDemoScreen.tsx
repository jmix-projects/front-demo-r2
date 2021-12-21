import React from "react";
import {registerScreen} from "@haulmont/jmix-react-web";
import {Card, Form, Space} from "antd";
import {DateField, EntityFilter, EntityForm, EntityPickerField, TextField} from "@haulmont/jmix-react-antd";
import {useForm} from "antd/es/form/Form";

const ROUTING_PATH = "/complexComponentsDemoScreen";

const ComplexComponentsDemoScreen = () => {
  const [form] = useForm();

  return (
    <Space direction={"vertical"} style={{width: "100%"}}>
      <Card title="EntityFilter">
        <EntityFilter entityName="Event"/>
      </Card>
      <Card title="EntityPickerField">
        <Form form={form}>
          <EntityPickerField
            entityName="Order_"
            propertyName="customer"
          />
        </Form>
      </Card>
      <Card title="EntityForm">
        <EntityForm entityName="Event">
          <TextField propertyName="title"/>
          <DateField  propertyName="startDate"/>
          <DateField propertyName="endDate" showTime/>
        </EntityForm>
      </Card>
    </Space>
  )
};

registerScreen({
  component: ComplexComponentsDemoScreen,
  caption: "screen.ComplexComponentsDemoScreen",
  screenId: "ComplexComponentsDemoScreen",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});

export default ComplexComponentsDemoScreen;
