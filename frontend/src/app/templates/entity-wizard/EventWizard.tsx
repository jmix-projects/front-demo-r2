import {
  Field,
  FormWizardManager,
  FormWizardStep,
  FormWizardStepStatus,
  Spinner,
  RetryDialog,
  GlobalErrorsAlert,
  useEntityEditorFromWizard,
  withFormWizardProvider,
  FormWizardButtons,
  useEntityPersistCallbacks,
  useSubmitFailedCallback,
  ant_to_jmixFront
} from "@haulmont/jmix-react-antd";
import {
  createAntdFormValidationMessages,
  EntityEditorProps,
  registerEntityEditor,
  MultiScreenContext
} from "@haulmont/jmix-react-web";
import { Card } from "antd";
import { observer } from "mobx-react";
import React, { useContext } from "react";
import gql from "graphql-tag";
import styles from "../../../app/App.module.css";
import { Event } from "../../../jmix/entities/Event";

const ENTITY_NAME = "Event";
const ROUTING_PATH = "/eventWizard";

const LOAD_EVENT = gql`
  query EventById($id: String = "", $loadItem: Boolean!) {
    EventById(id: $id) @include(if: $loadItem) {
      _instanceName
      createdBy
      createdDate
      deletedBy
      deletedDate
      description
      displayColor
      endDate
      externalId
      firstSetting
      formattedDescription
      id
      lastModifiedBy
      lastModifiedDate
      logo
      secondSetting
      startDate
      thirdSetting
      title
      version
      widgetSourceCode
    }
  }
`;

const UPSERT_EVENT = gql`
  mutation Upsert_Event($event: inp_Event!) {
    upsert_Event(event: $event) {
      id
    }
  }
`;

const FIELD_NAMES_STEP_1 = [
  "description",
  "displayColor",
  "endDate",
  "externalId"
];

const FIELD_NAMES_STEP_2 = [
  "firstSetting",
  "formattedDescription",
  "logo",
  "secondSetting"
];

const FIELD_NAMES_STEP_3 = [
  "startDate",
  "thirdSetting",
  "title",
  "widgetSourceCode"
];

const EventWizard = withFormWizardProvider(
  observer((props: EntityEditorProps<Event>) => {
    const { entityInstance } = props;
    const multiScreen = useContext(MultiScreenContext);
    const onSubmitFailed = useSubmitFailedCallback();
    const {
      intl,
      executeLoadQuery,
      loadQueryResult: { loading: queryLoading, error: queryError },
      handleSubmit,
      handleSubmitBtn,
      serverValidationErrors,
      handleCancelBtnClick,
      handleNextStep,
      handlePreviousStep,
      handleSelectStep
    } = useEntityEditorFromWizard({
      loadQuery: LOAD_EVENT,
      upsertMutation: UPSERT_EVENT,
      entityId: multiScreen?.params?.entityId,
      entityName: ENTITY_NAME,
      routingPath: ROUTING_PATH,
      entityInstance,
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
      <Card className={styles.narrowLayout}>
        <FormWizardManager
          entityName={ENTITY_NAME}
          onFinish={handleSubmit}
          onFinishFailed={onSubmitFailed}
          validateMessages={createAntdFormValidationMessages(intl)}
        >
          <FormWizardStepStatus onSelectStep={handleSelectStep} />

          <FormWizardStep stepName="step1" fieldNames={FIELD_NAMES_STEP_1}>
            <Field
              entityName={ENTITY_NAME}
              propertyName="description"
              formItemProps={{
                style: { marginBottom: "12px" }
              }}
            />

            <Field
              entityName={ENTITY_NAME}
              propertyName="displayColor"
              formItemProps={{
                style: { marginBottom: "12px" }
              }}
            />

            <Field
              entityName={ENTITY_NAME}
              propertyName="endDate"
              formItemProps={{
                style: { marginBottom: "12px" }
              }}
            />

            <Field
              entityName={ENTITY_NAME}
              propertyName="externalId"
              formItemProps={{
                style: { marginBottom: "12px" }
              }}
            />
          </FormWizardStep>

          <FormWizardStep stepName="step2" fieldNames={FIELD_NAMES_STEP_2}>
            <Field
              entityName={ENTITY_NAME}
              propertyName="firstSetting"
              formItemProps={{
                style: { marginBottom: "12px" }
              }}
            />

            <Field
              entityName={ENTITY_NAME}
              propertyName="formattedDescription"
              formItemProps={{
                style: { marginBottom: "12px" }
              }}
            />

            <Field
              entityName={ENTITY_NAME}
              propertyName="logo"
              formItemProps={{
                style: { marginBottom: "12px" }
              }}
            />

            <Field
              entityName={ENTITY_NAME}
              propertyName="secondSetting"
              formItemProps={{
                style: { marginBottom: "12px" }
              }}
            />
          </FormWizardStep>

          <FormWizardStep stepName="step3" fieldNames={FIELD_NAMES_STEP_3}>
            <Field
              entityName={ENTITY_NAME}
              propertyName="startDate"
              formItemProps={{
                style: { marginBottom: "12px" }
              }}
            />

            <Field
              entityName={ENTITY_NAME}
              propertyName="thirdSetting"
              formItemProps={{
                style: { marginBottom: "12px" }
              }}
            />

            <Field
              entityName={ENTITY_NAME}
              propertyName="title"
              formItemProps={{
                style: { marginBottom: "12px" }
              }}
            />

            <Field
              entityName={ENTITY_NAME}
              propertyName="widgetSourceCode"
              formItemProps={{
                style: { marginBottom: "12px" }
              }}
            />
          </FormWizardStep>

          <GlobalErrorsAlert serverValidationErrors={serverValidationErrors} />

          <FormWizardButtons
            onNextStep={handleNextStep}
            onPreviousStep={handlePreviousStep}
            onSubmit={handleSubmitBtn}
            onCancel={handleCancelBtnClick}
          />
        </FormWizardManager>
      </Card>
    );
  })
);

registerEntityEditor({
  component: EventWizard,
  caption: "screen.EventWizard",
  screenId: "EventWizard",
  entityName: ENTITY_NAME,
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});

export default EventWizard;
