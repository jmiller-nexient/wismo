import React from 'react';
import { mount } from 'enzyme';
import Routes from '..';
import Layout from 'components/Layout';
import NotFoundPage from 'components/NotFoundPage';
import { MemoryRouter } from 'react-router';

describe('<Routes />', () => {
    it('should show Home component for / router (using memory router)', () => {
        const component = mount(<MemoryRouter initialEntries={['/']} >
            <Routes />
        </MemoryRouter>
        );
        expect(component.find(Layout)).toHaveLength(1);
    });
    it('should show No match component for route not defined', () => {
        const component = mount(<MemoryRouter initialEntries={['/unknown']} >
            <Routes />
        </MemoryRouter>
        );
        expect(component.find(NotFoundPage)).toHaveLength(1);
    });
});
