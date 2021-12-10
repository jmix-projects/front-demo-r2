export class EntitySnapshot {
  static NAME = "audit_EntitySnapshot";
  id?: string;
  createdBy?: string | null;
  createdDate?: any | null;
  sysTenantId?: string | null;
  fetchPlanXml?: string | null;
  snapshotXml?: string | null;
  entityMetaClass?: string | null;
  snapshotDate?: any | null;
  authorUsername?: string | null;
  entity?: any | null;
}
export type EntitySnapshotViewName = "_base" | "_instance_name" | "_local";
export type EntitySnapshotView<
  V extends EntitySnapshotViewName
> = V extends "_base"
  ? Pick<
      EntitySnapshot,
      | "id"
      | "createdBy"
      | "createdDate"
      | "sysTenantId"
      | "fetchPlanXml"
      | "snapshotXml"
      | "entityMetaClass"
      | "snapshotDate"
      | "authorUsername"
    >
  : V extends "_local"
  ? Pick<
      EntitySnapshot,
      | "id"
      | "createdBy"
      | "createdDate"
      | "sysTenantId"
      | "fetchPlanXml"
      | "snapshotXml"
      | "entityMetaClass"
      | "snapshotDate"
      | "authorUsername"
    >
  : never;
