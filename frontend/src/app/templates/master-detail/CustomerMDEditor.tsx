import React from "react";
import { Form, Button } from "antd";
import { useForm } from "antd/es/form/Form";
import { observer } from "mobx-react";
import { FormattedMessage } from "react-intl";
import { gql } from "@apollo/client";
import { Customer } from "../../../jmix/entities/Customer";
import {
  ant_to_jmixFront,
  createUseAntdForm,
  createUseAntdFormValidation,
  Field,
  GlobalErrorsAlert,
  RetryDialog,
  Spinner,
  useChangeConfirm, useCreateAntdResetForm, useEntityPersistCallbacks,
  useMasterDetailEditor,
  useSubmitFailedCallback
} from "@haulmont/jmix-react-antd";
import {createAntdFormValidationMessages, EntityEditorProps} from "@haulmont/jmix-react-web";

const ENTITY_NAME = "Customer";
const ROUTING_PATH = "/customerMDEditor";

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

const CustomerMDEditor = observer((props: EntityEditorProps<Customer>) => {
  const {
    onCommit,
    entityInstance,
    submitBtnCaption = "common.submit"
  } = props;

  const [form] = useForm();
  const onSubmitFailed = useSubmitFailedCallback();
  const { setDirty } = useChangeConfirm();
  const fieldComponentProps = {
    onBlur: setDirty
  };


  const {
    executeLoadQuery,
    loadQueryResult: { loading: queryLoading, error: queryError },
    upsertMutationResult: { loading: upsertLoading },
    serverValidationErrors,
    intl,
    handleSubmit,
    handleCancelBtnClick
  } = useMasterDetailEditor<Customer>({
    loadQuery: LOAD_CUSTOMER,
    upsertMutation: UPSERT_CUSTOMER,
    entityName: ENTITY_NAME,
    routingPath: ROUTING_PATH,
    onCommit,
    entityInstance,
    useEntityEditorForm: createUseAntdForm(form),
    useEntityEditorFormValidation: createUseAntdFormValidation(form),
    resetEntityEditorForm: useCreateAntdResetForm(form),
    persistEntityCallbacks: useEntityPersistCallbacks(),
    uiKit_to_jmixFront: ant_to_jmixFront
  });

  if (queryLoading) {
    return <Spinner />;
  }

  if (queryError != null) {
    console.error(queryError);
    return <RetryDialog onRetry={executeLoadQuery} />;
  }

  return (
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
        componentProps={fieldComponentProps}
      />

      <Field
        entityName={ENTITY_NAME}
        propertyName="name"
        formItemProps={{
          style: { marginBottom: "12px" }
        }}
        componentProps={fieldComponentProps}
      />

      <GlobalErrorsAlert serverValidationErrors={serverValidationErrors} />

      <Form.Item style={{ textAlign: "center" }}>
        <Button htmlType="button" onClick={handleCancelBtnClick}>
          <FormattedMessage id="common.cancel" />
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          loading={upsertLoading}
          style={{ marginLeft: "8px" }}
        >
          <FormattedMessage id={submitBtnCaption} />
        </Button>
      </Form.Item>
    </Form>
  );
});

export default CustomerMDEditor;
