import { Row, Col, Card } from "antd";
import React from "react";
import { registerScreen } from "@haulmont/jmix-react-web";

const ROUTING_PATH = "/structure1to3";

const Structure1to3 = () => (
  <Row gutter={16}>
    <Col span={6}>
      <Card title="Column one header">Content</Card>
    </Col>

    <Col span={18}>
      <Card title="Column two header">Content</Card>
    </Col>
  </Row>
);

registerScreen({
  component: Structure1to3,
  caption: "screen.Structure1to3",
  screenId: "Structure1to3",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});

export default Structure1to3;
