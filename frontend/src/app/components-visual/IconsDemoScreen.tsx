import React from "react";
import { registerScreen } from "@haulmont/jmix-react-web";
import {HomeOutlined, LoadingOutlined, SettingFilled, SmileOutlined, SyncOutlined} from "@ant-design/icons";
import {Space, Typography} from "antd";

const ROUTING_PATH = "/iconsDemoScreen";

const IconsDemoScreen = () => <div>
  <p>
    Use Icons directly from <Typography.Text code={true}>@ant-design/icons</Typography.Text> library:
  </p>
  <Space style={{fontSize: '32px'}}>
    <HomeOutlined />
    <SettingFilled />
    <SmileOutlined />
    <SyncOutlined spin />
    <SmileOutlined rotate={180} />
    <LoadingOutlined />
  </Space>
</div>;

registerScreen({
  component: IconsDemoScreen,
  caption: "screen.IconsDemoScreen",
  screenId: "IconsDemoScreen",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});

export default IconsDemoScreen;
