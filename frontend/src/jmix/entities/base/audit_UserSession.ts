export class UserSession {
  static NAME = "audit_UserSession";
  sessionId?: string | null;
  principalName?: string | null;
  lastRequest?: any | null;
}
export type UserSessionViewName = "_base" | "_instance_name" | "_local";
export type UserSessionView = never;
