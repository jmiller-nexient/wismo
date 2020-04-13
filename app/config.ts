import IApplicationConfig from 'types/applicationConfig';

// eslint-disable-next-line global-require
export const getConfigs = (): IApplicationConfig => require('../public/config.json');

const config = getConfigs();

export default config;
