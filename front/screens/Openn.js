import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Openn = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.openn}>
        <View style={styles.frame}>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame.png")}
          />
          <View style={styles.frame1}>
            <Text style={styles.text}>똑똑한 엄마들의 일기장</Text>
            <Text style={styles.text1}>맘똑맘똑</Text>
          </View>
        </View>
        <Pressable
          style={styles.opennChild}
          onPress={() => navigation.navigate("LogInn")}
        >
          <Text style={styles.text2}>맘똑맘똑 시작하기</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  openn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  frameIcon: {
    width: 93,
    height: 98,
  },
  text: {
    fontSize: 18,
    color: "#bcbebd",
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 20,
  },
  text1: {
    fontSize: 38,
    letterSpacing: 5,
    lineHeight: 42, // 변경된 라인 높이
    fontWeight: "900",
    fontFamily: FontFamily.robotoBlack,
    color: Color.colorMediumpurple_100,
    textAlign: "center",
    marginTop: 10,
  },
  frame1: {
    alignItems: "center",
    marginTop: 23,
  },
  frame: {
    alignItems: "center",
    justifyContent: "center",
  },
  opennChild: {
    marginTop: 40,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorMediumpurple_100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    width: '80%',
  },
  text2: {
    fontSize: FontSize.size_mid,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 20,
  },
});

export default Openn;

