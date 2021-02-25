module.exports = {
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
      cn: require("./cn"),
      en: require("./en")
    }
  }
};
