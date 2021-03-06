import React, { ReactElement, useCallback } from "react";
import { observer } from "mobx-react";
import { PlusOutlined, LeftOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import {EntityPermAccessControl, Screens, useScreens} from "@haulmont/jmix-react-core";
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
import { User } from "../../jmix/entities/User";
import { FormattedMessage } from "react-intl";
import { gql } from "@apollo/client";
import {showChangePasswordComponent, showRoleAssignmentsComponent} from "@haulmont/jmix-addon-user-management";

const ENTITY_NAME = "User";
const ROUTING_PATH = "/userList";

const USER_LIST = gql`
  query UserList(
    $limit: Int
    $offset: Int
    $orderBy: inp_UserOrderBy
    $filter: [inp_UserFilterCondition]
  ) {
    UserCount(filter: $filter)
    UserList(
      limit: $limit
      offset: $offset
      orderBy: $orderBy
      filter: $filter
    ) {
      id
      enabled
      firstName
      lastName
      username
    }
  }
`;

const UserList = observer((props: EntityListProps<User>) => {
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
  } = useEntityList<User>({
    listQuery: USER_LIST,
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

  const screens: Screens = useScreens();

  const handleRoleAssignments = useCallback(() => {
    const value = items?.find(({id}) => {
      return id === entityListState!.selectedEntityId!
    });
    showRoleAssignmentsComponent(value!.username, screens)
  }, [entityListState, items, screens]);

  const handleChangePassword = useCallback(() => {
    const value = items?.find(({id}) => {
      return id === entityListState!.selectedEntityId!
    });
    if (value!.username) {
      showChangePasswordComponent(value!.username, ROUTING_PATH, screens)
    }
  }, [entityListState, items, screens]);

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
      </EntityPermAccessControl>,
      <EntityPermAccessControl
        entityName={ENTITY_NAME}
        operation="update"
        key="roleAssignment"
      >
        <Button
          htmlType="button"
          style={{margin: "0 12px 12px 0"}}
          disabled={entityListState.selectedEntityId == null}
          onClick={handleRoleAssignments}
          key="roleAssignment"
          type="default"
        >
          <FormattedMessage id="jmix.usermgmt.roleAssignments"/>
        </Button>
      </EntityPermAccessControl>,

      <EntityPermAccessControl
        entityName={ENTITY_NAME}
        operation="update"
        key="changePassword"
      >
        <Button
          htmlType="button"
          style={{margin: "0 12px 12px 0"}}
          disabled={entityListState.selectedEntityId == null}
          onClick={handleChangePassword}
          key="changePassword"
          type="default"
        >
          <FormattedMessage id="jmix.usermgmt.changePassword"/>
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
      columnDefinitions={["username", "firstName", "lastName", "enabled"]}
      onRowSelectionChange={handleSelectionChange}
      onFilterChange={handleFilterChange}
      onSortOrderChange={handleSortOrderChange}
      onPaginationChange={handlePaginationChange}
      hideSelectionColumn={true}
      buttons={buttons}
    />
  );
});

registerEntityList({
  component: UserList,
  caption: "screen.UserList",
  screenId: "UserList",
  entityName: ENTITY_NAME,
  menuOptions: {
    pathPattern: `${ROUTING_PATH}/:entityId?`,
    menuLink: ROUTING_PATH
  }
});

export default UserList;
