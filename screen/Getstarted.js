import React, { useEffect } from 'react'
import { Text, View , ActivityIndicator} from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import * as firebase from 'firebase'
import { useIsFocused } from '@react-navigation/native'

export default function Getstarted(props) {
    const area=useSafeArea()
    const isfocused=useIsFocused()
    useEffect(()=>{
        firebase.auth().onAuthStateChanged(user=>{
            props.navigation.navigate(user ? "Profileview" : "Login")
        })
    },[isfocused])
    
    return (
        <View style={{paddingTop:area.top,paddingBottom:area.bottom,width:'100%',height:"100%"}}>
            <ActivityIndicator size="large" />
        </View>
    )
}
