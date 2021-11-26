import React, {useCallback, useState} from "react";
import { observer } from "mobx-react";
import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  LeftOutlined
} from "@ant-design/icons";
import {Button, Card, Pagination, Tooltip} from "antd";
import {
  EntityInstance,
  getFields,
  EntityPermAccessControl,
  toIdString
} from "@haulmont/jmix-react-core";
import { Customer } from "../../../jmix/entities/Customer";
import { FormattedMessage } from "react-intl";
import { gql } from "@apollo/client";
import {
  EntityListProps,
  EntityProperty,
  registerScreen,
  useEntityList,
  useScreenHotkey
} from "@haulmont/jmix-react-web";
import {Paging, RetryDialog, Spinner } from "@haulmont/jmix-react-antd";

const ENTITY_NAME = "Customer";
const ROUTING_PATH = "/customerCards";

const CUSTOMER_LIST = gql`
  query CustomerList(
    $limit: Int
    $offset: Int
    $orderBy: inp_CustomerOrderBy
    $filter: [inp_CustomerFilterCondition]
  ) {
    CustomerCount
    CustomerList(
      limit: $limit
      offset: $offset
      orderBy: $orderBy
      filter: $filter
    ) {
      id
      _instanceName
      email
      name
    }
  }
`;

const CustomerCards = observer((props: EntityListProps<Customer>) => {
  const { entityList, onEntityListChange } = props;

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
    onEntityListChange
  });

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

  if (error != null) {
    console.error(error);
    return <RetryDialog onRetry={executeListQuery} />;
  }

  if (loading || items == null) {
    return <Spinner />;
  }

  function onPaginationChange(page: number) {
      setCurrentPage(page);
      handlePaginationChange(page, 10);
  }

  return (
    <div className="narrow-layout">
      <div style={{ marginBottom: "12px" }}>
        {entityList != null && (
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
          actions={[
            <EntityPermAccessControl
              entityName={ENTITY_NAME}
              operation="delete"
            >
              <DeleteOutlined
                key="delete"
                onClick={(event?: React.MouseEvent) =>
                  handleDeleteBtnClick(event, e.id)
                }
              />
            </EntityPermAccessControl>,
            <EntityPermAccessControl
              entityName={ENTITY_NAME}
              operation="update"
            >
              <EditOutlined
                key="edit"
                onClick={(event?: React.MouseEvent) =>
                  handleEditBtnClick(event, e.id)
                }
              />
            </EntityPermAccessControl>
          ]}
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
