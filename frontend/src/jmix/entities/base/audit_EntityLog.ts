import { Type } from "../../enums/enums";
import { EntityLogAttr } from "./audit_EntityLogAttr";
export class EntityLogItem {
  static NAME = "audit_EntityLog";
  id?: string;
  createTs?: any | null;
  createdBy?: string | null;
  eventTs?: any | null;
  username?: string | null;
  type?: Type | null;
  entity?: string | null;
  entityRef?: any | null;
  entityInstanceName?: string | null;
  changes?: string | null;
  sysTenantId?: string | null;
  attributes?: EntityLogAttr[] | null;
}
export type EntityLogItemViewName = "_base" | "_instance_name" | "_local";
export type EntityLogItemView<
  V extends EntityLogItemViewName
> = V extends "_base"
  ? Pick<
      EntityLogItem,
      | "id"
      | "createTs"
      | "createdBy"
      | "eventTs"
      | "username"
      | "type"
      | "entity"
      | "entityInstanceName"
      | "changes"
      | "sysTenantId"
    >
  : V extends "_local"
  ? Pick<
      EntityLogItem,
      | "id"
      | "createTs"
      | "createdBy"
      | "eventTs"
      | "username"
      | "type"
      | "entity"
      | "entityInstanceName"
      | "changes"
      | "sysTenantId"
    >
  : never;
