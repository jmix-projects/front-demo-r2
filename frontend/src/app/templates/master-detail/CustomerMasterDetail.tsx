import React from "react";
import CustomerMDEditor from "./CustomerMDEditor";
import CustomerMDList from "./CustomerMDList";
import { MasterDetailManager } from "@haulmont/jmix-react-antd";
import { registerEntityList } from "@haulmont/jmix-react-web";
import { observer } from "mobx-react";

const ENTITY_NAME = "Customer";
const ROUTING_PATH = "/customerMasterDetail";

const CustomerMasterDetail = observer(() => {
  return (
    <MasterDetailManager
      editor={<CustomerMDEditor />}
      browser={<CustomerMDList />}
    />
  );
});

registerEntityList({
  component: CustomerMasterDetail,
  caption: "menu.CustomerMasterDetail",
  screenId: "CustomerMasterDetail",
  entityName: ENTITY_NAME,
  menuOptions: {
    pathPattern: `${ROUTING_PATH}/:entityId?`,
    menuLink: ROUTING_PATH
  }
});

export default CustomerMasterDetail;
