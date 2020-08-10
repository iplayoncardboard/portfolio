import { tech } from '../dev-work/data';

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

export interface WorkCard {
    title: string;
    contributions: string[  ];
    techUsed: tech[];
    description: string;
    imageUrl: string;
  }
