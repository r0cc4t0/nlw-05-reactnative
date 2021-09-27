import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import PlantSelect from '../pages/PlantSelect';
import MyPlants from '../pages/MyPlants';
import colors from '../../styles/colors';

const tabRoutes = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <tabRoutes.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.green,
        tabBarInactiveTintColor: colors.heading,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: 70
        }
      }}
    >
      <tabRoutes.Screen
        name="Nova Planta"
        component={PlantSelect}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ))
        }}
      />
      <tabRoutes.Screen
        name="Minhas Plantas"
        component={MyPlants}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ))
        }}
      />
    </tabRoutes.Navigator>
  );
};

export default AuthRoutes;
