export class AssociationM2OTestEntity {
  static NAME = "AssociationM2OTestEntity";
  id?: string;
  name?: string | null;
}
export type AssociationM2OTestEntityViewName =
  | "_base"
  | "_instance_name"
  | "_local";
export type AssociationM2OTestEntityView<
  V extends AssociationM2OTestEntityViewName
> = V extends "_base"
  ? Pick<AssociationM2OTestEntity, "id" | "name">
  : V extends "_instance_name"
  ? Pick<AssociationM2OTestEntity, "id" | "name">
  : V extends "_local"
  ? Pick<AssociationM2OTestEntity, "id" | "name">
  : never;
