import {IF} from "@haulmont/jmix-react-core";
import {Alert, Button} from "antd";
import React, {useState} from "react";

export const IFComponentDemo = () => {

  const [flag, setFlag] = useState(true);

  return (
    <>
      <div>
        Condition: {`${flag}`}
        <Button onClick={() => {setFlag(!flag)}} style={{marginLeft: "12px"}}>Toggle condition</Button>
      </div>
      <br/>
      <IF condition={flag} onTrue={() =>
        <Alert message={'Content inside the IF component'}/>
      }/>
    </>
  )
}
