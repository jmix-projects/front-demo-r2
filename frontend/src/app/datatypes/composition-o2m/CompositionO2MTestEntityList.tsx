import React, { ReactElement, useCallback } from "react";
import { observer } from "mobx-react";
import { PlusOutlined, LeftOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { EntityPermAccessControl } from "@haulmont/jmix-react-core";
import {
  useEntityList,
  EntityListProps,
  registerEntityList,
  useDefaultBrowserTableHotkeys
} from "@haulmont/jmix-react-web";
import {
  DataTable,
  RetryDialog,
  useOpenScreenErrorCallback,
  useEntityDeleteCallback,
  saveHistory
} from "@haulmont/jmix-react-antd";
import { CompositionO2MTestEntity } from "../../../jmix/entities/CompositionO2MTestEntity";
import { FormattedMessage } from "react-intl";
import { gql } from "@apollo/client";

const ENTITY_NAME = "CompositionO2MTestEntity";
const ROUTING_PATH = "/compositionO2MTestEntityList";

const COMPOSITIONO2MTESTENTITY_LIST = gql`
  query CompositionO2MTestEntityList(
    $limit: Int
    $offset: Int
    $orderBy: inp_CompositionO2MTestEntityOrderBy
    $filter: [inp_CompositionO2MTestEntityFilterCondition]
  ) {
    CompositionO2MTestEntityCount(filter: $filter)
    CompositionO2MTestEntityList(
      limit: $limit
      offset: $offset
      orderBy: $orderBy
      filter: $filter
    ) {
      _instanceName
      id
      name
      quantity
    }
  }
`;

const CompositionO2MTestEntityList = observer(
  (props: EntityListProps<CompositionO2MTestEntity>) => {
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
      onEntityListChange,
      onPagination: saveHistory,
      onEntityDelete,
      onOpenScreenError
    });

    const selectEntityHandler = useCallback(() => {
      if (onSelectEntity != null) {
        const selectedEntityInstance = items?.find(
          ({ id }) => id === entityListState.selectedEntityId
        );
        onSelectEntity(selectedEntityInstance);
        goToParentScreen();
      }
    }, [
      onSelectEntity,
      entityListState.selectedEntityId,
      goToParentScreen,
      items
    ]);

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

    let buttons: ReactElement[] = [];
    if (onSelectEntity != null) {
      buttons = [
        <Button
          htmlType="button"
          style={{ margin: "0 12px 12px 0" }}
          icon={<LeftOutlined />}
          onClick={goToParentScreen}
          key="back"
          type="default"
          shape="circle"
        />,
        <Button
          htmlType="button"
          style={{ margin: "0 12px 12px 0" }}
          type="primary"
          disabled={entityListState.selectedEntityId == null}
          onClick={selectEntityHandler}
          key="selectEntity"
        >
          <span>
            <FormattedMessage id="common.selectEntity" />
          </span>
        </Button>
      ];
    } else if (!readOnlyMode) {
      buttons = [
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
    }

    if (entityList != null) {
      buttons.unshift(
        <Tooltip title={<FormattedMessage id="common.back" />} key="back">
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
  component: CompositionO2MTestEntityList,
  caption: "screen.CompositionO2MTestEntityList",
  screenId: "CompositionO2MTestEntityList",
  entityName: ENTITY_NAME,
  menuOptions: {
    pathPattern: `${ROUTING_PATH}/:entityId?`,
    menuLink: ROUTING_PATH
  }
});

export default CompositionO2MTestEntityList;
