import { IconDataCustomize } from "../../types/icons";

declare module "oh-vue-icons/dist-css/v3/icon.umd.min" {
  /**
   * Register icons to the component
   */
  export function add(data: IconDataCustomize | IconDataCustomize[]): void;
}
