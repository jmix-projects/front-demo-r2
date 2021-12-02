import {gql, useQuery} from "@apollo/client";
import {useForm} from "antd/es/form/Form";
import {
  ant_to_jmixFront,
  createUseAntdForm, createUseAntdFormValidation, Field, GlobalErrorsAlert,
  useEntityPersistCallbacks,
  useSubmitFailedCallback
} from "@haulmont/jmix-react-antd";
import {createAntdFormValidationMessages, EntityEditorProps, useEntityEditor} from "@haulmont/jmix-react-web";
import {Customer} from "../../../jmix/entities/Customer";
import {Button, Card, Form, Space} from "antd";
import styles from "../../App.module.css";
import {FormattedMessage} from "react-intl";
import React from "react";
import {data} from "@haulmont/jmix-react-core";

const ENTITY_NAME = "Customer";

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

export const UserActionsForms = (props:EntityEditorProps<Customer>) => {

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
    routingPath: "/UserActionsForms",
    onCommit,
    entityInstance,
    persistEntityCallbacks: useEntityPersistCallbacks(),
    uiKit_to_jmixFront: ant_to_jmixFront,
    useEntityEditorForm: createUseAntdForm(form),
    useEntityEditorFormValidation: createUseAntdFormValidation(form)
  });

  //  Validate form fields
  form.validateFields();
  //  Save entity changes
  form.submit();
  //  Save screen changes todo
  form.submit();

  // Load entities through GraphQL query:
  //   - one
  const {data: oneEntity} = useQuery<{CustomerById?: Customer}>(gql`
      query LoadOne {
          CustomerById(id: "") {
              id
              name
          }
      }
  `);


  //   - one optional(todo ?)
  const {data: oneOptionEntity} = useQuery<{CustomerById: Customer | null}>(gql`
      query LoadOne {
          CustomerById(id: "") {
              id
              name
          }
      }
  `);

  //   - list
  const {data: customerList} = useQuery(gql`
      query LoadList {
          CustomerList {
              id
              name
          }
      }
  `);

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
