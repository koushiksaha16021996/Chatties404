import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import * as firebase from 'firebase'
import { useIsFocused } from '@react-navigation/native'

export default function Signup(props) {
    const area=useSafeArea()
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [error,seterror]=useState(null)
    const isfocused=useIsFocused()
    
    const handleSignup=()=>{
        firebase
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .then(() => props.navigation.navigate("Profileview"))
      .catch(error => seterror(error.message));
    }
    return (
        <View style={{paddingTop:area.top,paddingBottom:area.bottom,width:'100%',height:"100%",justifyContent: "center",alignItems: "center"}}>
            <Text>SignUp</Text>
        {error && (
          <Text style={{ color: "red" }}>{error}</Text>
        )}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => setemail( email )}
          value={email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => setpassword(password)}
          value={password}
        />
        <Button title="signup" onPress={()=>handleSignup()} />
        <Button
          title="Don't have an account? Log In"
          onPress={() => props.navigation.navigate("Login")}
        />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    textInput: {
      height: 40,
      width: "90%",
      borderColor: "gray",
      borderWidth: 1,
      marginTop: 8
    }
  });