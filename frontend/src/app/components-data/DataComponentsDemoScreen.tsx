import React from "react";
import {UseEntityListDataDemo} from "./UseEntityListDataDemo";
import {Card, Space} from "antd";
import Text from "antd/es/typography/Text";
import {UseEntityEditorDataDemo} from "./UseEntityEditorDataDemo";
import {registerScreen} from "@haulmont/jmix-react-web";

export const DataComponentsDemoScreen = () => {
  return (
    <Space direction={"vertical"} style={{width: "100%"}}>
      <Card title={
        <>
          <Text code={true}>useEntityListData()</Text> demo
        </>
      }>
        <UseEntityListDataDemo/>
      </Card>
      <Card title={
        <>
          <Text code={true}>useEntityEditorData()</Text> demo
        </>
      }>
        <UseEntityEditorDataDemo/>
      </Card>
    </Space>
  )
};

registerScreen({
  screenId: "DataComponentsDemo",
  component: DataComponentsDemoScreen,
  caption: "Data Components Demo",
  menuOptions: {
    menuLink: "/data-components",
    pathPattern: "/data-components"
  }
})
