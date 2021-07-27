import React from 'react'
import { Text, View } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'

export default function Account() {
    const area= useSafeArea()
    return (
        <View style={{paddingTop:area.top,paddingBottom:area.bottom,width:'100%',height:"100%"}}>
            <Text>acount</Text>
        </View>
    )
}
