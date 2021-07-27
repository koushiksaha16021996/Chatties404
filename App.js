import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Signup from './screen/Signup'
import Login from './screen/Login'
import Getstarted from './screen/Getstarted'
import Profileview from './screen/Profileview'
import ProfileImage from './screen/ProfileImage'
import * as firebase from 'firebase'


var firebaseConfig = {
  apiKey: "AIzaSyAU4NyFPBFgVVUA3jJ8u85nIHYdvBFLfOM",
  authDomain: "chatties-c15cc.firebaseapp.com",
  projectId: "chatties-c15cc",
  storageBucket: "chatties-c15cc.appspot.com",
  messagingSenderId: "394371390780",
  appId: "1:394371390780:web:13d2bb653d8426b96bd239",
  measurementId: "G-V9DW1EYTYT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default function App() {
  const stack=createStackNavigator()
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="Getstarted" component={Getstarted}/>
        <stack.Screen name="Login" component={Login}/>
        <stack.Screen name="Signup" component={Signup}/>
        <stack.Screen name="ProfileImage" component={ProfileImage}/>
        <stack.Screen name="Profileview" component={Profileview}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}
