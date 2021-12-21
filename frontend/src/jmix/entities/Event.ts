export class Event {
  static NAME = "Event";
  id?: string;
  displayColor?: string | null;
  title?: string | null;
  description?: string | null;
  startDate?: any | null;
  endDate?: any | null;
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
      | "displayColor"
      | "description"
      | "startDate"
      | "endDate"
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
      | "displayColor"
      | "title"
      | "description"
      | "startDate"
      | "endDate"
      | "version"
      | "createdBy"
      | "createdDate"
      | "lastModifiedBy"
      | "lastModifiedDate"
      | "deletedBy"
      | "deletedDate"
    >
  : never;
