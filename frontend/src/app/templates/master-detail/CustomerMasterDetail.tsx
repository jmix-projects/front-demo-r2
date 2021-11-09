import React from "react";
import CustomerMDEditor from "./CustomerMDEditor";
import CustomerMDList from "./CustomerMDList";

import {observer} from "mobx-react";
import { MasterDetailManager } from "@haulmont/jmix-react-antd";
import {registerScreen} from "@haulmont/jmix-react-web";

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

registerScreen({
  screenId: "CustomerMasterDetail",
  component: CustomerMasterDetail,
  caption: "CustomerMasterDetail",
  menuOptions: {
    menuLink: ROUTING_PATH,
    pathPattern: `${ROUTING_PATH}/:entityId?`
  }
})

export default CustomerMasterDetail;
