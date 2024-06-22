import * as React from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Component = () => {
  return (
    <View style={styles.view}>
      <View style={styles.title}>
        <Text style={styles.text}>
          <Text style={styles.text1}>똑똑맘</Text>
          <Text style={styles.text2}>을 위한 가이드</Text>
        </Text>
      </View>
      <View style={styles.cardParent}>
        <ImageBackground
          style={styles.cardIcon}
          resizeMode="cover"
          source={require("../assets/card.png")}
        >
          <View style={styles.chatWithAVeterinarian11Wrapper}>
            <Text style={[styles.chatWithA, styles.chatTypo]}>{`2개월차 엄마가 
알아야할 정보`}</Text>
          </View>
        </ImageBackground>
        <View style={[styles.card, styles.cardShadowBox]}>
          <Image
            style={[styles.image88Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/image-88.png")}
          />
          <View
            style={[
              styles.chatWithAVeterinarian11Container,
              styles.chatFlexBox,
            ]}
          >
            <Text style={[styles.chatWithA, styles.chatTypo]}>{`소통을 잘하는
엄마 아빠 특징 4가지`}</Text>
          </View>
        </View>
        <View style={[styles.card1, styles.cardShadowBox]}>
          <Image
            style={[styles.image89Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/image-89.png")}
          />
          <View
            style={[styles.chatWithAVeterinarian11Frame, styles.framePosition]}
          >
            <Text
              style={[styles.chatWithA2, styles.chatTypo]}
            >{`아이가 울거나 보챌때
어떻게 하시나요?`}</Text>
          </View>
        </View>
        <View style={[styles.card2, styles.cardShadowBox]}>
          <Image
            style={styles.image90Icon}
            contentFit="cover"
            source={require("../assets/image-90.png")}
          />
          <View style={[styles.frameView, styles.framePosition]}>
            <Text
              style={[styles.chatWithA3, styles.chatFlexBox]}
            >{`잠을 안자는 우리 아이,
이대로 괜찮은걸까?`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatTypo: {
    textAlign: "center",
    color: Color.colorGray_500,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
  },
  cardShadowBox: {
    marginLeft: 16,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(23, 37, 40, 0.1)",
    height: 170,
    width: 152,
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  iconPosition: {
    height: 177,
    top: -7,
    position: "absolute",
  },
  chatFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  framePosition: {
    left: "0%",
    right: "0%",
    width: "100%",
    paddingVertical: Padding.p_base,
    backgroundColor: Color.colorGray_700,
    borderBottomLeftRadius: Border.br_base,
    borderBottomRightRadius: Border.br_base,
    paddingHorizontal: Padding.p_xl,
    position: "absolute",
  },
  text1: {
    fontWeight: "700",
    color: Color.colorMediumpurple,
    fontFamily: FontFamily.robotoBold,
  },
  text2: {
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
  },
  text: {
    bottom: -3,
    left: 20,
    fontSize: FontSize.size_xl,
    lineHeight: 27,
    textAlign: "left",
    position: "absolute",
  },
  title: {
    width: 375,
    height: 44,
    overflow: "hidden",
  },
  chatWithA: {
    alignSelf: "stretch",
  },
  chatWithAVeterinarian11Wrapper: {
    marginLeft: -76,
    height: 64,
    paddingVertical: Padding.p_base,
    backgroundColor: Color.colorGray_700,
    borderBottomLeftRadius: Border.br_base,
    borderBottomRightRadius: Border.br_base,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center",
    left: "50%",
    width: 152,
    paddingHorizontal: Padding.p_xl,
    position: "absolute",
  },
  cardIcon: {
    height: 170,
    width: 152,
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  image88Icon: {
    marginLeft: -85,
    width: 170,
    left: "50%",
    height: 177,
    top: -7,
  },
  chatWithAVeterinarian11Container: {
    height: "37.65%",
    top: "62.35%",
    left: "0%",
    right: "0%",
    width: "100%",
    paddingVertical: Padding.p_base,
    backgroundColor: Color.colorGray_700,
    borderBottomLeftRadius: Border.br_base,
    borderBottomRightRadius: Border.br_base,
    paddingHorizontal: Padding.p_xl,
    position: "absolute",
    bottom: "0%",
  },
  card: {
    backgroundColor: Color.colorLavender,
    marginLeft: 16,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(23, 37, 40, 0.1)",
  },
  image89Icon: {
    left: -57,
    width: 209,
  },
  chatWithA2: {
    width: 150,
    height: 30,
  },
  chatWithAVeterinarian11Frame: {
    left: "0%",
    right: "0%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    bottom: 0,
  },
  card1: {
    backgroundColor: Color.colorWhite,
    marginLeft: 16,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(23, 37, 40, 0.1)",
  },
  image90Icon: {
    top: -49,
    left: -28,
    width: 208,
    height: 225,
    position: "absolute",
  },
  chatWithA3: {
    flex: 1,
    display: "flex",
    width: 127,
    textAlign: "center",
    color: Color.colorGray_500,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
  },
  frameView: {
    height: "35.88%",
    top: "64.12%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  card2: {
    backgroundColor: Color.colorLavender,
    marginLeft: 16,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(23, 37, 40, 0.1)",
  },
  cardParent: {
    width: 349,
    flexDirection: "row",
    paddingTop: Padding.p_5xl,
    marginTop: -7,
    paddingHorizontal: Padding.p_xl,
  },
  view: {
    top: 677,
    left: 25,
    width: 332,
    paddingBottom: Padding.p_3xs,
    position: "absolute",
  },
});

export default Component;
