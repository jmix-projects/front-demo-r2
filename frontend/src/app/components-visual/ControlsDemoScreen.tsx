import React from "react";
import {registerScreen} from "@haulmont/jmix-react-web";
import {Card, Form, Space} from "antd";
import {
  SelectField,
  TextField,
  TextArea,
  DateField,
  TimeField,
  CheckboxField,
  RadioButton,
  Button,
  SliderField,
  ColorPickerField
} from "@haulmont/jmix-react-antd";
import {useForm} from "antd/es/form/Form";

const ROUTING_PATH = "/controlsDemoScreen";

const ControlsDemoScreen = () => {


  const [form] = useForm();

  return (
    <Form form={form}>
      <Space direction={"vertical"} style={{width: "100%"}}>
        <Card title="TextField">
          <TextField entityName={"Customer"} propertyName={"email"}/>
        </Card>
        <Card title="SelectField">
          <SelectField entityName={"OrderLine"}
                       propertyName={"quantity"}
                       options={[
                         {label: "1", value: "1"},
                         {label: "5", value: "5"},
                         {label: "10", value: "10"},
                         {label: "100", value: "100"}
                       ]}
          />
        </Card>
        <Card title="TextArea">
          <TextArea entityName={"Event"} propertyName={"description"} rows={5}/>
        </Card>
        <Card title="DateField">
          <DateField entityName={"DatatypesTestEntity"} propertyName={"dateAttr"}/>
        </Card>
        <Card title="TimeField">
          <TimeField entityName={"DatatypesTestEntity"} propertyName={"timeAttr"}/>
        </Card>
        <Card title="CheckboxField">
          <CheckboxField entityName={"DatatypesTestEntity"} propertyName={"booleanAttr"}/>
        </Card>
        <Card title="RadioButton">
          <RadioButton entityName={"OrderLine"}
                       propertyName={"quantity"}
                       options={[
                         {label: "1", value: "1"},
                         {label: "5", value: "5"},
                         {label: "10", value: "10", disabled: true}
                       ]}/>
        </Card>
        <Card title="Button">
          <Button type="primary" htmlType="button">Button text</Button>
        </Card>
        <Card title="SliderField">
          <SliderField entityName={"OrderLine"}
                       propertyName={"quantity"}
                       max={100}
          />
        </Card>
        <Card title="ColorPickerField">
          <ColorPickerField  entityName={"Event"} propertyName={"displayColor"}/>
        </Card>
      </Space>
    </Form>
  );
};

registerScreen({
  component: ControlsDemoScreen,
  caption: "screen.ControlsDemoScreen",
  screenId: "ControlsDemoScreen",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});

export default ControlsDemoScreen;
