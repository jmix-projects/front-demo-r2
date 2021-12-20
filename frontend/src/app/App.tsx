import React, {useState} from "react";
import {Button, Layout} from "antd";
import {observer} from "mobx-react";
import Login from "./login/Login";
import Centered from "./common/Centered";
import AppHeader from "./header/AppHeader";
import {Router, useMainStore} from "@haulmont/jmix-react-core";
import CenteredLoader from "./CenteredLoader";
import {AppMenu} from "./AppMenu";
import {AppMenHorizontal} from "./AppMenuHorizontal";
import "../routing";
import styles from "./App.module.css";
import { ContentArea } from "@haulmont/jmix-react-antd";
import {useDefaultTabHotkeys} from "@haulmont/jmix-react-web";

const routes = {
  "/": <ContentArea />,
  "/:entityName/:entityId?": <ContentArea />
};

export let globalMenuType: {
  setMenuType: React.Dispatch<React.SetStateAction<string>>,
  menuType: string
};

const App = observer(() => {
  const [menuType, setMenuType] = useState<string>('vertical');
  globalMenuType = {menuType, setMenuType}

  const mainStore = useMainStore();
  const { initialized, locale, loginRequired } = mainStore;

  useDefaultTabHotkeys();

  if (!initialized || !locale) {
    return <CenteredLoader />;
  }

  if (loginRequired) {
    return (
      <Centered>
        <Login />
      </Centered>
    );
  }

  return (
    <Layout className={styles.mainLayout}>
      <Layout.Header>
        <AppHeader>
          {menuType === "horizontal" && <AppMenHorizontal theme="dark"/>}
        </AppHeader>
      </Layout.Header>
      <Layout className={styles.layoutContainer}>
        {menuType === "vertical" && (
            <Layout.Sider
              width={240}
              breakpoint="sm"
              collapsedWidth={0}
              className={styles.layoutSider}
            >
              <AppMenu />
            </Layout.Sider>
        ) }
        <Layout className={styles.layoutContent}>
          <Layout.Content>
            <Router global routes={routes} />
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
});

export default App;
