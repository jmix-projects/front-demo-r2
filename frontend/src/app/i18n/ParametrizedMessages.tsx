import {Button, Card, Input} from "antd";
import {FormattedMessage, FormattedNumber, useIntl} from "react-intl";
import dayjs from 'dayjs';
import {useState} from "react";
import {useEntityEditorData, useMainStore} from "@haulmont/jmix-react-core";
import {gql} from "@apollo/client";
import {Customer} from "../../jmix/entities/Customer";

export const ParametrizedMessages = () => {

  const mainStore = useMainStore();
  const [state, setStatue] = useState<{ someProp: string }>({ someProp: "some custom property of custom object" });
  const {item: entity, executeLoadQuery} = useEntityEditorData<Customer>({
    entityName: "Customer",
    loadQuery: gql`
      query CustomerById($id: String = "", $loadItem: Boolean!) {
        CustomerById(id: $id) @include(if: $loadItem) {
          id
          _instanceName
          email
          name
        }
      }
    `,
    entityId: '0fd79ee4-be3e-9ecf-8450-068be04dc4a1'
  },);

  const intl = useIntl();

  return(
    <Card className="narrow-layout">
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
            currentDate: dayjs().format("YYYY-M-D"),
          }}
        />
      </div>
      <div>
        <FormattedMessage
          id={"currentTime"}
          values={{
            currentTime: dayjs().format("HH:mm:ss"),
          }}
        />
      </div>
      <div>
        <FormattedMessage
          id={"currentDateTime"}
          values={{
            currentDateTime: dayjs().format("YYYY-M-D HH:mm:ss"),
          }}
        />
      </div>
      <div>
        <FormattedMessage
          id={"firstYearDay"}
          values={{
            firstYearDay: dayjs().startOf("year").format("YYYY-M-D")
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
            lastMonthDay: dayjs().endOf("month").format("YYYY-M-D"),
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
            startNextDay: dayjs().add(1, "day").startOf("day").format("YYYY-M-D HH:mm:ss"),
          }}
        />
      </div>
      <div>
        <FormattedMessage
          id={"startCurrentHour"}
          values={{
            startCurrentHour: dayjs().startOf("hour").format("HH:mm:ss"),
          }}
        />
      </div>
      <div>
        <FormattedMessage
          id={"endCurrentHour"}
          values={{
            endCurrentHour: dayjs().endOf("hour").format("HH:mm:ss"),
          }}
        />
      </div>
      <div>
        <FormattedMessage
          id={"startCurrentMinute"}
          values={{
            startCurrentMinute: dayjs().startOf("minute").format("HH:mm:ss"),
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
          id={"testedEntityProp"}
          values={{
            testedEntityProp: entity?.email ?? "undefined",
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
      <div>
        <FormattedMessage // you can see all propertes of FormattedNumber on this link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters
          id={"allTypesKey"}
          values={{
            testedEntityProp: entity?.name ?? "undefined",
            currentDateTime: dayjs().format("YYYY"),
            testedNumber: <FormattedNumber value={45412.564} maximumFractionDigits={2} /> // maximumFractionDigits - the maximum number of fraction digits to use
          }}
        />
      </div>
      <div>
        <Input addonBefore={
          intl.formatMessage({id: "inputAddon"}, {inputAddonType: "prefix"})}/>
      </div>
    </Card>
  )
}
