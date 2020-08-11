import { tech } from '../dev-work/data';

export interface TileCard {
    imgSrc?: string;
    route?: string;
    routeExternal?: boolean;
    text: SimpleMessage;
  }

export interface SimpleMessage {
    heading: string;
    body: string;
  }

export interface WorkCard {
    title: string;
    contributions: string[];
    techUsed: tech[];
    description: string;
    imageUrl: string;
  }
