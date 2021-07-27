import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardStack from './dashboard/DashboardStack'
import Account from './dashboard/Account'
import Settings from './dashboard/Settings'
import CustomSidebar from './dashboard/CustomSidebar'
import { MaterialIcons ,MaterialCommunityIcons ,Ionicons } from '@expo/vector-icons';
export default function Profileview() {
    const drawer=createDrawerNavigator()
    return (
        <drawer.Navigator
        initialRouteName="Dashboard"
        drawerContentOptions={{
            activeTintColor: 'white',
            itemStyle: { marginVertical: 5 },
            }}
            drawerContent={(props)=><CustomSidebar {...props}/>}
            >
            <drawer.Screen name="Dashboard"
                options={{
                    drawerIcon:({color,size})=>(<MaterialIcons name="dashboard" size={size} color={color}/>),
                    title: 'Dashboard'
                }}
                component={DashboardStack}/>
            <drawer.Screen name="Account"
                options={{drawerLabel:'Account',
                drawerIcon:({color,size })=>(<MaterialCommunityIcons name="account" size={size} color={color} />)
                }}
                component={Account}/>
            <drawer.Screen name="Settings"
                options={{drawerLabel:"Settings",
                drawerIcon:({color,size })=>(<Ionicons name="settings-outline" size={size} color={color} />)
                }}
                component={Settings}/>
        </drawer.Navigator>
    )
}
