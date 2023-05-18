

import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import Home from './src/screens/Home/Home';
import EventId from './src/screens/event/EventId';

AppRegistry.registerComponent(appName, () => Home);
