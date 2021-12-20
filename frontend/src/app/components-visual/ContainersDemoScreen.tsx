import React from "react";
import { registerScreen } from "@haulmont/jmix-react-web";
import {Card, Menu, Space, Typography} from "antd";
import {Col, Footer, Header, Row, Sidebar, Card as JmixCard} from "@haulmont/jmix-react-antd";
import styles from "./style.module.css";

const ROUTING_PATH = "/containersDemoScreen";

const colStyle = {
  background: '#89c2ea',
}

const ContainersDemoScreen = () => {
  return (
    <Space direction={"vertical"} style={{width: "100%"}}>
      <Card title={"Grid"}>
        <Row gutter={24}>
          <Col span={8}>
            <div style={colStyle}>Col-8</div>
          </Col>
          <Col span={8}><div style={colStyle}>Col-8</div></Col>
          <Col span={8}><div style={colStyle}>Col-8</div></Col>
        </Row>
        <br/>
        <Row gutter={8}>
          <Col span={3}><div style={colStyle}>Col-3</div></Col>
          <Col span={18}><div style={colStyle}>Col-18</div></Col>
          <Col span={3}><div style={colStyle}>Col-3</div></Col>
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
          <Menu mode="inline" style={{ width: '100px' }} theme={'dark'}>
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
          </Menu>
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
    </Space>
  );
}

registerScreen({
  component: ContainersDemoScreen,
  caption: "screen.ContainersDemoScreen",
  screenId: "ContainersDemoScreen",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});

export default ContainersDemoScreen;
