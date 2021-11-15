import { Row, Col, Card } from "antd";
import React from "react";
import { registerScreen } from "@haulmont/jmix-react-web";

const ROUTING_PATH = "/structureTwoColumns";

const StructureTwoColumns = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Card title="Column one header">Content</Card>
    </Col>

    <Col span={12}>
      <Card title="Column two header">Content</Card>
    </Col>
  </Row>
);

registerScreen({
  component: StructureTwoColumns,
  caption: "screen.StructureTwoColumns",
  screenId: "StructureTwoColumns",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});

export default StructureTwoColumns;
