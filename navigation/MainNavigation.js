import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Inicio from '../screens/Home';
import Book from '../screens/Book';

const Stack = createStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#8b5cf6',
          },
          headerTitleStyle: {
            color: '#fff',
            fontWeight: '500',
          },
        }}>
        <Stack.Screen name="Libros" component={Inicio} />
        <Stack.Screen
          name="Libro"
          component={Book}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
