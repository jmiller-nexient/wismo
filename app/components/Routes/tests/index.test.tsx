import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import Routes from '..';
import Home from 'components/Layout';
import NotFoundPage from 'components/NotFoundPage';

describe('<Routes />', () => {
    it('Should show <Home /> when path is / route (using memory router)', () => {
        const component = mount(<MemoryRouter initialEntries={['/']} >
            <Routes />
        </MemoryRouter>
        );
        expect(component.find(Home)).toHaveLength(1);
    });
    it('Should show <NotFoundPage /> when the path in not found', () => {
        const component = mount(<MemoryRouter initialEntries={['/unknown']} >
            <Routes />
        </MemoryRouter>
        );
        expect(component.find(NotFoundPage)).toHaveLength(1);
    });
});
