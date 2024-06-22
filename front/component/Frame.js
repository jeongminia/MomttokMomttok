import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import DarkModeFalse from "./DarkModeFalse";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Frame = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.frame, styles.frameLayout]}>
      <DarkModeFalse
        darkModeFalsePosition="absolute"
        darkModeFalseMarginLeft={-195}
        darkModeFalseBottom={0}
        darkModeFalseLeft="50%"
      />
      <Pressable style={[styles.frame1, styles.framePosition]}>
        <Pressable
          style={[styles.frameChild, styles.framePosition]}
          onPress={() => navigation.navigate("LogIn")}
        />
        <Text style={styles.text}>맘똑맘똑 시작하기</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    overflow: "hidden",
    width: 390,
    left: 0,
  },
  framePosition: {
    height: 57,
    top: 0,
    position: "absolute",
  },
  frameChild: {
    left: 54,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorMediumpurple,
    width: 284,
  },
  text: {
    top: 19,
    fontSize: FontSize.size_mid,
    lineHeight: 20,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorWhite,
    textAlign: "center",
    width: 390,
    left: 0,
    position: "absolute",
  },
  frame1: {
    overflow: "hidden",
    width: 390,
    left: 0,
  },
  frame: {
    top: 726,
    height: 118,
    position: "absolute",
    overflow: "hidden",
  },
});

export default Frame;
