import React, { ReactElement, useContext } from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';

import { LanguageProvider, LanguageContext } from 'components/LanguageProvider';

import SelectLanguage from '..';

const FakeConsumer: React.FC = (): React.ReactElement => {
  const context = useContext(LanguageContext);

  return (
    <div id="current-language">
      {context?.language}
    </div>
  );
};

describe('<SelectLanguage />', () => {
  it('should change global state when a new value is selected', () => {
    const component = mount(
      <LanguageProvider locale="en">
        <div>
          <SelectLanguage />
          <FakeConsumer />
        </div>
      </LanguageProvider>
    );

    const select = component.find('select');

    select.simulate('change', {target: { value: 'es'}});

    const consumer = component.find('div#current-language').at(0);

    expect(consumer.text()).toEqual('es');
  });

  it('should render correctly when wrapped in LanguageProvider', () => {
    const tree: ReactElement = renderer.create(
      <LanguageProvider>
        <SelectLanguage />
      </LanguageProvider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should throw an error when not wrapped in LanguageProvider', () => {
    expect(() => shallow(<SelectLanguage />)).toThrowError();
  });
});
