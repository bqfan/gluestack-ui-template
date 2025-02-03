const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.sourceExts = ['js', 'jsx', 'json', 'ts', 'tsx'];
config.resolver.assetExts = ['glb', 'png', 'jpg'];
config.transformer.unstable_allowRequireContext = true;
config.watchFolders = [__dirname, `${__dirname}/src`];

module.exports = config;
