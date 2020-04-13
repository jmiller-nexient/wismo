/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */
import { DEFAULT_LOCALE } from './locales';

const enTranslationMessages = require('translations/en.json');
const esTranslationMessages = require('translations/es.json');

// The purpose of this method is to apply fallback logic when a translation
// is not defined for the current locale.
// In our case, we do not want any fallback logic.
// tslint:disable-next-line: typedef
const formatTranslationMessages = (locale: string, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages) : {};

  // tslint:disable-next-line: typedef
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE ? defaultFormattedMessages[key] : messages[key];

    return { ...formattedMessages, [key]: formattedMessage };
  };

  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  es: formatTranslationMessages('es', esTranslationMessages),
};
