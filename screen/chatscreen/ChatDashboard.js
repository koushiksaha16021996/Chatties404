import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatList from '../chatdashboardoption/ChatList';
import RegisterUser from '../chatdashboardoption/RegisterUser';

export default function ChatDashboard({navigation}) {
    const Tab=createMaterialTopTabNavigator();
    return (
        <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#deefed',
          inactiveTintColor: '#70b9b1',
          style: {
            backgroundColor: '#075e54',
          },
          labelStyle: {
            textAlign: 'center',
            fontSize:16,
            fontWeight:"bold"
          },
          indicatorStyle: {
            borderBottomColor: '#deefed',
            borderBottomWidth: 3,
          },
        }}>
            <Tab.Screen name="Home"
            component={ChatList}
            options={{
              tabBarLabel: 'CHATS',
              // tabBarIcon: ({ color, size }) => (
              //   <MaterialCommunityIcons name="home" color={color} size={size} />
              // ),
            }}
            />
            <Tab.Screen name="Reguser"
            component={RegisterUser}
            options={{
              tabBarLabel: 'USERS',
              // tabBarIcon: ({ color, size }) => (
              //   <MaterialCommunityIcons name="home" color={color} size={size} />
              // ),
            }}
            />
      </Tab.Navigator>

    )
}
