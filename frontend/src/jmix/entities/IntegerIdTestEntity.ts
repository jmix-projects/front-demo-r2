export class IntegerIdTestEntity {
  static NAME = "IntegerIdTestEntity";
  id?: string;
  description?: string | null;
  createTs?: any | null;
  createdBy?: string | null;
  updateTs?: any | null;
  updatedBy?: string | null;
  deleteTs?: any | null;
  deletedBy?: string | null;
  version?: number | null;
}
export type IntegerIdTestEntityViewName = "_base" | "_instance_name" | "_local";
export type IntegerIdTestEntityView<
  V extends IntegerIdTestEntityViewName
> = V extends "_base"
  ? Pick<
      IntegerIdTestEntity,
      | "id"
      | "description"
      | "createTs"
      | "createdBy"
      | "updateTs"
      | "updatedBy"
      | "deleteTs"
      | "deletedBy"
      | "version"
    >
  : V extends "_instance_name"
  ? Pick<IntegerIdTestEntity, "id" | "description">
  : V extends "_local"
  ? Pick<
      IntegerIdTestEntity,
      | "id"
      | "description"
      | "createTs"
      | "createdBy"
      | "updateTs"
      | "updatedBy"
      | "deleteTs"
      | "deletedBy"
      | "version"
    >
  : never;
