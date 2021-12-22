import { VisualComponentsDemoScreen } from "../app/components-visual/VisualComponentsDemoScreen";
import PivotTableScreen from "../app/charts/PivotTableScreen";
import UserList from "../app/user/UserList";
import UserEditor from "../app/user/UserEditor";
import UserActionsScreen from "../app/tools/user-actions/UserActionsScreen";
import CustomerMultiSelectionScreen from "../app/templates/entity-multi-selection/CustomerMultiSelectionScreen";
import CustomerCards from "../app/templates/entity-cards/CustomerCards";
import { ScreenApiDemoScreen } from "../app/screen-api/ScreenApiDemoScreen";
import CustomerManagementList from "../app/templates/entity-management/CustomerManagementList";
import CustomerManagementEditor from "../app/templates/entity-management/CustomerManagementEditor";
import { BlankTemplateDemo } from "../app/templates/blank/BlankTemplateDemo";
import CustomerListDemo from "../app/templates/entity-list/CustomerList";
import { DataComponentsDemoScreen } from "../app/components-data/DataComponentsDemoScreen";
import CustomerMasterDetail from "../app/templates/master-detail/CustomerMasterDetail";
import { ConditionalComponentsDemoScreen } from "../app/components-conditional/ConditionalComponentsDemoScreen";
import DeeplyNestedTestEntityEdit from "../app/datatypes/deeply-nested-test-entity/DeeplyNestedTestEntityEdit";
import CompositionO2OTestEntityList from "../app/datatypes/composition-o2o/CompositionO2OTestEntityList";
import CompositionO2OTestEntityEditor from "../app/datatypes/composition-o2o/CompositionO2OTestEntityEditor";
import { MenuDemoScreen } from "../app/menu/MenuDemoScreen";
import CompositionO2MTestEntityList from "../app/datatypes/composition-o2m/CompositionO2MTestEntityList";
import CompositionO2MTestEntityEditor from "../app/datatypes/composition-o2m/CompositionO2MTestEntityEditor";
import DatatypesTestEntityList from "../app/datatypes/datatypes-test-entity/DatatypesTestEntityList";
import DatatypesTestEntityEditor from "../app/datatypes/datatypes-test-entity/DatatypesTestEntityEditor";
import React from "react";
import { Previews, ComponentPreview } from "@haulmont/react-ide-toolbox";
import { JsxTreeDemoScreen } from "../app/tools/jsx-tree/JsxTreeDemoScreen";
import { TimerComponentDemo } from "../app/components-conditional/TimerComponentDemo";
import { UseEntityListDataDemo } from "../app/components-data/UseEntityListDataDemo";
import { EntityPermAccessControlDemo } from "../app/components-conditional/EntityPermAccessControlDemo";
import { AttrPermAccessControlDemo } from "../app/components-conditional/AttrPermAccessControlDemo";
import CustomerMDList from "../app/templates/master-detail/CustomerMDList";
import { CustomerCardsGrid } from "../app/templates/entity-cards-grid/CustomerCardsGrid";
import { UseEntityEditorDataDemo } from "../app/components-data/UseEntityEditorDataDemo";
import { ParametrizedMessagesScreen } from "../app/i18n/ParametrizedMessagesScreen";

export const ComponentPreviews = () => {
  return (
    <Previews>
      <ComponentPreview path="/DatatypesTestEntityEditor">
        <DatatypesTestEntityEditor />
      </ComponentPreview>
      <ComponentPreview path="/DatatypesTestEntityList">
        <DatatypesTestEntityList />
      </ComponentPreview>
      <ComponentPreview path="/jsxTreeDemo">
        <JsxTreeDemoScreen />
      </ComponentPreview>
      <ComponentPreview path="/CompositionO2MTestEntityEditor">
        <CompositionO2MTestEntityEditor />
      </ComponentPreview>
      <ComponentPreview path="/CompositionO2MTestEntityList">
        <CompositionO2MTestEntityList />
      </ComponentPreview>
      <ComponentPreview path="/menuDemoScreen">
        <MenuDemoScreen />
      </ComponentPreview>
      <ComponentPreview path="/CompositionO2OTestEntityEditor">
        <CompositionO2OTestEntityEditor />
      </ComponentPreview>
      <ComponentPreview path="/CompositionO2OTestEntityList">
        <CompositionO2OTestEntityList />
      </ComponentPreview>
      <ComponentPreview path="/DeeplyNestedTestEntityEdit">
        <DeeplyNestedTestEntityEdit />
      </ComponentPreview>
      <ComponentPreview path="/visualComponentsDemoScreen">
        <VisualComponentsDemoScreen />
      </ComponentPreview>
      <ComponentPreview path="/conditionalComponentsDemoScreen">
        <ConditionalComponentsDemoScreen />
      </ComponentPreview>
      <ComponentPreview path="/timerComponentDemo">
        <TimerComponentDemo />
      </ComponentPreview>
      <ComponentPreview path="/CustomerMasterDetail">
        <CustomerMasterDetail />
      </ComponentPreview>
      <ComponentPreview path="/customerCards">
        <CustomerCards />
      </ComponentPreview>
      <ComponentPreview path="/dataComponentsDemo">
        <DataComponentsDemoScreen />
      </ComponentPreview>
      <ComponentPreview path="/UseEntityListDataDemo">
        <UseEntityListDataDemo />
      </ComponentPreview>
      <ComponentPreview path="/CustomerListDemo">
        <CustomerListDemo />
      </ComponentPreview>
      <ComponentPreview path="/blankTemplateDemo">
        <BlankTemplateDemo />
      </ComponentPreview>
      <ComponentPreview path="/PermissionComponentsDemo">
        <EntityPermAccessControlDemo />
      </ComponentPreview>
      <ComponentPreview path="/AttrPermAccessControlDemo">
        <AttrPermAccessControlDemo />
      </ComponentPreview>
      <ComponentPreview path="/CustomerMDList">
        <CustomerMDList />
      </ComponentPreview>
      <ComponentPreview path="/CustomerCardsGrid">
        <CustomerCardsGrid />
      </ComponentPreview>
      <ComponentPreview path="/UseEntityEditorDataDemo">
        <UseEntityEditorDataDemo />
      </ComponentPreview>
      <ComponentPreview path="/CustomerManagementEditor">
        <CustomerManagementEditor />
      </ComponentPreview>
      <ComponentPreview path="/CustomerManagementList">
        <CustomerManagementList />
      </ComponentPreview>
      <ComponentPreview path="/screenApiDemoScreen">
        <ScreenApiDemoScreen />
      </ComponentPreview>
      <ComponentPreview path="/CustomerCards">
        <CustomerCards />
      </ComponentPreview>
      <ComponentPreview path="/ParametrizedMessages">
        <ParametrizedMessagesScreen />
      </ComponentPreview>
      <ComponentPreview path="/CustomerMultiSelectionScreen">
        <CustomerMultiSelectionScreen />
      </ComponentPreview>
      <ComponentPreview path="/userActionsScreen">
        <UserActionsScreen />
      </ComponentPreview>
      <ComponentPreview path="/UserEditor">
        <UserEditor />
      </ComponentPreview>
      <ComponentPreview path="/UserList">
        <UserList />
      </ComponentPreview>
      <ComponentPreview path="/pivotTableScreen">
        <PivotTableScreen />
      </ComponentPreview>
    </Previews>
  );
};
