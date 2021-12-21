import React from "react";
import {registerScreen} from "@haulmont/jmix-react-web";
import {Card, Form, Pagination, Space} from "antd";
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
  ColorPickerField,
  DropdownField,
  FileUploadField,
  MaskedField,
  SourceCodeField,
  RichTextArea
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
          <SelectField entityName={"Event"}
                       propertyName={"firstSetting"}
                       options={[
                         {label: "Alpha", value: "1"},
                         {label: "Beta", value: "5"},
                         {label: "Gamma", value: "10"},
                         {label: "Kappa", value: "100"}
                       ]}
          />
        </Card>
        <Card title="DropdownField">
          <DropdownField entityName={"Event"}
                         propertyName={"secondSetting"}
                         options={[
                           {label: "Up", value: "Up"},
                           {label: "Down", value: "Down"},
                           {label: "Right", value: "Right"},
                           {label: "Left", value: "Left"}
                         ]}/>
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
          <RadioButton entityName={"Event"}
                       propertyName={"thirdSetting"}
                       options={[
                         {label: "North", value: "North"},
                         {label: "South", value: "South"},
                         {label: "West", value: "West", disabled: true},
                         {label: "East", value: "East"}
                       ]}/>
        </Card>
        <Card title="Button">
          <Button type="primary" htmlType="button">Button text</Button>
        </Card>
        <Card title="SliderField">
          <SliderField entityName={"DatatypesTestEntity"}
                       propertyName={"integerAttr"}
                       max={100}
          />
        </Card>
        <Card title="ColorPickerField">
          <ColorPickerField entityName={"Event"} propertyName={"displayColor"}/>
        </Card>
        <Card title="FileUploadField">
          <FileUploadField entityName={"Event"} propertyName={"logo"}/>
        </Card>
        <Card title="MaskedField">
          <MaskedField entityName={"Event"}
                       propertyName={"externalId"}
                       mask={"xxxx-xxxx xx"}
                       formatChars={{
                         'x': '[0-9a-fA-F]'
                       }}/>
        </Card>
        <Card title="Pagination">
          <Pagination total={100} defaultPageSize={10}/>
        </Card>
        <Card title="SourceCodeField">
          <SourceCodeField entityName={"Event"}
                           propertyName={"widgetSourceCode"}
                           height={"100px"}/>
        </Card>
        <Card title="RichTextArea">
          <RichTextArea entityName={"Event"} propertyName={"formattedDescription"}/>
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
