/* eslint-disable global-require */

import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import { loadStories } from './stories';

// import stories
configure(loadStories, module);

// This assumes that storybook is running on the same host as your RN packager,
// to set manually use, e.g. host: 'localhost' option
const StorybookUI = getStorybookUI({ port: 7007, onDeviceUI: true });
AppRegistry.registerComponent('APOD', () => StorybookUI);
export default StorybookUI;
