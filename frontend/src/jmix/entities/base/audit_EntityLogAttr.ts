import { EntityLogItem } from "./audit_EntityLog";
export class EntityLogAttr {
  static NAME = "audit_EntityLogAttr";
  id?: string;
  logItem?: EntityLogItem | null;
  name?: string | null;
  value?: string | null;
  oldValue?: string | null;
  valueId?: string | null;
  oldValueId?: string | null;
  messagesPack?: string | null;
}
export type EntityLogAttrViewName = "_base" | "_instance_name" | "_local";
export type EntityLogAttrView = never;
