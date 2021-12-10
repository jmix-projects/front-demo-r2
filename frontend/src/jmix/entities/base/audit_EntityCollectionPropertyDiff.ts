import { EntityPropertyDifferenceModel } from "./audit_EntityPropertyDifferenceModel";
export class EntityCollectionPropertyDifferenceModel extends EntityPropertyDifferenceModel {
  static NAME = "audit_EntityCollectionPropertyDiff";
  addedEntities?: EntityPropertyDifferenceModel[] | null;
  removedEntities?: EntityPropertyDifferenceModel[] | null;
  modifiedEntities?: EntityPropertyDifferenceModel[] | null;
}
export type EntityCollectionPropertyDifferenceModelViewName =
  | "_base"
  | "_instance_name"
  | "_local";
export type EntityCollectionPropertyDifferenceModelView = never;
