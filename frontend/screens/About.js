import React, {useState} from "react";
import {View, StyleSheet, Text, TextInput, Button, Alert} from "react-native";
import {Slider} from "react-native-elements/dist/slider/Slider";
const FeedBack = () => {
  const [value, setValue] = useState(0);
  return (
    <View style={styles.center}>
      <Text>3AM Lost and Found</Text>
      <View>
        <TextInput placeholder="Name" />
        <TextInput
            // secureTextEntry={true}
            placeholder="Email ID"

        />
        <TextInput placeholder="description"
                   numberOfLines={3}
                   multiline={true}

        />
        <Text>
          Rate the services you got from us
        </Text>
        <Slider
            step={1}
            minimumValue={0}
            maximumValue={100}
            value={value}
            onValueChange={slideValue => setValue(slideValue)}
            minimumTrackTintColor="#1fb28a"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#b9e4c9"
        />
        <Text>
          Slide value: {value}%
        </Text>

        <Button
            title="SUBMIT"
            onPress={() => Alert.alert('Simple Button pressed')}
        />
    </View>
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
});
export default FeedBack;
