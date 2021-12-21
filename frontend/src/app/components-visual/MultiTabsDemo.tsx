import {MultiTabs} from "@haulmont/jmix-react-antd"
import {useEffect} from "react";
import {tabs} from "@haulmont/jmix-react-core";

export const MultiTabsDemo = () => {

  useEffect(() => {
    tabs.push(
      {
        title: 'Tab 1',
        content: () => 'Tab1',
        key: 'tab1',
        rootScreenId: 'BlankTemplateDemo',
      }
    );

  }, [])

  return (
    <div>
      <MultiTabs/>
    </div>
  )
}
