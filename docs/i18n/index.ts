import CN from "./cn";
import EN from "./en";

export default {
  locales: [
    {
      code: "en",
      name: "English",
      icon: "fi-square-gb"
    },
    {
      code: "cn",
      name: "简体中文",
      icon: "fi-square-cn"
    }
  ],
  defaultLocale: "en",
  vueI18n: {
    fallbackLocale: "en",
    messages: {
      en: EN,
      cn: CN
    }
  }
};
