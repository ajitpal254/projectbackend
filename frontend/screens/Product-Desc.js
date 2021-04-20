import React, {useEffect, useState} from "react";
import {View, StyleSheet, Text, TouchableOpacity, Button, Image} from "react-native";
import products from "../data/data";
import data from "../data/data";
import {Input} from "react-native-elements";


const Productdescript = ({route,navigation}) => {
    const {id} = route.params;




console.log(id)

    return (
        <View style={styles.center}>
            <Text>{data.map((data)=>{
                return(
                    data.id ===id?
                        <View>
                            <Image source={data.photo} style={{height:350, width:350}}/>
                            <Text style={{fontSize:28}}>{data.value}</Text>
                            <Text style={{fontSize:22}}>{data.description}</Text>

                        </View>
                       :console.log("no match")
                )
            })}

            </Text>
        </View>
    );[]
};
const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
});
export default Productdescript;
