import * as React from "react";
import { StyleSheet, View, Text, Pressable, SafeAreaView, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const LogInn = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logInn}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/-20240523--1100-1.png")}
        />
        <Text style={styles.text5}>맘 똑 맘 똑</Text>
        <View style={styles.inputContainer}>
          <View style={[styles.inputBox, styles.logShadowBox]}>
            <TextInput 
              style={styles.inputText}
              placeholder="아이디 및 이메일"
              placeholderTextColor={Color.colorDarkgray}
            />
          </View>
          <View style={[styles.inputBox, styles.logShadowBox]}>
            <TextInput 
              style={styles.inputText}
              placeholder="비밀번호"
              placeholderTextColor={Color.colorDarkgray}
              secureTextEntry
            />
          </View>
          <Text style={styles.text2}>비밀번호를 잊으셨나요?</Text>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("MainPagen")}
        >
          <Text style={styles.buttonText}>로그인</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.alternateButton]}
          onPress={() => navigation.navigate("MainPagen")}
        >
          <Text style={styles.buttonText}>로그인 없이 시작하기</Text>
        </Pressable>
        <View style={styles.frameParent}>
          <Text style={styles.text3}>다른 계정으로 로그인</Text>
          <View style={styles.frame}>
            <View style={styles.frameLine} />
            <View style={styles.frameLine} />
          </View>
          <Text style={styles.text4}>아이디 찾기 | 회원가입</Text>
        </View>
        <View style={styles.socialIcons}>
          <Image
            style={styles.socialIcon}
            contentFit="cover"
            source={require("../assets/image-91.png")}
          />
          <Image
            style={styles.socialIcon}
            contentFit="cover"
            source={require("../assets/image-92.png")}
          />
          <Image
            style={styles.socialIcon}
            contentFit="cover"
            source={require("../assets/image-93.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  logInn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  logShadowBox: {
    borderWidth: 1,
    borderColor: Color.colorMediumpurple_100,
    borderRadius: Border.br_6xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
    marginVertical: 10,
    width: "100%",
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  inputText: {
    color: Color.colorDarkgray,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_mid,
  },
  text2: {
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDarkgray,
    lineHeight: 20,
    marginTop: 10,
  },
  text3: {
    textAlign: "center",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_3xs,
    marginTop: 20,
  },
  text4: {
    textAlign: "center",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_3xs,
    marginTop: 20,
  },
  text5: {
    letterSpacing: 5,
    lineHeight: 22,
    fontWeight: "900",
    fontFamily: FontFamily.robotoBlack,
    color: Color.colorMediumpurple_100,
    fontSize: FontSize.size_mid,
    textAlign: "center",
    marginVertical: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorMediumpurple_100,
    marginVertical: 10,
  },
  buttonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_mid,
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 20,
  },
  alternateButton: {
    backgroundColor: "rgba(179, 121, 242, 0.7)",
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 20,
  },
  frame: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameLine: {
    width: 35,
    height: 1,
    backgroundColor: Color.colorDarkgray,
    marginHorizontal: 5,
  },
  frameParent: {
    alignItems: "center",
    marginVertical: 20,
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  socialIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginHorizontal: 10,
  },
  icon: {
    width: 50,
    height: 53,
    marginVertical: 20,
  },
});

export default LogInn;

