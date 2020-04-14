import React, { ChangeEvent, useContext } from 'react';

import { LanguageContext } from 'components/LanguageProvider';

const SelectLanguage: React.FC = (): React.ReactElement => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useContext can only be used inside LanguageProvider');
  }

  const { changeLanguage, language, supportedLanguages } = context;

  const renderOptions = (): React.ReactElement[] =>
    Object.keys(supportedLanguages).map(
      (key: string): React.ReactElement => (
        <option key={key} value={key}>
          {supportedLanguages[key]}
        </option>
      ),
    );

  const selectionChanged = (event: ChangeEvent<HTMLSelectElement>): void => changeLanguage(event.target.value);

  return (
    <select onChange={selectionChanged} value={language}>
      {renderOptions()}
    </select>
  );
};

export default SelectLanguage;
