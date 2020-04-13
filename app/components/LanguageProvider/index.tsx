import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';

// Import i18n messages
import { translationMessages } from '../../i18n';

import { DEFAULT_LOCALE } from '../../locales';

interface ILanguageProviderProps {
  children?: React.ReactNode;
  locale?: string;
}

interface ILanguageState {
  changeLanguage: (language: string) => void;
  language: string;
}

const LanguageContext = React.createContext<ILanguageState | null>(null);

const LanguageConsumer = LanguageContext.Consumer;

const LanguageProvider: React.FC<ILanguageProviderProps> = (props: ILanguageProviderProps): React.ReactElement => {
  const { children, locale = DEFAULT_LOCALE } = props;

  const [language, setLanguage] = useState<string>(locale);

  // TODO: Remove the slice operation if regional variants are being supported
  //       E.g. en-CA, en-GB, en-US instead of just en
  const messages = translationMessages[language.length > 2 ? language.slice(0, 2) : language];

  return (
    <LanguageContext.Provider
      value={{
        changeLanguage: setLanguage,
        language,
      }}
    >
      <IntlProvider key={locale} locale={locale} messages={messages}>
        {React.Children.only(children)}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export { LanguageConsumer, LanguageContext, LanguageProvider };
