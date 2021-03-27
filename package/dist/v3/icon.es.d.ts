import { IconDataCustomize } from "../../types/icons";

declare module "oh-vue-icons/dist/v3/icon.es" {
  /**
   * Register icons to the component
   */
  export function add(...data: IconDataCustomize[]): void;
}
