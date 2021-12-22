import React from "react";
import { registerScreen } from "@haulmont/jmix-react-web";
import {getI18n} from "@haulmont/jmix-react-antd";
import dayjs from "dayjs";

const ROUTING_PATH = "/parametrizedCaptionScreen";

const ParametrizedCaptionScreen = () => <div>ParametrizedCaptionScreen</div>;
const message = getI18n().formatMessage({id: "screen.ParametrizedCaptionScreen"}, {currentDate: dayjs().format("YYYY-MM-DD")});

registerScreen({
  component: ParametrizedCaptionScreen,
  caption: message,
  screenId: "ParametrizedCaptionScreen",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});

export default ParametrizedCaptionScreen;
