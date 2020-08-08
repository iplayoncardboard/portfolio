export interface TileCard {
    color?: string;
    imgSrc?: string;
    cols: number;
    rows: number;
    text: SimpleMessage;
  }

export interface SimpleMessage {
    heading: string;
    body: string;
  }
