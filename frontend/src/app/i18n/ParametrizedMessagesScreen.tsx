import {Button, Card, Input, Space} from "antd";
import {FormattedMessage, FormattedNumber, useIntl} from "react-intl";
import dayjs from 'dayjs';
import {useState} from "react";
import {useEntityEditorData, useMainStore} from "@haulmont/jmix-react-core";
import {gql} from "@apollo/client";
import {registerScreen} from "@haulmont/jmix-react-web";
import {Order} from "../../jmix/entities/Order_";
import {notifications, NotificationType, getI18n} from "@haulmont/jmix-react-antd";
const ROUTING_PATH = "/parametrizedMessagesScreen";

export const ParametrizedMessagesScreen = () => {

  const mainStore = useMainStore();

  const [state, setStatue] = useState<{ someProp: string }>({someProp: "some custom property of custom object"});
  const {item: entity, executeLoadQuery} = useEntityEditorData<Order>({
    entityName: Order.NAME,
    loadQuery: gql`
      query OrderById($id: String = "", $loadItem: Boolean!) {
        Order_ById(id: $id) @include(if: $loadItem) {
          id
          _instanceName
          number
          amount
          customer {
            name
          }
        }
      }
    `,
    entityId: '5b51b89f-623b-86c2-c10e-d538b3b11857'
  },);

  const intl = useIntl();

  function onButtonClick(event: React.MouseEvent) {
    notifications.show({title: intl.formatMessage({id: "lastYearDay"}, {lastYearDay: dayjs().endOf("year").format("YYYY-M-D")}), description: "Description", type: NotificationType.INFO})
  }

  return (
    <Card className="narrow-layout">

        <Button>
          <FormattedMessage
            id={"firstYearDay"}
            values={{
              firstYearDay: dayjs().startOf("year").format("YYYY-M-D")
            }}
          />
        </Button>

      <Space/>
      <div>
        <Input addonBefore={
          intl.formatMessage({id: "inputAddon"}, {inputAddonType: "prefix"})}/>
      </div>
      <Space/>

        <Button onClick={onButtonClick}>
          Show notification
        </Button>


      <div>
        <FormattedMessage // we don't have information on front-side about user at moment
          id={"userLogin"}
          values={{
            userLogin: mainStore.userName
          }}
        />
      </div>

      <div>
        <FormattedMessage // you can see all dayjs formats on this link https://day.js.org/docs/en/display/format
          id={"currentDate"}
          values={{
            currentDate: dayjs().format("YYYY-M-D")
          }}
        />
      </div>
      <div>
        <FormattedMessage
          id={"currentTime"}
          values={{
            currentTime: dayjs().format("HH:mm:ss")
          }}
        />
      </div>
      <div>
        <FormattedMessage
          id={"currentDateTime"}
          values={{
            currentDateTime: dayjs().format("YYYY-M-D HH:mm:ss")
          }}
        />
      </div>

      <div>
        <FormattedMessage
          id={"lastYearDay"}
          values={{
            lastYearDay: dayjs().endOf("year").format("YYYY-M-D")
          }}
        />
      </div>
      <div>
        <FormattedMessage
          id={"firstMonthDay"}
          values={{
            firstMonthDay: dayjs().startOf("month").format("YYYY-M-D")
          }}
        />
      </div>
      <div>
        <FormattedMessage
          id={"lastMonthDay"}
          values={{
            lastMonthDay: dayjs().endOf("month").format("YYYY-M-D")
          }}
        />
      </div>
      <div>
        <FormattedMessage
          id={"firstWeekDay"}
          values={{
            firstWeekDay: dayjs().startOf("week").format("YYYY-M-D")
          }}
        />
      </div>
      <div>
        <FormattedMessage
          id={"lastWeekDay"}
          values={{
            lastWeekDay: dayjs().endOf("week").format("YYYY-M-D")
          }}
        />
      </div>
      <div>
        <FormattedMessage
          id={"startPreviousDay"}
          values={{
            startPreviousDay: dayjs().subtract(1, "day").startOf("day").format("YYYY-M-D HH:mm:ss")
          }}
        />
      </div>
      <div>
        <FormattedMessage
          id={"startNextDay"}
          values={{
            startNextDay: dayjs().add(1, "day").startOf("day").format("YYYY-M-D HH:mm:ss")
          }}
        />
      </div>
      <div>
        <FormattedMessage
          id={"startCurrentHour"}
          values={{
            startCurrentHour: dayjs().startOf("hour").format("HH:mm:ss")
          }}
        />
      </div>
      <div>
        <FormattedMessage
          id={"endCurrentHour"}
          values={{
            endCurrentHour: dayjs().endOf("hour").format("HH:mm:ss")
          }}
        />
      </div>
      <div>
        <FormattedMessage
          id={"startCurrentMinute"}
          values={{
            startCurrentMinute: dayjs().startOf("minute").format("HH:mm:ss")
          }}
        />
      </div>
      <div>
        <FormattedMessage
          id={"endCurrentMinute"}
          values={{
            endCurrentMinute: dayjs().endOf("minute").format("HH:mm:ss")
          }}
        />
      </div>
      <div>
        <FormattedMessage
          id={"testedNumber"}
          values={{
            testedNumber: <FormattedNumber value={45412.564} maximumFractionDigits={2} />
          }}
        />
      </div>
      <div>

        <FormattedMessage
          values={{
            testedEntityProp: entity?.number ?? "undefined"
          }}
          id={"testedEntityProp"}
        />
      </div>
      <div>
        <FormattedMessage
          id={"nestedTestedEntityProp"}
          values={{
            testedEntityProp: entity?.customer?.name ?? "undefined"
          }}
        />
      </div>
      <div>
        <FormattedMessage
          id={"testedSomeComponentVariable"}
          values={{
            testedSomeComponentVariable: state.someProp
          }}
        />
      </div>
    </Card>
  )
}

const message = getI18n().formatMessage({id: "screen.ParametrizedMessages"}, {currentDate: dayjs().format("YYYY-MM-DD")});
registerScreen({
  component: ParametrizedMessagesScreen,
  caption:  message,
  screenId: "ParametrizedMessagesScreen",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});
