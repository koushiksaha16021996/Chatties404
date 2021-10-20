import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Text, TouchableOpacity, View ,Image} from 'react-native'
import ChatDashboard from '../chatscreen/ChatDashboard'
import ChatScreen from '../chatscreen/ChatScreen'

export default function DashboardStack({navigation}) {
    const stack=createStackNavigator()
    return (
        <stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#075e54' ,elevation:0},
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' ,fontSize:26}
          }}
          initialRouteName="ChatDashboard">
            <stack.Screen name="ChatDashboard" component={ChatDashboard} 
            options={{ 
                title: 'Chatties', 
                headerLeft: () => (
                    <NavigationDrawerStructure navigationProps={navigation} />
                  )
            }}/>
            <stack.Screen name="ChatScreen" component={ChatScreen} options={{headerShown: false}}/> 
        </stack.Navigator>
    )
}

const NavigationDrawerStructure = (props) => {
    //Structure for the navigatin Drawer
    const toggleDrawer = () => {
      //Props to open/close the drawer
      props.navigationProps.toggleDrawer();
    };
  
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={toggleDrawer}>
          {/*Donute Button Image */}
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
            }}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  };
