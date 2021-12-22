import {MultiTabs} from "@haulmont/jmix-react-antd"
import {useEffect} from "react";
import {tabs} from "@haulmont/jmix-react-core";

export const MultiTabsDemo = () => {

  useEffect(() => {
    tabs.push(
      {
        title: 'Tab 1',
        content: <div>Tab1 Content</div>,
        key: 'tab1',
        rootScreenId: 'Tab1',
      }
    );
    tabs.push(
      {
        title: 'Tab 2',
        content: <div>Tab2 Content</div>,
        key: 'tab2',
        rootScreenId: 'Tab2',
      }
    );

  }, [])

  return (
    <div>
      <MultiTabs/>
    </div>
  )
}
