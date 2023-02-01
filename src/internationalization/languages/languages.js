import withoutTranslations from "./withoutTranslation";
import en from "./en";
import es from "./es";

// defines other information that has no translation
en.others = { ...en.others, ...withoutTranslations }
es.others = { ...es.others, ...withoutTranslations }

export {
  en,
  es
};