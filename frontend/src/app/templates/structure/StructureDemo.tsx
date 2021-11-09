import {Card, Col, Row} from "antd";
import React from "react";
import {registerScreen} from "@haulmont/jmix-react-web";

export const StructureDemo = () => (
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
  screenId: `StructureDemo`,
  component: StructureDemo,
  caption: "Structure Demo",
  menuOptions: {
    menuLink: `/templates/structure`,
    pathPattern: `/templates/structure`
  }
})
