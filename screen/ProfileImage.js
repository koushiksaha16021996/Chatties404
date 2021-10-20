import React, { useEffect ,useState} from 'react'
import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import avater from "../assets/avater.jpg"
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileImage(props) {
    const [image, setImage] = useState(null);
    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);

      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      }
      const nextpage=()=>{
          if(image==null){
            AsyncStorage.setItem("imageurl","https://firebasestorage.googleapis.com/v0/b/chatties-c15cc.appspot.com/o/avater.jpg?alt=media&token=4eb51b8a-fe7d-4005-b4e9-ca0a1a0dec48")
          }
          else{
            AsyncStorage.setItem("imageurl",image)
          }
          
          props.navigation.navigate("Profileview")
      }
    return (
        <View style={style.container}>
            <View style={style.subcontainer}>
                {image ? <Image source={{uri: image}} style={style.prfilepic} resizeMode="cover"/> : <Image source={avater} style={style.prfilepic} resizeMode="cover"/>}
            </View>
            <View style={style.choosecontainer}>
                <Text style={{fontSize:25,fontWeight:'bold'}}>Choose Image</Text>
                <View style={style.choosemethod}>
                    <FontAwesome name="camera" size={30} color="black" onPress={()=>alert("hi")}/>
                    <FontAwesome name="photo" size={30} color="black" onPress={()=>pickImage()}/>
                </View>
            </View>
            <View style={{width:"40%",alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity style={{width:"100%",alignItems:"center",justifyContent:"center",backgroundColor:"grey"}} onPress={()=>nextpage()}>
                    <Text style={{width:"100%",textAlign:"center",fontSize:15,fontWeight:"bold"}}>Next..</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const style=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        width:Dimensions.width,
        height:Dimensions.height,
    },
    subcontainer:{
        width:250,
        height:250,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:130,
        elevation:8,
        backgroundColor:"black"
    },
    prfilepic:{
        height:240,
        width:240,
        borderRadius:120,
    },
    choosecontainer:{
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-around",
        padding:6,
        width:"50%",
        height:"15%",
    },
    choosemethod:{
        flexDirection:"row",
        justifyContent:'space-around',
        width:"100%",

    }
})