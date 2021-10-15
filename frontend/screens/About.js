import React, {useEffect, useState} from "react";
import {View, StyleSheet, Text, TextInput, Button, Alert, Dimensions, PermissionsAndroid} from "react-native";
import {Slider} from "react-native-elements/dist/slider/Slider";
import axios from "axios";
import MapView from "react-native-maps";
import * as Location from 'expo-location';


const FeedBack = ({navigation}) => {

  const[name,setName]= useState("");
  const[description,setDescription]= useState("");
  const[email,setEmail]= useState("");
  const[hasLocationPermission,setHasLocationPermission]= useState("")

  const [value, setValue] = useState(0);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    console.log("this is Location"+location)
  }

  const submitForm=()=>{
    axios.post('http://10.0.2.2:8080/feedback', {
      name:name,
      description:description,
     email:email,
      value:value,
      locations:location

    }).then(res => {
      console.log(res);
    }).catch=e=>{
      console.log(e)
    }
    navigation.navigate("Found")
  }


    XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
        GLOBAL.originalXMLHttpRequest :
        GLOBAL.XMLHttpRequest;

    // fetch logger
    global._fetch = fetch;
    global.fetch = function (uri, options, ...args) {
      return global._fetch(uri, options, ...args).then((response) => {
        console.log('Fetch', { request: { options, ...args }, response });
        return response;
      });
    };
    async function requestLocationPermission() {
      try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the location");
          if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined' && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                  console.log(position.coords.latitude, 'success');
                },
                (error) => {
                  console.log(error, 'fail')
                },
                {enableHighAccuracy: false, timeout: 5000, maximumAge: 10000}
            );
          }


        } else {
          console.log("Location permission denied")
        }
      } catch (err) {
        console.warn(err)
      }
    }





  return (
    <View style={styles.center}>
      <Text>3AM Lost and Found</Text>
      <View>
        <TextInput placeholder="Name"  value={name}
                   onChangeText={(text) => setName(text)}/>
        <TextInput
            // secureTextEntry={true}
            placeholder="Email ID"
            value={email}
            onChangeText={(text) => setEmail(text)}
        />
        <TextInput placeholder="description"
                   numberOfLines={3}
                   multiline={true}
                   value={description}
                   onChangeText={(text) => setDescription(text)}

        />
        <Text>
          Rate the services you got from us
        </Text>
        <Slider
            step={1}
            minimumValue={0}
            maximumValue={5}
            value={value}
            onValueChange={slideValue => setValue(slideValue)}
            minimumTrackTintColor="#1fb28a"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#b9e4c9"
        />
        <Text>
          Slide value: {value}
        </Text>

        <Button
            title="SUBMIT"
            onPress={() => submitForm()}
        />
    </View>
      <MapView style={styles.map}
      showsUserLocation={true}/>
      <Text>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  map: {
    alignItems: "flex-end",
    width: 400,
    height: 300,
  },
});
export default FeedBack;
