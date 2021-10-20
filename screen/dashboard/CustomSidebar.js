import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useState } from 'react'
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
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CustomSidebar(props) {
    const area= useSafeArea()
    const isfocused=useIsFocused()
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [imageurl,setimageurl]=useState("https://firebasestorage.googleapis.com/v0/b/chatties-c15cc.appspot.com/o/avater.jpg?alt=media&token=4eb51b8a-fe7d-4005-b4e9-ca0a1a0dec48")
    useEffect(()=>{
      AsyncStorage.getItem("email").then(data=>{
        setemail(data)
      })
      AsyncStorage.getItem("uname").then(data=>{
        setname(data)
      })
      AsyncStorage.getItem("imageurl").then(data=>{
        setimageurl(data)
      })
    },[isfocused])
    const logout=()=>{
      firebase.auth().signOut().then(res=>{
        props.navigation.navigate("Login")
      })
    }
    return (
        <LinearGradient  start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} colors={[ '#12c2e9', '#c471ed', '#FF0080' ]} style={{ flex: 1 ,paddingTop:area.top,paddingBottom:area.bottom,}}>
            <Image
                source={{uri:imageurl}}
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