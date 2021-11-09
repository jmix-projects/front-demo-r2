import React from "react";
import {Button, Card, Form} from "antd";
import {useForm} from "antd/es/form/Form";
import {observer} from "mobx-react";
import {FormattedMessage} from "react-intl";
import {gql} from "@apollo/client";
import {DeeplyNestedTestEntity} from "../../../jmix/entities/DeeplyNestedTestEntity";
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
import {
  createAntdFormValidationMessages,
  EntityEditorProps,
  registerEntityEditor,
  useEntityEditor
} from "@haulmont/jmix-react-web";
import styles from "../../../app/App.module.css";

const ENTITY_NAME = "DeeplyNestedTestEntity";
const ROUTING_PATH = "/deeplyNestedTestEntityEdit";

const LOAD_DEEPLYNESTEDTESTENTITY = gql`
  query DeeplyNestedTestEntityById($id: String = "", $loadItem: Boolean!) {
    DeeplyNestedTestEntityById(id: $id) @include(if: $loadItem) {
      id
      _instanceName
      name
    }
  }
`;

const UPSERT_DEEPLYNESTEDTESTENTITY = gql`
  mutation Upsert_DeeplyNestedTestEntity(
    $deeplyNestedTestEntity: inp_DeeplyNestedTestEntity!
  ) {
    upsert_DeeplyNestedTestEntity(
      deeplyNestedTestEntity: $deeplyNestedTestEntity
    ) {
      id
    }
  }
`;

const DeeplyNestedTestEntityEdit = observer(
  (props: EntityEditorProps<DeeplyNestedTestEntity>) => {
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
    } = useEntityEditor<DeeplyNestedTestEntity>({
      loadQuery: LOAD_DEEPLYNESTEDTESTENTITY,
      upsertMutation: UPSERT_DEEPLYNESTEDTESTENTITY,
      entityName: ENTITY_NAME,
      routingPath: ROUTING_PATH,
      onCommit,
      entityInstance,
      persistEntityCallbacks: useEntityPersistCallbacks(),
      uiKit_to_jmixFront: ant_to_jmixFront,
      useEntityEditorForm: createUseAntdForm(form),
      useEntityEditorFormValidation: createUseAntdFormValidation(form)
    });

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
            propertyName="name"
            formItemProps={{
              style: { marginBottom: "12px" }
            }}
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
      </Card>
    );
  }
);

registerEntityEditor({
  entityName: ENTITY_NAME,
  screenId: "DeeplyNestedTestEntityEdit",
  component: DeeplyNestedTestEntityEdit,
  caption: "deeplyNestedTestEntityEdit"
})

export default DeeplyNestedTestEntityEdit;
