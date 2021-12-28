import React from "react";
import CustomerMDEditor from "./CustomerMDEditor";
import CustomerMDList from "./CustomerMDList";
import {MasterDetailManager} from "@haulmont/jmix-react-antd";
import {registerScreen} from "@haulmont/jmix-react-web";
import {observer} from "mobx-react";

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
