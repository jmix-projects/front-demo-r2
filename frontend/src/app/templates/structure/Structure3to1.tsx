import { Row, Col, Card } from "antd";
import React from "react";
import { registerScreen } from "@haulmont/jmix-react-web";

const ROUTING_PATH = "/structure3to1";

const Structure3to1 = () => (
  <Row gutter={16}>
    <Col span={18}>
      <Card title="Column one header">Content</Card>
    </Col>

    <Col span={6}>
      <Card title="Column two header">Content</Card>
    </Col>
  </Row>
);

registerScreen({
  component: Structure3to1,
  caption: "screen.Structure3to1",
  screenId: "Structure3to1",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});

export default Structure3to1;
