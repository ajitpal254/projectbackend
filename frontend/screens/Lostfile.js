import React from "react";
import { View, Image, FlatList, SafeAreaView, Text,  TouchableOpacity, TextInput} from "react-native";
import  { useState } from 'react';

const Lost = ({navigation}) => {

    const[search,setSearch]= useState("");

    const dummyArray = [
        { id: '1', value: ' Iphone 12',description: 'Iphone 12 Black with leather case with flowers as a wallpaper', photo: require("../LostImages/Lfios.jpg") },
        { id: '2', value: 'IPod',description:'Ipod gen 2 white with headphones', photo: require("../LostImages/lfipod.jpg") },
        { id: '3', value: 'Gents Purse',description:'Brown Tommy marking purse with some cash', photo: require("../LostImages/lfpurse.jpg") },
        { id: '4', value: 'Gents Watch',description:'Fossil watch Silver with chain', photo: require("../LostImages/lfwatch.jpg") },
        { id: '5', value: 'Car Keys',description:'', photo: require("../LostImages/lost-keys.jpg") },
        { id: '6', value: 'wrangler shirt',description:'', photo: require("../test.jpg") },
        { id: '7', value: 'H & M shirt',description:'', photo: require("../test.jpg") },
      ];


        const [listItems, setListItems] = useState(dummyArray);


        const ItemView = ({ item }) => {
          return (


            // Single Comes here which will be repeatative for the FlatListItems
           <View>

             <View style={{flexDirection:'column',marginLeft:10}}>
                 <TouchableOpacity onPress={()=>navigation.navigate('Prodesc', {id:item.id})} >
              <Image source={item.photo} style={{height:150, width:180}}/>
                 </TouchableOpacity>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text onPress={() => getItem(item)}>
                {item.value}
              </Text>
              </View>
               </View>
            </View>
          );
        };

        const ItemSeparatorView = () => {
          return (
            //Item Separator
            <View
              style={{ height: 1, width: '100%', backgroundColor: 'Black' }}
            />
          );
        };

        const getItem = (item) => {
          //Function for click on an item
          alert('Id : ' + item.id + ' Value : ' + item.value);
          console.log("working perfectly");
          navigation.navigate("Prodesc",item);
        };


  return (

    <SafeAreaView style={{ flex: 1 }}>
        <View style={{marginTop:10,justifyContent:'center',alignItems:'center',marginBottom:5}}><TextInput placeholder="Search" /></View>
  <View style={{marginVertical:5,marginHorizontal:10}} >
  <View >
    </View>
    <FlatList
      data={listItems}
      //data defined in constructor
      ItemSeparatorComponent={ItemSeparatorView}
      //Item Separator View
      renderItem={ItemView}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>

</SafeAreaView>

  );
};

export default Lost;
