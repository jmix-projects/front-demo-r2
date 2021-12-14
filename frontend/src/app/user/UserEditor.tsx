import React from "react";
import { Form, Button, Card, Space } from "antd";
import { useForm } from "antd/es/form/Form";
import { observer } from "mobx-react";
import { FormattedMessage } from "react-intl";
import {
  createUseAntdForm,
  createUseAntdFormValidation,
  RetryDialog,
  Field,
  GlobalErrorsAlert,
  Spinner,
  useEntityPersistCallbacks,
  useSubmitFailedCallback,
  ant_to_jmixFront
} from "@haulmont/jmix-react-antd";
import {
  createAntdFormValidationMessages,
  useEntityEditor,
  EntityEditorProps,
  registerEntityEditor,
  useDefaultEditorHotkeys
} from "@haulmont/jmix-react-web";
import { gql } from "@apollo/client";
import styles from "../../app/App.module.css";
import { User } from "../../jmix/entities/User";

const ENTITY_NAME = "User";
const ROUTING_PATH = "/userEditor";

const LOAD_USER = gql`
  query UserById($id: String = "", $loadItem: Boolean!) {
    UserById(id: $id) @include(if: $loadItem) {
      id
      _instanceName
      email
      enabled
      firstName
      lastName
      username
    }
  }
`;

const UPSERT_USER = gql`
  mutation Upsert_User($user: inp_User!) {
    upsert_User(user: $user) {
      id
    }
  }
`;

const UserEditor = observer((props: EntityEditorProps<User>) => {
  const {
    onCommit,
    entityInstance,
    submitBtnCaption = "common.submit",
    disabled: readOnlyMode
  } = props;
  const [form] = useForm();
  const onSubmitFailed = useSubmitFailedCallback();
  const {
    item,
    executeLoadQuery,
    loadQueryResult: { loading: queryLoading, error: queryError },
    upsertMutationResult: { loading: upsertLoading },
    serverValidationErrors,
    intl,
    handleSubmit,
    handleCancelBtnClick
  } = useEntityEditor<User>({
    loadQuery: LOAD_USER,
    upsertMutation: UPSERT_USER,
    entityName: ENTITY_NAME,
    routingPath: ROUTING_PATH,
    onCommit,
    entityInstance,
    persistEntityCallbacks: useEntityPersistCallbacks(),
    uiKit_to_jmixFront: ant_to_jmixFront,
    useEntityEditorForm: createUseAntdForm(form),
    useEntityEditorFormValidation: createUseAntdFormValidation(form)
  });

  useDefaultEditorHotkeys({ saveEntity: form.submit });

  if (item) {
    form.setFieldsValue({'enabled': item.enabled})
  } else {
    form.setFieldsValue({'enabled': true})
  }

  if (queryLoading) {
    return <Spinner />;
  }

  if (queryError != null) {
    console.error(queryError);
    return <RetryDialog onRetry={executeLoadQuery} />;
  }

  return (
    <Card className={styles.narrowLayout}>
      <Form
        onFinish={handleSubmit}
        onFinishFailed={onSubmitFailed}
        layout="vertical"
        form={form}
        validateMessages={createAntdFormValidationMessages(intl)}
      >
        <Field
          entityName={ENTITY_NAME}
          propertyName="username"
          disabled={readOnlyMode}
          formItemProps={{
            style: { marginBottom: "12px" },
            rules: [{ required: true }]
          }}
        />

        <Field
          entityName={ENTITY_NAME}
          propertyName="firstName"
          disabled={readOnlyMode}
          formItemProps={{
            style: { marginBottom: "12px" }
          }}
        />

        <Field
          entityName={ENTITY_NAME}
          propertyName="lastName"
          disabled={readOnlyMode}
          formItemProps={{
            style: { marginBottom: "12px" }
          }}
        />

        <Field
          entityName={ENTITY_NAME}
          propertyName="email"
          disabled={readOnlyMode}
          formItemProps={{
            style: { marginBottom: "12px" }
          }}
        />

        <Field
          entityName={ENTITY_NAME}
          propertyName="enabled"
          disabled={readOnlyMode}
          formItemProps={{
            style: { marginBottom: "12px" },
            valuePropName: "checked"
          }}
        />

        <GlobalErrorsAlert serverValidationErrors={serverValidationErrors} />

        <Form.Item style={{ textAlign: "center" }}>
          <Space size={8}>
            <Button htmlType="button" onClick={handleCancelBtnClick}>
              <FormattedMessage
                id={readOnlyMode ? "common.back" : "common.cancel"}
              />
            </Button>
            {!readOnlyMode && (
              <Button type="primary" htmlType="submit" loading={upsertLoading}>
                <FormattedMessage id={submitBtnCaption} />
              </Button>
            )}
          </Space>
        </Form.Item>
      </Form>
    </Card>
  );
});

registerEntityEditor({
  component: UserEditor,
  caption: "screen.UserEditor",
  screenId: "UserEditor",
  entityName: ENTITY_NAME,
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});

export default UserEditor;
