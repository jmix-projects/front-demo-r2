import { LoggedEntity } from "./audit_LoggedEntity";
export class LoggedAttribute {
  static NAME = "audit_LoggedAttribute";
  id?: string;
  createTs?: any | null;
  createdBy?: string | null;
  entity?: LoggedEntity | null;
  name?: string | null;
}
export type LoggedAttributeViewName = "_base" | "_instance_name" | "_local";
export type LoggedAttributeView<
  V extends LoggedAttributeViewName
> = V extends "_base"
  ? Pick<LoggedAttribute, "id" | "createTs" | "createdBy" | "name">
  : V extends "_local"
  ? Pick<LoggedAttribute, "id" | "createTs" | "createdBy" | "name">
  : never;
