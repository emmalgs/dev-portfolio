import type { AppState, WindowId, WindowState } from "./types";

const CELL = 28;
const snap = (n: number) => Math.round(n / CELL) * CELL;

const windows: ReadonlyArray<WindowState> = [
  {
    id: "hello",
    label: "HELLO",
    status: "open",
    accent: true,
    zIndex: 10,
    position: { x: snap(16), y: snap(16) },
  },
  {
    id: "projects",
    label: "PROJECTS",
    status: "open",
    accent: false,
    zIndex: 10,
    position: { x: snap(320), y: snap(16) },
  },
  {
    id: "status",
    label: "STATUS",
    status: "open",
    accent: false,
    zIndex: 10,
    position: { x: snap(700), y: snap(16) },
  },
  {
    id: "education",
    label: "EDU",
    status: "open",
    accent: false,
    zIndex: 10,
    position: { x: snap(300), y: snap(224) },
  },
  {
    id: "contact",
    label: "CONTACT",
    status: "open",
    accent: false,
    zIndex: 10,
    position: { x: snap(630), y: snap(224) },
  },
  {
    id: "game",
    label: "GAME",
    status: "open",
    accent: true,
    zIndex: 10,
    position: { x: snap(16), y: snap(462) },
  },
  {
    id: "art",
    label: "ART",
    status: "open",
    accent: false,
    zIndex: 10,
    position: { x: snap(630), y: snap(462) },
  },
];

/** Stable top-to-bottom order when windows stack on narrow viewports. */
export const WINDOW_DISPLAY_ORDER: ReadonlyArray<WindowId> = windows.map((w) => w.id);

export const initialWindowState: AppState = {
  topZ: 10,
  windows,
};
