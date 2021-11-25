import React from "react";
import { MenuProps } from "antd";
import { BarsOutlined, HomeOutlined } from "@ant-design/icons";
import { MenuItem, SubMenuItem, VerticalMenu } from "@haulmont/jmix-react-antd";

export interface AppMenuProps extends MenuProps {}

export const AppMenu = (props: AppMenuProps) => {
  return (
    <VerticalMenu {...props}>
      <MenuItem
        screenId={"HomePage"}
        icon={<HomeOutlined />}
        caption={"router.home"}
        key={"home"}
      />
      <SubMenuItem
        caption={"menu.Datatypes"}
        key={"7ef031d3-8a07-437b-bfef-7fc3800105cd"}
      >
        <MenuItem
          screenId={"DatatypesTestEntityList"}
          caption={"router.DatatypesTestEntityList"}
          key={"7ef031d3-8b07-437b-bfef-7fc3800100cd"}
        />
        <MenuItem
          screenId={"CompositionO2OTestEntityList"}
          caption={"router.CompositionO2OTestEntityList"}
          key={"62518b6c-54c7-4017-8b89-9ce6480a0cfc"}
        />
        <MenuItem
          screenId={"CompositionO2MTestEntityList"}
          caption={"router.CompositionO2MTestEntityList"}
          key={"aae139b5-829e-4c05-8119-bcb9977842e6"}
        />
      </SubMenuItem>
      <SubMenuItem
        caption={"Components"}
        key={"dr2945b3-7666-4adb-b8c9-q9d30e4ce4cb"}
      >
        <MenuItem
          screenId={"VisualComponentsDemo"}
          caption={"Visual Components"}
          key={"de2945b3-7666-4adb-b8c9-q9d30e4ce4cb"}
        />
        <MenuItem
          screenId={"DataComponentsDemo"}
          caption={"menu.DataComponentsDemo"}
          key={"ed79675a-1e97-418d-9da7-d776affbea52"}
        />
        <MenuItem
          screenId={"ConditionalComponentsDemoScreen"}
          caption={"menu.ConditionalComponentsDemoScreen"}
          key={"ed79675a-1e17-418d-9da7-d776affbea52"}
        />
      </SubMenuItem>
      <SubMenuItem
        caption={"menu.Templates"}
        key={"7ef031d3-8a01-437b-bfef-7fc2800100cd"}
      >
        <MenuItem
          screenId={"BlankTemplateDemo"}
          caption={"menu.BlankTemplateDemo"}
          key={"ccdd6e24-fad4-44c0-9e3d-72636f17600a"}
        />
        <MenuItem
          screenId={"DatatypesTestEntityList"}
          caption={"menu.TemplatesEntityEditTable"}
          key={"1ef031d3-8b07-437b-bfef-7fc38001w0cd"}
        />
        <MenuItem
          screenId={"CustomerCards"}
          caption={"menu.EntityCards"}
          key={"a004b701-6412-45bd-95b5-9c5298295d6b"}
        />
        <MenuItem
          screenId={"CustomerList"}
          caption={"menu.CustomerList"}
          key={"482486d8-690d-46fe-93e8-d26b4fee07aa"}
        />
        <MenuItem
          screenId={"DatatypesTestEntityEdit"}
          caption={"menu.TemplatesEntityEdit"}
          key={"7ef031d3-8b07-437b-bfef-7fc38001w0cd"}
        />
        <MenuItem
          screenId={"CustomerManagementList"}
          caption={"menu.EntityManagement"}
          key={"93eb4c45-8297-401c-b555-026d3ae68c67"}
        />
        <MenuItem
          screenId={"CustomerMasterDetail"}
          caption={"menu.CustomerMasterDetail"}
          key={"a3d62638-e75c-4f7a-be2e-261c79071dc0"}
        />
        <MenuItem
          screenId={"CustomerCardsGrid"}
          caption={"menu.EntityCardsGrid"}
          key={"2b9f95cd-011f-4341-9631-6d07f95c3235"}
        />
        <SubMenuItem
          caption={"menu.StructureTemplates"}
          key={"7ef031d3-8a01-437b-bfef-7fc2800102cd"}
        >
          <MenuItem
            screenId={"StructureTwoColumns"}
            caption={"screen.StructureTwoColumns"}
            key={"689ec9d3-5efa-47af-9eb5-4aff814ffde9"}
          />
          <MenuItem
            screenId={"StructureFourColumns"}
            caption={"screen.StructureFourColumns"}
            key={"4fcdb507-7544-44f2-90ec-16e593fe6302"}
          />
          <MenuItem
            screenId={"Structure3to1"}
            caption={"screen.Structure3to1"}
            key={"1df26263-cbd4-4514-b3b4-957b2433f378"}
          />
          <MenuItem
            screenId={"Structure1to3"}
            caption={"screen.Structure1to3"}
            key={"4f4c5ac4-974e-4ff8-8abc-bd4cebfd7974"}
          />
        </SubMenuItem>
        <MenuItem
          screenId={"CustomerMultiSelectionScreen"}
          icon={<BarsOutlined />}
          caption={"screen.CustomerMultiSelectionScreen"}
          key={"6efd5f32-4cb9-4c13-8768-a5b8440c691d"}
        />
      </SubMenuItem>
      <SubMenuItem
        caption={"menu.Tools"}
        key={"7ef031d3-8a07-437b-bfef-7fc4800100cd"}
      >
        <MenuItem screenId={"JsxTreeDemo"} caption={"menu.JsxTree"} />
        <MenuItem
          screenId={"UserActionsScreen"}
          icon={<BarsOutlined />}
          caption={"screen.UserActionsScreen"}
          key={"21522e71-5149-4386-b3f8-3e8772dd0217"}
        />
      </SubMenuItem>
      <MenuItem
        screenId={"ScreenApiDemoScreen"}
        caption={"menu.ScreenApiDemoScreen"}
        key={"9091872d-420e-47e2-b1d5-747c562ad137"}
      />
      <MenuItem
        screenId={"MenuDemo"}
        caption={"router.MenuDemoScreen"}
        key={"930a8778-0e7b-4556-a878-ea8b45fb6ea3"}
      />
    </VerticalMenu>
  );
};
