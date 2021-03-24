export interface IconData {
  name: string;
  minX: number;
  minY: number;
  width: number;
  height: number;
  raw: string;
  attr?: {
    [key: string]: string;
  };
}

export interface IconDataCustomize {
  name: string;
  width: number;
  height: number;
  minX?: number;
  minY?: number;
  raw?: string;
  attr?: {
    [key: string]: string;
  };
  points?: string;
  polygons?: {
    [key: string]: string;
  };
  d?: string;
  paths?: {
    [key: string]: string;
  };
}
