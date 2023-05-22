import { View, Text, Alert } from 'react-native';
import React, { useEffect } from 'react'
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import EventId from './src/screens/event/EventId';
import Home from './src/screens/Home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import Search from './src/screens/Search/Search';
import Person from './src/screens/Person/Person';
export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Куда GO' }} />
        <Stack.Screen name="EventId" component={EventId} options={{ title: 'Куда GO' }} />
        <Stack.Screen name="Person" component={Person} options={{ title: 'Куда GO' }} />
      </Stack.Navigator>
    )
  }
  return <NavigationContainer  >
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarAllowFontScaling: true,
        tabBarStyle: { position: 'relative', margin: 10, borderRadius: 10, },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Homes" component={HomeStack} options={{
        tabBarIcon: ({ color, size, focused }) => (
          <Icon
            style={focused ? { position: 'absolute', bottom: 30, borderColor: '#d4d5d800', borderBottomWidth: 3, backgroundColor: '#fff', borderRadius: 50, paddingTop: 15, width: 50, height: 50, alignItems: 'center', textAlign: 'center', justifyContent: 'center', } : { color: 'black', bottom: 0 }}
            name="ios-home-outline"
            type={IconType.Feather}
            color={focused ? color : "black"} size={focused ? 20 : 15} />
        ),
      }} />
      <Tab.Screen name="Search" component={Search} options={{
        tabBarIcon: ({ color, size, focused }) => (
          <Icon
            style={focused ? { position: 'absolute', bottom: 30, borderColor: '#d4d5d800', borderBottomWidth: 3, backgroundColor: '#fff', borderRadius: 50, paddingTop: 15, width: 50, height: 50, alignItems: 'center', textAlign: 'center', justifyContent: 'center', } : { color: 'black', bottom: 0 }}
            name="ios-home-outline"
            type={IconType.Feather}
            color={focused ? color : "black"} size={focused ? 20 : 15} />
        ),
      }} />
    </Tab.Navigator>
  </NavigationContainer>
}