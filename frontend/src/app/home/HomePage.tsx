import React from "react";
import { FormattedMessage } from "react-intl";
import {registerScreen} from "@haulmont/jmix-react-web";

const ROUTING_PATH = "/";

const HomePage = () => (
  <div>
    <FormattedMessage id="home.welcome" /> frontdemo!
  </div>
);

export default HomePage;


registerScreen({
    component: HomePage,
    caption: "screen.home",
    screenId: "HomePage",
    menuOptions: {
        pathPattern: ROUTING_PATH,
        menuLink: ROUTING_PATH
    }
});
