import React, { useMemo } from "react";
import { observer } from "mobx-react";
import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  LeftOutlined
} from "@ant-design/icons";
import { Button, Card, Tooltip } from "antd";
import {
  EntityInstance,
  getFields,
  EntityPermAccessControl,
  toIdString
} from "@haulmont/jmix-react-core";
import {
  EntityProperty,
  useEntityList,
  EntityListProps,
  registerEntityList
} from "@haulmont/jmix-react-web";
import {
  Paging,
  Spinner,
  RetryDialog,
  useOpenScreenErrorCallback,
  useEntityDeleteCallback,
  saveHistory
} from "@haulmont/jmix-react-antd";
import { Customer } from "../../../jmix/entities/Customer";
import { FormattedMessage } from "react-intl";
import { gql } from "@apollo/client";
import styles from "../../../app/App.module.css";

const ENTITY_NAME = "Customer";
const ROUTING_PATH = "/customerCards";

const CUSTOMER_LIST = gql`
  query CustomerList(
    $limit: Int
    $offset: Int
    $orderBy: inp_CustomerOrderBy
    $filter: [inp_CustomerFilterCondition]
  ) {
    CustomerCount(filter: $filter)
    CustomerList(
      limit: $limit
      offset: $offset
      orderBy: $orderBy
      filter: $filter
    ) {
      _instanceName
      email
      id
      name
    }
  }
`;

const CustomerCards = observer((props: EntityListProps<Customer>) => {
  const {
    entityList,
    onEntityListChange,
    onSelectEntity,
    disabled: readOnlyMode
  } = props;
  const onOpenScreenError = useOpenScreenErrorCallback();
  const onEntityDelete = useEntityDeleteCallback();
  const {
    items,
    count,
    executeListQuery,
    listQueryResult: { loading, error },
    handleDeleteBtnClick,
    handleCreateBtnClick,
    handleEditBtnClick,
    handlePaginationChange,
    goToParentScreen,
    entityListState
  } = useEntityList<Customer>({
    listQuery: CUSTOMER_LIST,
    entityName: ENTITY_NAME,
    routingPath: ROUTING_PATH,
    entityList,
    onEntityListChange,
    onPagination: saveHistory,
    onEntityDelete,
    onOpenScreenError
  });

  const getEntityCardsActions = useMemo(() => {
    if (readOnlyMode) {
      return () => [];
    }

    return onSelectEntity
      ? (e: EntityInstance<Customer>) => [
          <Button
            htmlType="button"
            type="primary"
            onClick={() => {
              onSelectEntity(e);
              goToParentScreen();
            }}
          >
            <span>
              <FormattedMessage id="common.selectEntity" />
            </span>
          </Button>
        ]
      : (e: EntityInstance<Customer>) => [
          <EntityPermAccessControl entityName={ENTITY_NAME} operation="delete">
            <DeleteOutlined
              role={"button"}
              key="delete"
              onClick={(event?: React.MouseEvent) =>
                handleDeleteBtnClick(event, e.id)
              }
            />
          </EntityPermAccessControl>,
          <EntityPermAccessControl entityName={ENTITY_NAME} operation="update">
            <EditOutlined
              role={"button"}
              key="edit"
              onClick={(event?: React.MouseEvent) =>
                handleEditBtnClick(event, e.id)
              }
            />
          </EntityPermAccessControl>
        ];
  }, [
    onSelectEntity,
    handleDeleteBtnClick,
    handleEditBtnClick,
    goToParentScreen,
    readOnlyMode
  ]);

  if (error != null) {
    console.error(error);
    return <RetryDialog onRetry={executeListQuery} />;
  }

  if (loading || items == null) {
    return <Spinner />;
  }

  return (
    <div className={styles.narrowLayout}>
      <div style={{ marginBottom: "12px" }}>
        {(entityList != null || onSelectEntity != null) && (
          <Tooltip title={<FormattedMessage id="common.back" />}>
            <Button
              htmlType="button"
              style={{ margin: "0 12px 12px 0" }}
              icon={<LeftOutlined />}
              onClick={goToParentScreen}
              key="back"
              type="default"
              shape="circle"
            />
          </Tooltip>
        )}
        {onSelectEntity == null && !readOnlyMode && (
          <EntityPermAccessControl entityName={ENTITY_NAME} operation="create">
            <span>
              <Button
                htmlType="button"
                type="primary"
                icon={<PlusOutlined />}
                onClick={handleCreateBtnClick}
              >
                <span>
                  <FormattedMessage id="common.create" />
                </span>
              </Button>
            </span>
          </EntityPermAccessControl>
        )}
      </div>

      {items == null || items.length === 0 ? (
        <p>
          <FormattedMessage id="management.browser.noItems" />
        </p>
      ) : null}
      {items.map((e: EntityInstance<Customer>) => (
        <Card
          title={e._instanceName}
          key={e.id ? toIdString(e.id) : undefined}
          style={{ marginBottom: "12px" }}
          actions={getEntityCardsActions(e)}
        >
          {getFields(e).map(p => (
            <EntityProperty
              entityName={ENTITY_NAME}
              propertyName={p}
              value={e[p]}
              key={p}
            />
          ))}
        </Card>
      ))}

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

registerEntityList({
  component: CustomerCards,
  caption: "menu.CustomerCards",
  screenId: "CustomerCards",
  entityName: ENTITY_NAME,
  menuOptions: {
    pathPattern: `${ROUTING_PATH}/:entityId?`,
    menuLink: ROUTING_PATH
  }
});

export default CustomerCards;
