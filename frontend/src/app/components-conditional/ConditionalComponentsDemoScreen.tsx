import React from "react";
import {Card, Space} from "antd";
import {IFComponentDemo} from "./IFComponentDemo";
import {TimerComponentDemo} from "./TimerComponentDemo";
import {EntityPermAccessControlDemo} from "./EntityPermAccessControlDemo";
import {AttrPermAccessControlDemo} from "./AttrPermAccessControlDemo";
import {registerScreen} from "@haulmont/jmix-react-web";

export const ConditionalComponentsDemoScreen = () => (
  <Space direction={"vertical"} style={{width: "100%"}}>
    <Card title={'<IF>'}>
      <IFComponentDemo/>
    </Card>
    <Card title={'useTimer'}>
      <TimerComponentDemo/>
    </Card>
    <Card title={'<EntityPermAccessControl>'}>
      <EntityPermAccessControlDemo/>
    </Card>
    <Card title={'<AttrPermAccessControl>'}>
      <AttrPermAccessControlDemo/>
    </Card>
  </Space>
);

registerScreen({
  screenId: "ConditionalComponentsDemoScreen",
  component: ConditionalComponentsDemoScreen,
  caption: "Conditional Components Demo",
  menuOptions: {
    menuLink:  "/conditional-components",
    pathPattern: "/conditional-components",
  }
})
