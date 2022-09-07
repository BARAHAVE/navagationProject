import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import { styles } from "../App";

const FirstPage = ({ navigation }) => {
  const [postText, setPostText] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.heading}>Thai-Nichi Institute of Technology</Text>
        <Text style={styles.textStyle}>
          please insert your name to pass it to second screen
        </Text>
        <TextInput
          placeholder="Plese text here"
          style={{
            width: 300,
            padding: 10,
            backgroundColor: "#FBF8F1",
            marginBottom: 10,
          }}
          onChangeText={setPostText}
          value={postText}
        />
        <Button
        color="#DC2020"
          title="Click Me"
          onPress={() => navigation.navigate("Second Page", { postText })}
        />
      </View>
      <Text style={styles.textStyle}>www.tni.ac.th</Text>
    </View>
  );
};

export default FirstPage;
