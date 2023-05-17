

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import Home from './src/screens/Home';
import EventId from './src/screens/EventId';

AppRegistry.registerComponent(appName, () => EventId);
