import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text,
    Linking,
  } from 'react-native';
  import { useSafeArea } from 'react-native-safe-area-context'
  import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
  import { SimpleLineIcons } from '@expo/vector-icons';
  import * as firebase from 'firebase'
  import { useIsFocused } from '@react-navigation/native'

export default function CustomSidebar(props) {
    const area= useSafeArea()
    const isfocused=useIsFocused()
    
    const logout=()=>{
      firebase.auth().signOut().then(res=>{
        props.navigation.navigate("Login")
      })
    }
    return (
        <LinearGradient  start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} colors={[ '#12c2e9', '#c471ed', '#FF0080' ]} style={{ flex: 1 ,paddingTop:area.top,paddingBottom:area.bottom,}}>
            <Image
                source={{ uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/react_logo.png" }}
                style={styles.sideMenuProfileIcon}
            />
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem
                  label="Logout"
                  onPress={() => logout()}
                  icon={(size)=>(<SimpleLineIcons name="logout" size={25} color="black" />)}
                />
                {/* <View style={styles.customItem}>
                  <Text
                    onPress={() => {
                      Linking.openURL('https://aboutreact.com/');
                    }}>
                    Rate Us
                  </Text>
                  <Image
                    source={{ uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/react_logo.png" }}
                    style={styles.iconStyle}
                  />
                </View> */}
            </DrawerContentScrollView>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    sideMenuProfileIcon: {
      resizeMode: 'center',
      width: 100,
      height: 100,
      borderRadius: 100 / 2,
      alignSelf: 'center',
    },
    iconStyle: {
      width: 15,
      height: 15,
      marginHorizontal: 5,
    },
    customItem: {
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
    },
  });