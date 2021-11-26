import React, { useContext } from "react";
import {Form, Alert, Button, Card, Space} from "antd";
import { useForm } from "antd/es/form/Form";
import { observer } from "mobx-react";
import { FormattedMessage } from "react-intl";
import { gql } from "@apollo/client";
import { Customer } from "../../../jmix/entities/Customer";
import {
  createAntdFormValidationMessages,
  EntityEditorProps,
  registerEntityEditor, useDefaultEditorHotkeys,
  useEntityEditor
} from "@haulmont/jmix-react-web";
import {
  ant_to_jmixFront,
  createUseAntdForm, createUseAntdFormValidation,
  Field,
  GlobalErrorsAlert,
  RetryDialog,
  Spinner,
  useEntityPersistCallbacks,
  useSubmitFailedCallback
} from "@haulmont/jmix-react-antd";
import styles from "../../../app/App.module.css";

const ENTITY_NAME = "Customer";
const ROUTING_PATH = "/customerManagementEditor";

const LOAD_CUSTOMER = gql`
  query CustomerById($id: String = "", $loadItem: Boolean!) {
    CustomerById(id: $id) @include(if: $loadItem) {
      id
      _instanceName
      email
      name
    }
  }
`;

const UPSERT_CUSTOMER = gql`
  mutation Upsert_Customer($customer: inp_Customer!) {
    upsert_Customer(customer: $customer) {
      id
    }
  }
`;

const CustomerManagementEditor = observer(
  (props: EntityEditorProps<Customer>) => {
    const {
      onCommit,
      entityInstance,
      submitBtnCaption = "common.submit"
    } = props;

    const [form] = useForm();
    const onSubmitFailed = useSubmitFailedCallback();
    const {
      executeLoadQuery,
      loadQueryResult: { loading: queryLoading, error: queryError },
      upsertMutationResult: { loading: upsertLoading },
      serverValidationErrors,
      intl,
      handleSubmit,
      handleCancelBtnClick
    } = useEntityEditor<Customer>({
      loadQuery: LOAD_CUSTOMER,
      upsertMutation: UPSERT_CUSTOMER,
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
            propertyName="email"
            formItemProps={{
              style: { marginBottom: "12px" }
            }}
          />

          <Field
            entityName={ENTITY_NAME}
            propertyName="name"
            formItemProps={{
              style: { marginBottom: "12px" }
            }}
          />

          <GlobalErrorsAlert serverValidationErrors={serverValidationErrors} />

          <Form.Item style={{ textAlign: "center" }}>
            <Space size={8}>
              <Button htmlType="button" onClick={handleCancelBtnClick}>
                <FormattedMessage id="common.cancel" />
              </Button>
              <Button type="primary" htmlType="submit" loading={upsertLoading}>
                <FormattedMessage id={submitBtnCaption} />
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    );
  }
);

registerEntityEditor({
  component: CustomerManagementEditor,
  caption: "Customer Management Editor",
  screenId: "CustomerManagementEditor",
  entityName: ENTITY_NAME
});

export default CustomerManagementEditor;
