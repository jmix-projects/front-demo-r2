import React from "react";
import {observer} from "mobx-react";
import {LeftOutlined, PlusOutlined} from "@ant-design/icons";
import {Button, Tooltip} from "antd";
import {EntityPermAccessControl} from "@haulmont/jmix-react-core";
import {DatatypesTestEntity} from "../../../jmix/entities/DatatypesTestEntity";
import {FormattedMessage} from "react-intl";
import {gql} from "@apollo/client";
import {
  EntityListProps,
  registerEntityList,
  useDefaultBrowserTableHotkeys,
  useEntityList
} from "@haulmont/jmix-react-web";
import {DataTable, RetryDialog} from "@haulmont/jmix-react-antd";

const ENTITY_NAME = "DatatypesTestEntity";
const ROUTING_PATH = "/datatypesTestEntityList";

const DATATYPESTESTENTITY_LIST = gql`
  query DatatypesTestEntityList(
    $limit: Int
    $offset: Int
    $orderBy: inp_DatatypesTestEntityOrderBy
    $filter: [inp_DatatypesTestEntityFilterCondition]
  ) {
    DatatypesTestEntityCount
    DatatypesTestEntityList(
      limit: $limit
      offset: $offset
      orderBy: $orderBy
      filter: $filter
    ) {
      id
      _instanceName
      bigDecimalAttr
      booleanAttr
      dateAttr
      dateTimeAttr
      doubleAttr
      enumAttr
      integerAttr
      localDateAttr
      localDateTimeAttr
      localTimeAttr
      longAttr
      name
      offsetDateTimeAttr
      offsetTimeAttr
      stringAttr
      timeAttr
      uuidAttr
    }
  }
`;

const DatatypesTestEntityList = observer(
  (props: EntityListProps<DatatypesTestEntity>) => {
    const { entityList, onEntityListChange } = props;

    const {
      items,
      count,
      relationOptions,
      executeListQuery,
      listQueryResult: { loading, error },
      handleSelectionChange,
      handleFilterChange,
      handleSortOrderChange,
      handlePaginationChange,
      handleDeleteBtnClick,
      handleCreateBtnClick,
      handleEditBtnClick,
      goToParentScreen,
      entityListState
    } = useEntityList<DatatypesTestEntity>({
      listQuery: DATATYPESTESTENTITY_LIST,
      entityName: ENTITY_NAME,
      routingPath: ROUTING_PATH,
      entityList,
      onEntityListChange
    });

    useDefaultBrowserTableHotkeys({
      selectedEntityId: entityListState.selectedEntityId,
      handleCreateBtnClick,
      handleEditBtnClick,
      handleDeleteBtnClick
    });

    if (error != null) {
      console.error(error);
      return <RetryDialog onRetry={executeListQuery} />;
    }

    const buttons = [
      <EntityPermAccessControl
        entityName={ENTITY_NAME}
        operation="create"
        key="create"
      >
        <Button
          htmlType="button"
          style={{ margin: "0 12px 12px 0" }}
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleCreateBtnClick}
        >
          <span>
            <FormattedMessage id="common.create" />
          </span>
        </Button>
      </EntityPermAccessControl>,
      <EntityPermAccessControl
        entityName={ENTITY_NAME}
        operation="update"
        key="update"
      >
        <Button
          htmlType="button"
          style={{ margin: "0 12px 12px 0" }}
          disabled={entityListState.selectedEntityId == null}
          type="default"
          onClick={handleEditBtnClick}
        >
          <FormattedMessage id="common.edit" />
        </Button>
      </EntityPermAccessControl>,
      <EntityPermAccessControl
        entityName={ENTITY_NAME}
        operation="delete"
        key="delete"
      >
        <Button
          htmlType="button"
          style={{ margin: "0 12px 12px 0" }}
          disabled={entityListState.selectedEntityId == null}
          onClick={handleDeleteBtnClick}
          key="remove"
          type="default"
        >
          <FormattedMessage id="common.remove" />
        </Button>
      </EntityPermAccessControl>
    ];

    if (entityList != null) {
      buttons.unshift(
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
      );
    }

    return (
      <DataTable
        items={items}
        count={count}
        relationOptions={relationOptions}
        current={entityListState.pagination?.current}
        pageSize={entityListState.pagination?.pageSize}
        entityName={ENTITY_NAME}
        loading={loading}
        error={error}
        enableFiltersOnColumns={entityList != null ? [] : undefined}
        enableSortingOnColumns={entityList != null ? [] : undefined}
        columnDefinitions={[
          "bigDecimalAttr",
          "booleanAttr",
          "dateAttr",
          "dateTimeAttr",
          "doubleAttr",
          "integerAttr",
          "localDateAttr",
          "localDateTimeAttr",
          "localTimeAttr",
          "longAttr",
          "name",
          "offsetDateTimeAttr",
          "offsetTimeAttr",
          "stringAttr",
          "timeAttr",
          "uuidAttr",
          "enumAttr"
        ]}
        onRowSelectionChange={handleSelectionChange}
        onFilterChange={handleFilterChange}
        onSortOrderChange={handleSortOrderChange}
        onPaginationChange={handlePaginationChange}
        hideSelectionColumn={true}
        buttons={buttons}
      />
    );
  }
);

registerEntityList({
  entityName: ENTITY_NAME,
  screenId: "DatatypesTestEntityList",
  component: DatatypesTestEntityList,
  caption: "Datatypes Test Entity Browse",
  menuOptions: {
    pathPattern: `${ROUTING_PATH}/:entityId?`,
    menuLink: ROUTING_PATH
  }
});


export default DatatypesTestEntityList;
