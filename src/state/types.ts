export type WindowId =
  | "hello"
  | "projects"
  | "stack"
  | "status"
  | "education"
  | "contact"
  | "art"
  | "game";

export type WindowStatus = "open" | "closed";

export interface WindowPosition {
  readonly x: number;
  readonly y: number;
}

export interface WindowState {
  readonly id: WindowId;
  readonly status: WindowStatus;
  readonly position: WindowPosition;
  readonly zIndex: number;
  readonly label: string;
  readonly accent: boolean;
}

export interface AppState {
  readonly windows: ReadonlyArray<WindowState>;
  readonly topZ: number;
}
