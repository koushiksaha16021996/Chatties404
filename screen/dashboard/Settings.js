import React from 'react'
import { Text, View } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'

export default function Settings() {
    const area=useSafeArea()
    return (
        <View style={{paddingTop:area.top,paddingBottom:area.bottom,width:'100%',height:"100%"}}>
            <Text>settings</Text>
        </View>
    )
}
