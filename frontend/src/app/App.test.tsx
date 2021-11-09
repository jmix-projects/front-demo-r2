import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { IntlProvider } from "react-intl";
import { JmixAppProvider } from "@haulmont/jmix-react-core";
import { initializeApp } from "@haulmont/jmix-rest";
import {ApolloClient, InMemoryCache} from "@apollo/client";
import { Modals } from "@haulmont/jmix-react-antd";

const jmixREST = initializeApp();

const metadata = { entities: [], enums: [] };

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <JmixAppProvider jmixREST={jmixREST}
                     metadata={metadata}
                     apolloClient={new ApolloClient<unknown>({cache: new InMemoryCache()})}
                     Modals={Modals}>
      <IntlProvider locale="en">
        <App />
      </IntlProvider>
    </JmixAppProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
