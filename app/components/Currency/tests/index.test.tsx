import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

import { IntlProvider } from 'react-intl';
import { translationMessages } from 'i18n';

import Currency from '..';

describe('<Currency />', () => {
    it('should render correctly when currency has value of number 1000', () => {
        const tree: ReactTestRendererJSON | null = renderer.create(
            <IntlProvider locale="en" messages={translationMessages.en}>
                <Currency type="USD" value={1000} />
            </IntlProvider>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render correctly when currency has value of string ".59"', () => {
        const tree: ReactTestRendererJSON | null = renderer.create(
            <IntlProvider locale="en" messages={translationMessages.en}>
                <Currency type="USD" value=".59" />
            </IntlProvider>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render correctly when currency has value of string "1"', () => {
        const tree: ReactTestRendererJSON | null = renderer.create(
            <IntlProvider locale="en" messages={translationMessages.en}>
                <Currency type="USD" value="1" />
            </IntlProvider>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render correctly when currency has value of number -1.23', () => {
        const tree: ReactTestRendererJSON | null = renderer.create(
            <IntlProvider locale="en" messages={translationMessages.en}>
                <Currency type="USD" value={-1.23} />
            </IntlProvider>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
