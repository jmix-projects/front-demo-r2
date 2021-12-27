import React, {useState} from "react";
import {registerScreen} from "@haulmont/jmix-react-web";
import {Alert, Button, Divider, Popover, Space, Typography} from "antd";
import {gql, useLazyQuery} from "@apollo/client";
import {BrokenComponent} from "./BrokenComponent";

const ROUTING_PATH = "/errorHandlingDemoScreen";


const ErrorHandlingDemoScreen = () => {

  //
  const [showBrokenComponent, setShowBrokenComponent] = useState(false);

  // Server side error
  const [loadEvent, {called, loading, data, error: gqlErrors}] = useLazyQuery(gql`
    query {
      EventById(id: "1") {
        id
        startDate
        endDate
      }
    }
  `);

  return (
    <div>
      <Space>
        <Button onClick={() => setShowBrokenComponent(true)}>
          Trigger client-side error (render broken component)
        </Button>
        <Button onClick={() => {
          loadEvent();
        }}>
          Trigger server-side error
        </Button>
        <Popover content={"Disable internet connection or turn it off using developer tools"} title="Tip">
          <Button onClick={() => {
            loadEvent();
          }}>
            Trigger network error
          </Button>
        </Popover>
      </Space>
      <Divider/>

      {gqlErrors?.graphQLErrors && <Typography.Title level={3}>Server-side errors</Typography.Title>}
      {
        gqlErrors?.graphQLErrors.map(({message}, i) => (
        <Alert type={"error"} key={i} message={message}/>
      ))}

      {gqlErrors?.networkError &&
        <>
          <Typography.Title level={3}>Network error</Typography.Title>
          <Alert type={"error"} message={gqlErrors?.networkError.message}/>
        </>
      }

      {showBrokenComponent && <BrokenComponent/>}
    </div>
  );
}

registerScreen({
  component: ErrorHandlingDemoScreen,
  caption: "screen.ErrorHandlingDemoScreen",
  screenId: "ErrorHandlingDemoScreen",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});

export default ErrorHandlingDemoScreen;
