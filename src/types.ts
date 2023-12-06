export interface LTWH {
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface LTWHP extends LTWH {
  pageNumber?: number;
}

export interface Scaled {
  x1: number;
  y1: number;

  x2: number;
  y2: number;

  width: number;
  height: number;

  pageNumber?: number;
}

export interface Position {
  boundingRect: LTWHP;
  rects: Array<LTWHP>;
  pageNumber: number;
}

export interface ScaledPosition {
  boundingRect: Scaled;
  rects: Array<Scaled>;
  pageNumber: number;
  usePdfCoordinates?: boolean;
}

export interface Content {
  text?: string;
  image?: string;
}

export interface HighlightContent {
  content: Content;
}

export interface Comment {
  text: string;
  emoji: string;
}

export interface HighlightComment {
  comment: Comment;
}

export interface NewHighlight extends HighlightContent, HighlightComment {
  position: ScaledPosition;
}

export interface IHighlight extends NewHighlight {
  id: string;
}

export interface ViewportHighlight extends HighlightContent, HighlightComment {
  position: Position;
}

export interface Viewport {
  convertToPdfPoint: (x: number, y: number) => Array<number>;
  convertToViewportRectangle: (pdfRectangle: Array<number>) => Array<number>;
  width: number;
  height: number;
}

export interface Page {
  node: HTMLElement;
  number: number;
}

export interface OnSelectionFinishedProps {
  position: ScaledPosition;
  content: {
    text?: string;
    image?: string;
  };
  hideTipAndSelection: () => void;
  transformSelection: () => void;
}

export type OnSelectionFinished = (
  props: OnSelectionFinishedProps
) => JSX.Element | null;

export interface HighlightTransformProps {
  highlight: any;
  index: number;
  setTip: (highlight: any, callback: (highlight: any) => JSX.Element) => void;
  hideTip: () => void;
  viewportToScaled: (rect: LTWHP) => Scaled;
  screenshot: (position: LTWH) => string;
  isScrolledTo: boolean;
}

export type HighlightTransform = (
  props: HighlightTransformProps
) => JSX.Element;
