export class Event {
  static NAME = "Event";
  id?: string;
  title?: string | null;
  description?: string | null;
  startDate?: any | null;
  endDate?: any | null;
  logo?: any | null;
  externalId?: string | null;
  widgetSourceCode?: string | null;
  displayColor?: string | null;
  firstSetting?: string | null;
  secondSetting?: string | null;
  thirdSetting?: string | null;
  version?: number | null;
  createdBy?: string | null;
  createdDate?: any | null;
  lastModifiedBy?: string | null;
  lastModifiedDate?: any | null;
  deletedBy?: string | null;
  deletedDate?: any | null;
}
export type EventViewName = "_base" | "_instance_name" | "_local";
export type EventView<V extends EventViewName> = V extends "_base"
  ? Pick<
      Event,
      | "id"
      | "title"
      | "description"
      | "startDate"
      | "endDate"
      | "logo"
      | "externalId"
      | "widgetSourceCode"
      | "displayColor"
      | "firstSetting"
      | "secondSetting"
      | "thirdSetting"
      | "version"
      | "createdBy"
      | "createdDate"
      | "lastModifiedBy"
      | "lastModifiedDate"
      | "deletedBy"
      | "deletedDate"
    >
  : V extends "_instance_name"
  ? Pick<Event, "id" | "title">
  : V extends "_local"
  ? Pick<
      Event,
      | "id"
      | "title"
      | "description"
      | "startDate"
      | "endDate"
      | "logo"
      | "externalId"
      | "widgetSourceCode"
      | "displayColor"
      | "firstSetting"
      | "secondSetting"
      | "thirdSetting"
      | "version"
      | "createdBy"
      | "createdDate"
      | "lastModifiedBy"
      | "lastModifiedDate"
      | "deletedBy"
      | "deletedDate"
    >
  : never;
