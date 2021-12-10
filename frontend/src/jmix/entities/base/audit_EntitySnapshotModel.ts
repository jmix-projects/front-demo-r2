export class EntitySnapshotModel {
  static NAME = "audit_EntitySnapshotModel";
  id?: string;
  customProperties?: any | null;
  createdBy?: string | null;
  createdDate?: any | null;
  sysTenantId?: string | null;
  fetchPlanXml?: string | null;
  snapshotXml?: string | null;
  entityMetaClass?: string | null;
  snapshotDate?: any | null;
  authorUsername?: string | null;
  entityId?: any | null;
  stringEntityId?: string | null;
  intEntityId?: number | null;
  longEntityId?: any | null;
  datatypeRegistry?: any | null;
  currentAuthentication?: any | null;
  label?: string | null;
  changeDate?: any | null;
}
export type EntitySnapshotModelViewName = "_base" | "_instance_name" | "_local";
export type EntitySnapshotModelView = never;
