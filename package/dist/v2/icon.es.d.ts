import { IconDataCustomize } from "../../types/icons";

declare module "oh-vue-icons/dist/v2/icon.es" {
  /**
   * Register icons to the component
   */
  export function add(data: IconDataCustomize | IconDataCustomize[]): void;
}
