import React, {useCallback, useMemo, useState} from "react";
import {observer} from "mobx-react";
import {DeleteOutlined, EditOutlined, LeftOutlined, PlusOutlined} from "@ant-design/icons";
import {Button, Card, Pagination, Tooltip} from "antd";
import {EntityInstance, EntityPermAccessControl, getFields, toIdString} from "@haulmont/jmix-react-core";
import {
  EntityListProps,
  EntityProperty,
  registerScreen,
  useEntityList,
  useScreenHotkey
} from "@haulmont/jmix-react-web";
import {
  RetryDialog,
  saveHistory,
  Spinner,
  useEntityDeleteCallback,
  useOpenScreenErrorCallback
} from "@haulmont/jmix-react-antd";
import {Customer} from "../../../jmix/entities/Customer";
import {FormattedMessage} from "react-intl";
import {gql} from "@apollo/client";
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

  const [currentPage, setCurrentPage] = useState(1);

  const navigateToNextPage = useCallback(() => {
    if (count == null || currentPage >= Math.ceil(count/10)) return;
    setCurrentPage(page => page+1);
    handlePaginationChange(currentPage+1, 10);
  }, [currentPage, count]);

  const navigateToPrevPage = useCallback(() => {
    if (currentPage <= 1) return;
    setCurrentPage(page => page-1);
    handlePaginationChange(currentPage-1, 10);
  }, [currentPage]);


  useScreenHotkey({
    hotkey: 'n',
    description: 'Go to next page',
    categoryName: 'Customer Cards',
  }, navigateToNextPage);

  useScreenHotkey({
    hotkey: 'p',
    description: 'Go to previous page',
    categoryName: 'Customer Cards',
  }, navigateToPrevPage);


  function onPaginationChange(page: number) {
    setCurrentPage(page);
    handlePaginationChange(page, 10);
  }


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
        <Pagination current={currentPage}
                    total={count}
                    onChange={(page) => {onPaginationChange(page);}}/>
      </div>
    </div>
  );
});

registerScreen({
  screenId: "CustomerCards",
  component: CustomerCards,
  caption: "Entity Cards",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});

export default CustomerCards;
