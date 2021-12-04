import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Card, CardItem } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getAuth } from "firebase/auth";

const ChatBox = ({ userId, msg, AdvogadoImagem, onImgTap }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  let isCurrentUser = userId === auth.lastNotifiedUid ? true : false;
  return (
    <Card
      transparent
      style={{
        maxWidth: 160,
        alignSelf: isCurrentUser ? "flex-end" : "flex-start",
      }}
    >
      <View
        style={[
          styles.chatContainer,
          isCurrentUser && {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 0,
            backgroundColor: "#bfbfbf",
          },
        ]}
      >
        {AdvogadoImagem ? (
          <CardItem cardBody>
            <TouchableOpacity onPress={onImgTap}>
              <Image
                source={{ uri: AdvogadoImagem }}
                resizeMode="cover"
                style={{ height: 200, width: 50 }}
              />
            </TouchableOpacity>
          </CardItem>
        ) : (
          <Text
            style={[styles.chatTxt, isCurrentUser && { color: "#FFF" }]}
          >
            {msg}
          </Text>
        )}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  chatContainer:{ 
    backgroundColor: "#FFF", 
    borderTopRightRadius: 20 
  },
  chatTxt:{
    color: "#000",
    fontSize: 18,
    marginVertical: 5,
    fontWeight: "500",
    padding: 8,
  },
  })

export default ChatBox;
