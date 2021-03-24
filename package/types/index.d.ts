import { IconDataCustomize } from "./icons";

declare module "oh-vue-icons" {
  /**
   * Register icons to the component
   */
  export function add(data: IconDataCustomize | IconDataCustomize[]): void;
}

