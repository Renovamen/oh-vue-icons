export const localePath = (path: string) => {
  const { locale } = useI18n();
  const prefix = locale.value === "en" ? "" : `/${locale.value}`;
  return `${prefix}${path[0] === "/" ? "" : "/"}${path}`;
};

export const switchLocalePath = (toLocale: string) => {
  const { locale } = useI18n();
  const route = useRoute();

  const basePath =
    locale.value === "en"
      ? route.path
      : route.path.replace(`/${locale.value}`, "");

  const toPath = toLocale === "en" ? basePath : `/${toLocale}${basePath}`;
  return toPath;
};
