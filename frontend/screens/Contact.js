import React, {useState} from "react";
import {View, StyleSheet, Text, Button, Alert, TextInput} from "react-native";
const Contact = () => {
  const [value, setValue] = useState(0);
  return (
      <View>
        <Text style={{}}> Contact us  Form </Text>
        <View>
          <TextInput placeholder="Name" />
          <TextInput

              placeholder="Email ID"
          />

          <TextInput
              placeholder="Contact number"
          />
          <TextInput placeholder="description"
                     numberOfLines={3}
                     multiline={true}
          />



          <Text>
            CLICK SUBMIT TO SUBMIT YOUR FORM
          </Text>



          <Button
              title="SUBMIT"
              onPress={() => Alert.alert('Simple Button pressed')}
          />

          <Text>
            ADDRESS :- 265 Yorklan Blvd,North York, TORONTO
            PHONE NUMBER :- 416-485-2098
            EMAILID:- ajit.pal@3am.com

          </Text>



        </View>
      </View>
  )
};
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
export default Contact;
