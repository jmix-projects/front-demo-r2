import React from "react";
import { registerScreen } from "@haulmont/jmix-react-web";

const ROUTING_PATH = "/userActionsScreen";

const UserActionsScreen = () => {


  return (
    <div>UserActionsScreen</div>
  );
}

registerScreen({
  component: UserActionsScreen,
  caption: "screen.UserActionsScreen",
  screenId: "UserActionsScreen",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});

export default UserActionsScreen;
