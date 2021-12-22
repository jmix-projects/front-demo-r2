import React from "react";
import { observer } from "mobx-react";
import { Card, Space, Collapse } from "antd";
import {
  EntityInstance,
  getFields,
  toIdString
} from "@haulmont/jmix-react-core";
import {
  EntityProperty,
  useEntityList,
  registerScreen
} from "@haulmont/jmix-react-web";
import {
  Paging,
  Spinner,
  RetryDialog,
  saveHistory
} from "@haulmont/jmix-react-antd";
import { Event } from "../../../jmix/entities/Event";
import { gql } from "@apollo/client";
import appStyles from "../../../app/App.module.css";
import styles from "./EventCardsWithDetails.module.css";

const ENTITY_NAME = "Event";
const ROUTING_PATH = "/eventCardsWithDetails";

const MAIN_FIELDS = ["startDate"];

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
      createdDate
      description
      endDate
      id
      startDate
      title
    }
  }
`;

const EventCardsWithDetails = observer(() => {
  const {
    items,
    count,
    executeListQuery,
    listQueryResult: { loading, error },
    handlePaginationChange,
    entityListState
  } = useEntityList<Event>({
    listQuery: EVENT_LIST,
    entityName: ENTITY_NAME,
    routingPath: ROUTING_PATH,
    onPagination: saveHistory
  });

  if (error != null) {
    console.error(error);
    return <RetryDialog onRetry={executeListQuery} />;
  }

  if (loading || items == null) {
    return <Spinner />;
  }

  return (
    <div className={appStyles.narrowLayout}>
      <div role="grid">
        {items.map((item: EntityInstance<Event>) => (
          <Card
            title={item._instanceName}
            key={item.id ? toIdString(item.id) : undefined}
            style={{ marginBottom: "12px" }}
            tabIndex={0}
            className={appStyles.focusInnerHighlight}
            role="gridcell"
          >
            <Space direction="vertical" size="large">
              <Space direction="vertical">
                {getFields(item)
                  .filter(fieldName => MAIN_FIELDS.includes(fieldName))
                  .map(fieldName => (
                    <EntityProperty
                      entityName={ENTITY_NAME}
                      propertyName={fieldName}
                      value={item[fieldName]}
                      key={fieldName}
                    />
                  ))}
              </Space>

              <Collapse ghost style={{ marginLeft: -16, marginRight: -16 }}>
                <Collapse.Panel
                  header="Show details"
                  key="1"
                  className={styles.collapse}
                >
                  <div tabIndex={0} className={appStyles.focusOuterHighlight}>
                    {getFields(item)
                      .filter(fieldName => !MAIN_FIELDS.includes(fieldName))
                      .map(fieldName => (
                        <EntityProperty
                          entityName={ENTITY_NAME}
                          propertyName={fieldName}
                          value={item[fieldName]}
                          key={fieldName}
                        />
                      ))}
                  </div>
                </Collapse.Panel>
              </Collapse>
            </Space>
          </Card>
        ))}
      </div>
      <div style={{ margin: "12px 0 12px 0", float: "right" }}>
        <Paging
          paginationConfig={entityListState.pagination ?? {}}
          onPagingChange={handlePaginationChange}
          total={count}
        />
      </div>
    </div>
  );
});

registerScreen({
  component: EventCardsWithDetails,
  caption: "screen.EventCardsWithDetails",
  screenId: "EventCardsWithDetails",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});

export default EventCardsWithDetails;
