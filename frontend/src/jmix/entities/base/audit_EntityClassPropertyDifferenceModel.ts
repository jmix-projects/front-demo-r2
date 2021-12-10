import { EntityPropertyDifferenceModel } from "./audit_EntityPropertyDifferenceModel";
export class EntityClassPropertyDifferenceModel extends EntityPropertyDifferenceModel {
  static NAME = "audit_EntityClassPropertyDifferenceModel";
}
export type EntityClassPropertyDifferenceModelViewName =
  | "_base"
  | "_instance_name"
  | "_local";
export type EntityClassPropertyDifferenceModelView = never;
