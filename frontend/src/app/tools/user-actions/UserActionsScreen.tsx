import React from "react";
import {openScreen, registerScreen} from "@haulmont/jmix-react-web";
import {useIntl} from "react-intl";
import {modals, notifications, NotificationType} from "@haulmont/jmix-react-antd";
import {redirect} from "@haulmont/jmix-react-core";
import {jmixREST} from "../../../index";

const ROUTING_PATH = "/userActionsScreen";

const UserActionsScreen = () => {

  // Open Screen
  openScreen('ScreenApiDemoScreen', '/screenApiDemoScreen');

  // Close current screen
  closeCurrentScreen();

  // Open dialog todo

  // Open modal
  modals.open({
    title: 'Modal Title',
    onOk: () => {
      //handle ok
    },
    onCancel: () => {
      //handle cancel
    }
  })

  // Open link
  redirect('/screenApiDemoScreen')

  // Gather localized message
  const intl = useIntl();
  intl.formatMessage({id: "common.ok"});

  // Show Notification
  notifications.show({title: 'Notification title', description: 'Notification description', type: NotificationType.INFO});

  // Call Spring MVC Controller
  jmixREST.fetch('POST', 'myMethod', )

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

function closeCurrentScreen() {

}

export default UserActionsScreen;
