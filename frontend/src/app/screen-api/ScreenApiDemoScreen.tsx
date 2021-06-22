import React from "react";
import {modals, notifications, registerScreen} from "@haulmont/jmix-react-ui";
import {Button, Card, Space} from "antd";
import {CheckOutlined, CloseCircleOutlined, WarningOutlined} from "@ant-design/icons";
import {useScreens} from "@haulmont/jmix-react-core";
import {NotificationType} from "@haulmont/jmix-react-ui";

const ROUTING_PATH = "/screenApiDemoScreen";

export const ScreenApiDemoScreen = () => {

  const screens = useScreens();

  return (
    <Space direction={"vertical"} style={{width: "100%"}}>
      <Card title={"Notifications"}>
        <Space direction={"horizontal"}>
          <Button onClick={() => {
            notifications.show({
              title: 'Notification Title',
              description: "Notification Message"
            })
          }}>
            Show Notification
          </Button>
          <Button icon={<CloseCircleOutlined />} onClick={() => {
            notifications.show({
              type: NotificationType.ERROR,
              title: 'Error',
              description: "Error Message"
            })
          }} >
            Show Error
          </Button>
          <Button icon={<WarningOutlined/>} onClick={() => {
            notifications.show({
              type: NotificationType.WARNING,
              title: 'Warning',
              description: "Warning Message",
            })
          }}>
            Show Warning
          </Button>
          <Button icon={<CheckOutlined />} onClick={() => {
            notifications.show({
              type: NotificationType.SUCCESS,
              title: 'Success',
              description: "Warning Message",
            })
          }}>
            Show Warning
          </Button>
        </Space>
        <br/>
        <br/>
        <Space direction={"horizontal"}>
          <Button onClick={() => {
            notifications.show({
              description: "Notification Message",
              placement: 'topLeft'
            })
          }}>
            Top Left
          </Button>
          <Button onClick={() => {
            notifications.show({
              description: "Notification Message",
              placement: 'topRight'
            })
          }}>
            Top Right
          </Button>
          <Button onClick={() => {
            notifications.show({
              description: "Notification Message",
              placement: 'bottomLeft'
            })
          }}>
            Bottom Left
          </Button>
          <Button onClick={() => {
            notifications.show({
              description: "Notification Message",
              placement: 'bottomRight'
            })
          }}>
            Bottom Right
          </Button>
        </Space>
        <br/>
        <br/>
        <Button onClick={() => notifications.closeAll()}>Close all</Button>
      </Card>
      <Card title={'Modals'}>
        <Button onClick={() =>
          modals.open({
            title: "Modal title",
            content: "Modal content",
            onOk: () => {alert('OK Pressed')},
            onCancel: () => {alert('Cancel Pressed')}
          })}>
          Open modal
        </Button>
      </Card>
      <Card title={'Screen API'}>
        <Button onClick={() => screens.push({title: 'Title', content: 'Content'})}>
          Open Screen
        </Button>
        Currently Opened screens
        {JSON.stringify(screens.screens)}
      </Card>
    </Space>
  )
};

registerScreen({
  component: ScreenApiDemoScreen,
  caption: "Screen API",
  screenId: "ScreenApiDemoScreen",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});