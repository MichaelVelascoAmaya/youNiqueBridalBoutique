import withoutTranslations from "./withoutTranslation";
import en from "./en";
import es from "./es";

// defines other information that has no translation
en.withoutTranslations = { ...en.withoutTranslations, ...withoutTranslations }
es.withoutTranslations = { ...es.withoutTranslations, ...withoutTranslations }

export {
  en,
  es
};