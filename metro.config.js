const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = mergeConfig(getDefaultConfig(__dirname), {
  /* Tu configuración previa de metro aquí */
});

module.exports = withNativeWind(config, { input: './global.css' });