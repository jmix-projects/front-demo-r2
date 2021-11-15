import { Row, Col, Card } from "antd";
import React from "react";
import { registerScreen } from "@haulmont/jmix-react-web";

const ROUTING_PATH = "/structureFourColumns";

const StructureFourColumns = () => (
  <Row gutter={16}>
    <Col span={6}>
      <Card title="Column one header">Content</Card>
    </Col>

    <Col span={6}>
      <Card title="Column two header">Content</Card>
    </Col>

    <Col span={6}>
      <Card title="Column three header">Content</Card>
    </Col>

    <Col span={6}>
      <Card title="Column four header">Content</Card>
    </Col>
  </Row>
);

registerScreen({
  component: StructureFourColumns,
  caption: "screen.StructureFourColumns",
  screenId: "StructureFourColumns",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});

export default StructureFourColumns;
