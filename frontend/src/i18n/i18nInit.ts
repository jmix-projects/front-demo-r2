/**
 * To add new locale we need to
 * - register it in localesStore ('initializeLocales' function)
 * - register it in 'antdLocalesStore' ('addAntdLocale' function)
 * - register dayjs locale (as import below)
 */
import { localesStore } from "@haulmont/jmix-react-web";
import {antdLocalesStore, initializeI18n} from "@haulmont/jmix-react-antd";
import en from "./en.json";
import en_US from "antd/es/locale/en_US";
import ru from "./ru.json";
import ru_RU from "antd/es/locale/ru_RU";
import ar_EG from "antd/es/locale/ar_EG";
import fr_FR from "antd/es/locale/fr_FR";
import "dayjs/locale/en";
import "dayjs/locale/ru";
import "dayjs/locale/fr";
import fr from "./fr.json";

localesStore.addLocale({
  locale: "en",
  caption: "English",
  messages: en
});

antdLocalesStore.addAntdLocale({
  localeName: "en",
  antdLocale: en_US
});

localesStore.addLocale({
  locale: "ru",
  caption: "Русский",
  messages: ru
});

antdLocalesStore.addAntdLocale({
  localeName: "ru",
  antdLocale: ru_RU
});

localesStore.addLocale({
  locale: "ar",
  caption: "RTL demo",
  messages: en,
  isRtlLayout: true
});

antdLocalesStore.addAntdLocale({
  localeName: "ar",
  antdLocale: ar_EG
});


localesStore.addLocale({
  locale: "fr",
  caption: "Françias",
  messages: fr,
});

antdLocalesStore.addAntdLocale({
  localeName: "fr",
  antdLocale: fr_FR
});

initializeI18n({
  defaultLocale: "en",
  getMessages: locale => localesStore.messagesMapping[locale]
});