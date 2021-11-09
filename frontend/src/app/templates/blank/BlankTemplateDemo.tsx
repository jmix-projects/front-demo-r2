import React from "react";
import {registerScreen} from "@haulmont/jmix-react-web";

export const BlankTemplateDemo = () => <div>BlankTemplateDemo</div>;

registerScreen({
  screenId: "BlankTemplateDemo",
  component: BlankTemplateDemo,
  caption: "Blank Component",
  menuOptions: {
    menuLink: `/templates/blank`,
    pathPattern: `/templates/blank`
  }
})
