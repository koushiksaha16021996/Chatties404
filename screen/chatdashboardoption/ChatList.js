import React from 'react'
import { Text, View } from 'react-native'
import * as firebase from 'firebase'
import { useIsFocused } from '@react-navigation/native'

export default function ChatList({navigation}) {
    const { currentUser } = firebase.auth();
    const isfocused=useIsFocused()

    return (
        <View>
            <Text onPress={()=>navigation.navigate("ChatScreen")}>{currentUser ? currentUser.email : null}</Text>
        </View>
    )
}
