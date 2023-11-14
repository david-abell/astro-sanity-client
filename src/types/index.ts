export type FocusableElement =
  | HTMLAnchorElement
  | HTMLButtonElement
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement
  | HTMLDetailsElement;

declare global {
  interface Window {
    closeGallery: () => void;
  }
}

// declaration for node_modules/swiped-events
type Direction = 'up' | 'right' | 'down' | 'left';
type Swiped = {
  dir: Direction;
  touchType: 'direct' | unknown;
  xStart: number;
  xEnd: number;
  yStart: number;
  yEnd: number;
};
declare global {
  interface DocumentEventMap {
    swiped: CustomEvent<Swiped>;
  }
}
