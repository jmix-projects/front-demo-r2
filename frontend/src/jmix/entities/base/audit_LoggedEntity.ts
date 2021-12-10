import { LoggedAttribute } from "./audit_LoggedAttribute";
export class LoggedEntity {
  static NAME = "audit_LoggedEntity";
  id?: string;
  createTs?: any | null;
  createdBy?: string | null;
  name?: string | null;
  auto?: boolean | null;
  manual?: boolean | null;
  attributes?: LoggedAttribute[] | null;
}
export type LoggedEntityViewName = "_base" | "_instance_name" | "_local";
export type LoggedEntityView<V extends LoggedEntityViewName> = V extends "_base"
  ? Pick<
      LoggedEntity,
      "id" | "createTs" | "createdBy" | "name" | "auto" | "manual"
    >
  : V extends "_local"
  ? Pick<
      LoggedEntity,
      "id" | "createTs" | "createdBy" | "name" | "auto" | "manual"
    >
  : never;
