export const getConfigs = () => {
      return require('../public/config.json');
};

const config = getConfigs();

export default config;
