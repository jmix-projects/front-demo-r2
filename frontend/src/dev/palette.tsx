import {
  AutoComplete,
  Avatar,
  Button,
  Card,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Input,
  Row,
  Space
} from "antd";
import ErrorHandlingDemoScreen from "../app/error-handling/ErrorHandlingDemoScreen";
import ParametrizedCaptionScreen from "../app/i18n/ParametrizedCaptionScreen";
import EventWizard from "../app/templates/entity-wizard/EventWizard";
import EventCardsWithDetails from "../app/templates/entity-expandable-details/EventCardsWithDetails";
import IconsDemoScreen from "../app/components-visual/IconsDemoScreen";
import ComplexComponentsDemoScreen from "../app/components-visual/ComplexComponentsDemoScreen";
import ControlsDemoScreen from "../app/components-visual/ControlsDemoScreen";
import DataDisplayComponentsDemoScreen from "../app/components-visual/DataDisplayComponentsDemoScreen";
import ContainersDemoScreen from "../app/components-visual/ContainersDemoScreen";
import PivotTableScreen from "../app/charts/PivotTableScreen";
import UserList from "../app/user/UserList";
import UserEditor from "../app/user/UserEditor";
import UserActionsScreen from "../app/tools/user-actions/UserActionsScreen";
import CustomerMultiSelectionScreen from "../app/templates/entity-multi-selection/CustomerMultiSelectionScreen";
import { ArrowUpOutlined } from "@ant-design/icons";
import {
  Category,
  Component,
  Variant,
  Palette
} from "@haulmont/react-ide-toolbox";
import * as React from "react";
import { FormattedMessage } from "react-intl";
import { ChartsPalette } from "@haulmont/jmix-addon-charts/palette";

export default () => (
  <Palette>
    <Category name="i18n">
      <Component name="FormattedMessage">
        <Variant>
          <FormattedMessage />
        </Variant>
      </Component>
    </Category>
    <Category name="Layout">
      <Component name="Divider">
        <Variant>
          <Divider />
        </Variant>
      </Component>

      <Component name="Grid">
        <Variant name="Simple Row">
          <Row></Row>
        </Variant>
        <Variant name="Two columns">
          <Row>
            <Col span={12}></Col>
            <Col span={12}></Col>
          </Row>
        </Variant>
        <Variant name="Three columns">
          <Row>
            <Col span={8}></Col>
            <Col span={8}></Col>
            <Col span={8}></Col>
          </Row>
        </Variant>
      </Component>

      <Component name="Space">
        <Variant>
          <Space />
        </Variant>
        <Variant name="Small">
          <Space size={"small"} />
        </Variant>
        <Variant name="Large">
          <Space size={"large"} />
        </Variant>
      </Component>
    </Category>
    <Category name="Controls">
      <Component name="Autocomplete">
        <Variant>
          <AutoComplete placeholder="input here" />
        </Variant>
      </Component>

      <Component name="Button">
        <Variant>
          <Button />
        </Variant>
        <Variant name="Primary">
          <Button type="primary" />
        </Variant>
        <Variant name="Link">
          <Button type="link" />
        </Variant>
      </Component>

      <Component name="Checkbox">
        <Variant>
          <Checkbox />
        </Variant>
      </Component>

      <Component name="DatePicker">
        <Variant>
          <DatePicker />
        </Variant>
        <Variant name="Range">
          <DatePicker.RangePicker />
        </Variant>
      </Component>

      <Component name="Input">
        <Variant>
          <Input />
        </Variant>
      </Component>
    </Category>
    <Category name="Data Display">
      <Component name="Card">
        <Variant>
          <Card />
        </Variant>
        <Variant name="With Title">
          <Card>
            <Card title="Card title">
              <p>Card content</p>
            </Card>
          </Card>
        </Variant>
        <Variant name="My custom card">
          <Card>
            <Card title="Card title">
              <p>Card content</p>
              <Avatar />
            </Card>
          </Card>
        </Variant>
      </Component>
    </Category>
    <Category name="Icons">
      <Component name="ArrowUpOutlined">
        <Variant>
          <ArrowUpOutlined />
        </Variant>
      </Component>
    </Category>
    <Category name="Screens">
      <Component name="CustomerMultiSelectionScreen">
        <Variant>
          <CustomerMultiSelectionScreen />
        </Variant>
      </Component>
      <Component name="UserActionsScreen">
        <Variant>
          <UserActionsScreen />
        </Variant>
      </Component>
      <Component name="UserEditor">
        <Variant>
          <UserEditor />
        </Variant>
      </Component>
      <Component name="UserList">
        <Variant>
          <UserList />
        </Variant>
      </Component>
      <Component name="ContainersDemoScreen">
        <Variant>
          <ContainersDemoScreen />
        </Variant>
      </Component>
      <Component name="DataDisplayComponentsDemoScreen">
        <Variant>
          <DataDisplayComponentsDemoScreen />
        </Variant>
      </Component>
      <Component name="ControlsDemoScreen">
        <Variant>
          <ControlsDemoScreen />
        </Variant>
      </Component>
      <Component name="ComplexComponentsDemoScreen">
        <Variant>
          <ComplexComponentsDemoScreen />
        </Variant>
      </Component>
      <Component name="IconsDemoScreen">
        <Variant>
          <IconsDemoScreen />
        </Variant>
      </Component>
      <Component name="EventCardsWithDetails">
        <Variant>
          <EventCardsWithDetails />
        </Variant>
      </Component>
      <Component name="EventWizard">
        <Variant>
          <EventWizard />
        </Variant>
      </Component>
      <Component name="ParametrizedCaptionScreen">
        <Variant>
          <ParametrizedCaptionScreen />
        </Variant>
      </Component>
      <Component name="PivotTableScreen">
        <Variant>
          <PivotTableScreen />
        </Variant>
      </Component>
      <Component name="ErrorHandlingDemoScreen">
        <Variant>
          <ErrorHandlingDemoScreen />
        </Variant>
      </Component>
    </Category>
    <ChartsPalette />
  </Palette>
);
