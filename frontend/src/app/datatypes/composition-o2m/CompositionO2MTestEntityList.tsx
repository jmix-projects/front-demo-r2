import React from "react";
import {observer} from "mobx-react";
import {LeftOutlined, PlusOutlined} from "@ant-design/icons";
import {Button, Tooltip} from "antd";
import {EntityPermAccessControl} from "@haulmont/jmix-react-core";
import {CompositionO2MTestEntity} from "../../../jmix/entities/CompositionO2MTestEntity";
import {FormattedMessage} from "react-intl";
import {gql} from "@apollo/client";
import {EntityListProps, registerEntityList, useEntityList} from "@haulmont/jmix-react-web";
import {DataTable, RetryDialog} from "@haulmont/jmix-react-antd";

const ENTITY_NAME = "CompositionO2MTestEntity";
const ROUTING_PATH = "/compositionO2MTestEntityList";

const COMPOSITIONO2MTESTENTITY_LIST = gql`
  query CompositionO2MTestEntityList(
    $limit: Int
    $offset: Int
    $orderBy: inp_CompositionO2MTestEntityOrderBy
    $filter: [inp_CompositionO2MTestEntityFilterCondition]
  ) {
    CompositionO2MTestEntityCount
    CompositionO2MTestEntityList(
      limit: $limit
      offset: $offset
      orderBy: $orderBy
      filter: $filter
    ) {
      id
      _instanceName
      name
      quantity
    }
  }
`;

const CompositionO2MTestEntityList = observer(
  (props: EntityListProps<CompositionO2MTestEntity>) => {
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
    } = useEntityList<CompositionO2MTestEntity>({
      listQuery: COMPOSITIONO2MTESTENTITY_LIST,
      entityName: ENTITY_NAME,
      routingPath: ROUTING_PATH,
      entityList,
      onEntityListChange
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
        columnDefinitions={["name", "quantity"]}
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
  screenId: "CompositionO2MTestEntityList",
  component: CompositionO2MTestEntityList,
  caption: "Composition O2M",
  menuOptions: {
    menuLink: ROUTING_PATH,
    pathPattern: `${ROUTING_PATH}/:entityId?`
  }
});

export default CompositionO2MTestEntityList;
