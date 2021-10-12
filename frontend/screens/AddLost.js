import React from 'react';
import {Image, Keyboard, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import {StyleSheet,View} from "react-native";
import {Button,Input,Text} from "react-native-elements";
import {StatusBar} from "expo-status-bar";
import  { useLayoutEffect,useState } from 'react';
import axios from "axios"
import firebase from "firebase";
import * as ImagePicker from "expo-image-picker";



const AddFound = ({navigation}) => {


    const[name,setName]= useState("");
    const[description,setDescription]= useState("");
    const[brand,setBrand]= useState("");
    const[category,setCategory]= useState("");

    const [image,setImage] = useState(null);
    const [uploading,setUploading] = useState(false);

    const addItem = async()=> {
        const Response = await fetch(image);
        const blob =await Response.blob();

        const ref = firebase.storage().ref().child(new Date().toISOString())
        const snapshot = ref.put(blob)

        snapshot.on(firebase.storage.TaskEvent.STATE_CHANGED,()=>{
                setUploading(true)
            },
            (error)=>{
                setUploading(false)
                console.log(error);
                blob.close()
                return
            },
            ()=>{
                snapshot.snapshot.ref.getDownloadURL().then((url)=>{
                    setUploading(false)
                    console.log("download url:",url)
                    //blob.close();
                    return url;
                });
            }
        );
        navigation.navigate("Lost")
        console.log("Clicked")
        axios.post('http://10.0.2.2:8080/lost', {
            //user:user,
            name:name,
            description:description,
            brand:brand,
            category:category,
            image:image
        }).then(res => {
            console.log(res);
        }).catch=e=>{
            console.log(e)
        }
    }
    const PickImage=async() =>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:  ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[4,3],
            quality:1
        })
        console.log(result)
        if(!result.cancelled)
            setImage(result.uri)
        //Reference
    }
    return (
        <KeyboardAvoidingView behavior="height" style={styles.container}>

            <Text h4 style={{marginBottom:50}}>
                Did You Lost Something?
            </Text>
            <View style={styles.inputContainer} >
                <Input
                    onKeyPress={() => {
                        Keyboard.dismiss();
                    }}
                    placeholder="Product Name"
                    autofocus type='text'
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Input
                    placeholder="Description"
                    autofocus type='text'
                    value={description}
                    onChangeText={(text) => setDescription(text)}
                />
                <Input
                    placeholder="brand"
                    autofocus type='text'
                    value={brand}
                    onChangeText={(text) => setBrand(text)}
                />
                <Input
                    placeholder="category"
                    autofocus type='text'
                    value={category}
                    onChangeText={(text) => setCategory(text)}
                />
                <Button title="Choose Image" onPress={PickImage}/>
                {image && <Image source={{uri:image}} style={{width:200,height:200}}   />}
                {/*<Button title="Upload" onPress={uploadimg}/>*/}
                <StatusBar style="auto" />
            </View>

            <TouchableOpacity onPress={()=> addItem()} style={{backgroundColor:'black',borderRadius:5,paddingHorizontal:20,paddingVertical:5}}>
                <Text style={{color:'white'}}>SUBMIT</Text>
            </TouchableOpacity>
            <View style={{height:100}}></View>

        </KeyboardAvoidingView>
    );
};

export default AddFound

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:10,
        backgroundColor:"white",
    },
    inputContainer:{
        width:300,

    },
    button:{
        width:200,
        marginTop:10,
    },
})
