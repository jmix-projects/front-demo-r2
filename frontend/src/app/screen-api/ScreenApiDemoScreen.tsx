import React, {useCallback, useState} from "react";
import {Button, Card, Radio, RadioChangeEvent, Space} from "antd";
import {CheckOutlined, CloseCircleOutlined, WarningOutlined} from "@ant-design/icons";
import {ContentDisplayMode, tabs, useMainStore, useScreens} from "@haulmont/jmix-react-core";

import {observer} from "mobx-react";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import Link from "antd/lib/typography/Link";
import {modals, notifications, NotificationType} from "@haulmont/jmix-react-antd";
import {registerScreen} from "@haulmont/jmix-react-web";

const ROUTING_PATH = "/screenApiDemoScreen";

export const ScreenApiDemoScreen = observer(() => {

  const screens = useScreens();
  const mainStore = useMainStore();

  const [contentDisplayMode, setContentDisplayMode] = useState(mainStore.contentDisplayMode);

  const handleContentDisplayModeChange = useCallback((e: RadioChangeEvent) => {
    if (Object.values(ContentDisplayMode).includes(e.target.value)) {
      mainStore.contentDisplayMode = e.target.value;
      setContentDisplayMode(mainStore.contentDisplayMode);
    }
  }, [mainStore, setContentDisplayMode]);

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
          <Button icon={<CloseCircleOutlined/>} onClick={() => {
            notifications.show({
              type: NotificationType.ERROR,
              title: 'Error',
              description: "Error Message"
            })
          }}>
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
          <Button icon={<CheckOutlined/>} onClick={() => {
            notifications.show({
              type: NotificationType.SUCCESS,
              title: 'Success',
              description: "Warning Success",
            })
          }}>
            Show Success
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
            onOk: () => {
              alert('OK Pressed')
            },
            onCancel: () => {
              alert('Cancel Pressed')
            }
          })}>
          Open modal
        </Button>
      </Card>
      <Card title={'Screen API'}>
        <Paragraph>
          Screens opened in current tab
          {JSON.stringify(screens.screens.map(screen => screen.title))}
          <Button onClick={() => screens.push({title: 'New Screen', content: 'Content', key: 'NewScreen'})}>
            Open screen in current tab
          </Button>
        </Paragraph>
        <Title level={5}>
          Opened tabs</Title>
        <Paragraph>
          : {JSON.stringify(tabs.tabs)}
        </Paragraph>
        <Button danger={true} icon={<CloseCircleOutlined/>} onClick={tabs.closeAll}>Close all tabs</Button>
        <br/>
        <a target={'_blank'} href={'https://github.com/jmix-projects/front-demo-r1/blob/main/frontend/src/app/screen-api/ScreenApiDemoScreen.tsx#L180'}>
          registerScreen()
        </a>
      </Card>
      <Card title={'Entity Browser / Editor'}>
        <a target={'_blank'} href={'https://github.com/jmix-projects/front-demo-r1/blob/main/frontend/src/app/templates/entity-management/CustomerManagementEditor.tsx#L64'} >
          useEntityEditor()
        </a>
        <br/>
        <a target={'_blank'} href={'https://github.com/jmix-projects/front-demo-r1/blob/main/frontend/src/app/templates/entity-management/CustomerManagementList.tsx#L68'}>
          useEntityList()
        </a>
        <br/>
        <a target={'_blank'} href={'https://github.com/jmix-projects/front-demo-r1/blob/main/frontend/src/app/templates/entity-management/CustomerManagementEditor.tsx#L130'}>
          registerEntityEditor()
        </a>
        <br/>
        <a target={'_blank'} href={'https://github.com/jmix-projects/front-demo-r1/blob/main/frontend/src/app/templates/entity-management/CustomerManagementList.tsx#L175'}>
          registerEntityList()
        </a>
      </Card>
      <Card title={'Content Display Mode'}>
        <div><code>ContentDisplayMode:</code></div>
        <Radio.Group onChange={handleContentDisplayModeChange} value={contentDisplayMode}>
          <Space direction='vertical'>
            <Radio value={ContentDisplayMode.ActivateExistingTab}>
              <code>ContentDisplayMode.ActivateExistingTab</code>
            </Radio>
            <Radio value={ContentDisplayMode.AlwaysNewTab}>
              <code>ContentDisplayMode.AlwaysNewTab</code>
            </Radio>
            <Radio value={ContentDisplayMode.NoTabs}>
              <code>ContentDisplayMode.NoTabs</code>
            </Radio>
          </Space>
        </Radio.Group>
      </Card>
    </Space>
  )
});


registerScreen({
  component: ScreenApiDemoScreen,
  caption: "Screen API",
  screenId: "ScreenApiDemoScreen",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});
