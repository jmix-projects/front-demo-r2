import { observer } from "mobx-react";
import { Card } from "antd";
import { registerScreen } from "@haulmont/jmix-react-web";
import {
  Spinner,
  RetryDialog,
  Calendar,
  useCalendar
} from "@haulmont/jmix-react-antd";
import { gql } from "@apollo/client";
import { Event } from "../../../jmix/entities/Event";

const ENTITY_NAME = "Event";
const ROUTING_PATH = "/eventCalendar";

const EVENT_TITLE_PROPERTY_NAME = "title";
const EVENT_DESCRIPTION_PROPERTY_NAME = "description";
const EVENT_START_DAY_PROPERTY_NAME = "startDate";
const EVENT_END_DAY_PROPERTY_NAME = "endDate";

const EVENT_LIST = gql`
  query EventList(
    $limit: Int
    $offset: Int
    $orderBy: inp_EventOrderBy
    $filter: [inp_EventFilterCondition]
  ) {
    EventCount(filter: $filter)
    EventList(
      limit: $limit
      offset: $offset
      orderBy: $orderBy
      filter: $filter
    ) {
      _instanceName
      createdBy
      createdDate
      deletedBy
      deletedDate
      description
      endDate
      id
      lastModifiedBy
      lastModifiedDate
      startDate
      title
      version
    }
  }
`;

const EventCalendar = observer(() => {
  const {
    events,
    executeListQuery,
    listQueryResult: { loading, error },
    currentMonthDayjs,
    handleCalendarPaginationChange
  } = useCalendar<Event>({
    listQuery: EVENT_LIST,
    routingPath: ROUTING_PATH,
    entityName: ENTITY_NAME,
    eventStartDayPropertyName: EVENT_START_DAY_PROPERTY_NAME,
    eventEndDayPropertyName: EVENT_END_DAY_PROPERTY_NAME,
    eventTitlePropertyName: EVENT_TITLE_PROPERTY_NAME,
    eventDescriptionPropertyName: EVENT_DESCRIPTION_PROPERTY_NAME
  });

  if (error != null) {
    console.error(error);
    return <RetryDialog onRetry={executeListQuery} />;
  }

  if (loading || events == null) {
    return <Spinner />;
  }

  return (
    <Card>
      <Calendar
        events={events}
        value={currentMonthDayjs}
        onPanelChange={handleCalendarPaginationChange}
      />
    </Card>
  );
});

registerScreen({
  component: EventCalendar,
  caption: "screen.EventCalendar",
  screenId: "EventCalendar",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});

export default EventCalendar;
