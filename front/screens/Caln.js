import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Caln = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.caln}>
      <View style={styles.instanceParent}>
        <View style={styles.component1Parent}>
          <Image
            style={styles.component1Icon}
            contentFit="cover"
            source={require("../assets/homeb.png")}
          />
          <Text style={[styles.home, styles.calTypo]}>HOME</Text>
        </View>
        <View style={styles.component1Parent}>
          <Image
            style={styles.component1Icon}
            contentFit="cover"
            source={require("../assets/diaryb.png")}
          />
          <Text style={[styles.home, styles.calTypo]}>DIARY</Text>
        </View>
        <View style={styles.component1Parent}>
          <Image
            style={styles.component1Icon}
            contentFit="cover"
            source={require("../assets/calp.png")}
          />
          <Text style={[styles.cal, styles.calTypo]}>CAL</Text>
        </View>
        <Pressable
          style={styles.component1Parent}
          onPress={() => navigation.navigate("Dashn")}
        >
          <Image
            style={styles.component1Icon}
            contentFit="cover"
            source={require("../assets/dashb.png")}
          />
          <Text style={[styles.home, styles.calTypo]}>BOARD</Text>
        </Pressable>
      </View>
      <Text style={[styles.conradChicagoRestaContainer, styles.conradTypo1]}>
        <Text style={styles.text}>똑똑맘</Text>
        <Text style={styles.text1}>님의</Text>
      </Text>
      <Text style={styles.conradChicagoResta}>Calendar</Text>
      <Text style={[styles.conradChicagoResta1, styles.conradTypo1]}>
        11월 캘린더
      </Text>
      <View style={styles.calnChild} />
      <Text style={styles.conradChicagoResta2}>
        오늘의 사진을 업로드 해주세요
      </Text>
      <Image
        style={[styles.groupIcon, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group1.png")}
      />
      <View style={styles.ellipseParent}>
        <Image
          style={[styles.frameChild, styles.frameChildPosition3]}
          contentFit="cover"
          source={require("../assets/ellipse-7.png")}
        />
        <Image
          style={[styles.frameItem, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/ellipse-8.png")}
        />
        <Image
          style={[styles.frameInner, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/ellipse-9.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/ellipse-10.png")}
        />
        <Image
          style={[styles.frameChild1, styles.frameChildPosition2]}
          contentFit="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <Image
          style={[styles.frameChild2, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-12.png")}
        />
        <Image
          style={[styles.frameChild3, styles.frameChildPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-13.png")}
        />
        <Image
          style={[styles.frameChild4, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-14.png")}
        />
        <Image
          style={[styles.frameChild5, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-20.png")}
        />
        <Image
          style={[styles.frameChild6, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-15.png")}
        />
        <Image
          style={[styles.frameChild7, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-16.png")}
        />
        <Image
          style={[styles.frameChild8, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-17.png")}
        />
        <Image
          style={[styles.frameChild9, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-18.png")}
        />
        <Image
          style={[styles.frameChild10, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-19.png")}
        />
        <View style={styles.rectangleView} />
        <Text style={[styles.s, styles.sTypo]}>S</Text>
        <Text style={[styles.m, styles.sTypo]}>M</Text>
        <Text style={[styles.t, styles.sTypo]}>T</Text>
        <Text style={[styles.w, styles.sTypo]}>W</Text>
        <Text style={[styles.t1, styles.sTypo]}>T</Text>
        <Text style={[styles.f, styles.sTypo]}>F</Text>
        <Text style={[styles.s1, styles.s1Position]}>S</Text>
        <Text style={[styles.text2, styles.textTypo6]}>1</Text>
        <Text style={[styles.text3, styles.textTypo6]}>2</Text>
        <Text style={[styles.text4, styles.textTypo6]}>3</Text>
        <Text style={[styles.text5, styles.textTypo6]}>4</Text>
        <Text style={[styles.text6, styles.textTypo6]}>5</Text>
        <Text style={[styles.text7, styles.textPosition1]}>6</Text>
        <Text style={[styles.text8, styles.textTypo6]}>7</Text>
        <Text style={[styles.text9, styles.textPosition]}>8</Text>
        <Text style={[styles.text10, styles.textPosition]}>9</Text>
        <Text style={[styles.text11, styles.textTypo5]}>10</Text>
        <Text style={[styles.text12, styles.textTypo4]}>11</Text>
        <Text style={[styles.text13, styles.textTypo3]}>12</Text>
        <Text style={[styles.text14, styles.textTypo5]}>13</Text>
        <Text style={[styles.text15, styles.textTypo5]}>14</Text>
        <Text style={[styles.text16, styles.textTypo5]}>15</Text>
        <Text style={[styles.text17, styles.textTypo2]}>16</Text>
        <Text style={[styles.text18, styles.textTypo5]}>17</Text>
        <Text style={[styles.text19, styles.textTypo4]}>18</Text>
        <Text style={[styles.text20, styles.textTypo5]}>19</Text>
        <Text style={[styles.text21, styles.textTypo5]}>20</Text>
        <Text style={[styles.text22, styles.textTypo5]}>21</Text>
        <Text style={[styles.text23, styles.textTypo1]}>22</Text>
        <Text style={[styles.text24, styles.textTypo1]}>29</Text>
        <Text style={[styles.text25, styles.textTypo5]}>23</Text>
        <Text style={[styles.text26, styles.textTypo2]}>30</Text>
        <Text style={[styles.text27, styles.textTypo]}>24</Text>
        <Text style={[styles.text28, styles.textTypo]}>31</Text>
        <Text style={[styles.text29, styles.textTypo3]}>25</Text>
        <Text style={[styles.text30, styles.textTypo5]}>26</Text>
        <Text style={[styles.text31, styles.textTypo5]}>27</Text>
        <Text style={[styles.text32, styles.textTypo5]}>28</Text>
        <View style={[styles.frameView, styles.groupIconPosition]} />
      </View>
      <Text style={styles.conradChicagoRestaContainer1}>
        <Text style={styles.text1}>{`나의 감정 기록 `}</Text>
        <Text style={styles.text}>2</Text>
      </Text>
      <View style={[styles.calnItem, styles.calnShadowBox]} />
      <View style={[styles.calnInner, styles.calnShadowBox]} />
      <Text style={[styles.conradChicagoResta3, styles.conradTypo]}>
        2024.11.03
      </Text>
      <Text style={[styles.conradChicagoResta4, styles.conradTypo]}>
        2024.11.10
      </Text>
      <Text style={[styles.conradChicagoResta5, styles.conradLayout]}>
        아이가 아파 병원에 대려갔다. 내 탓인 것 같아서 속상했다. 내가 할 수 있는
        최선을 다하는데 쉽지 않다.
      </Text>
      <Text style={[styles.conradChicagoResta6, styles.conradLayout]}>
        오늘은 맘똑이가 드디어 걸음마를 시도했다! 너무 기뻐서 하루종일 기분이
        좋았다.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  calTypo: {
    marginTop: 2,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
  },
  conradTypo1: {
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "900",
    fontSize: FontSize.size_6xl,
    left: 35,
    textAlign: "left",
    position: "absolute",
  },
  groupIconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  frameChildPosition3: {
    height: 25,
    top: 55,
    position: "absolute",
  },
  framePosition: {
    top: 90,
    height: 24,
    position: "absolute",
  },
  frameChildPosition2: {
    left: 39,
    width: 25,
  },
  frameChildLayout: {
    height: 26,
    position: "absolute",
  },
  frameChildPosition: {
    left: 2,
    width: 25,
  },
  sTypo: {
    textAlign: "right",
    letterSpacing: 15,
    fontSize: FontSize.size_smi,
    top: 13,
    height: 14,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorGray_200,
    position: "absolute",
  },
  s1Position: {
    left: 237,
    width: 7,
  },
  textTypo6: {
    fontSize: FontSize.size_2xs,
    textAlign: "right",
    letterSpacing: 15,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  textPosition1: {
    left: 199,
    color: Color.colorBlack,
  },
  textPosition: {
    top: 94,
    height: 15,
  },
  textTypo5: {
    width: 13,
    fontSize: FontSize.size_2xs,
    textAlign: "right",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  textTypo4: {
    width: 15,
    left: 120,
    fontSize: FontSize.size_2xs,
    textAlign: "right",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  textTypo3: {
    width: 14,
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    textAlign: "right",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  textTypo2: {
    left: 45,
    width: 13,
    fontSize: FontSize.size_2xs,
    height: 14,
    textAlign: "right",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  textTypo1: {
    left: 9,
    width: 13,
    fontSize: FontSize.size_2xs,
    height: 14,
    textAlign: "right",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  textTypo: {
    left: 84,
    width: 13,
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    height: 14,
    textAlign: "right",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  calnShadowBox: {
    height: 84,
    width: 266,
    backgroundColor: Color.colorGhostwhite_200,
    borderRadius: Border.br_2xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    position: "absolute",
  },
  conradTypo: {
    width: 66,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: 37,
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  conradLayout: {
    height: 38,
    width: 248,
    lineHeight: 25,
    left: 37,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorGray_400,
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  component1Icon: {
    width: 24,
    height: 24,
  },
  home: {
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
  },
  component1Parent: {
    backgroundColor: Color.colorGhostwhite_100,
    height: 62,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    flex: 1,
  },
  cal: {
    color: Color.colorMediumpurple_100,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
  },
  instanceParent: {
    bottom: 0,
    width: 322,
    flexDirection: "row",
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  text: {
    color: Color.colorMediumpurple_100,
  },
  text1: {
    color: Color.colorGray_400,
  },
  conradChicagoRestaContainer: {
    top: 64,
    width: 148,
    height: 28,
  },
  conradChicagoResta: {
    top: 40,
    width: 68,
    height: 13,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "900",
    left: 35,
    color: Color.colorMediumpurple_100,
    textAlign: "left",
    position: "absolute",
  },
  conradChicagoResta1: {
    top: 96,
    width: 177,
    height: 27,
    color: Color.colorGray_400,
  },
  calnChild: {
    marginLeft: -126,
    top: 387,
    left: "50%",
    borderRadius: Border.br_xs,
    borderStyle: "solid",
    borderColor: "#9563f5",
    borderWidth: 1,
    width: 240,
    height: 36,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  conradChicagoResta2: {
    top: 399,
    left: 34,
    textAlign: "center",
    width: 161,
    fontFamily: FontFamily.robotoRegular,
    height: 13,
    color: Color.colorGray_400,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  groupIcon: {
    width: "4.91%",
    top: 395,
    right: "20.72%",
    left: "74.38%",
    maxWidth: "100%",
    height: 17,
  },
  frameChild: {
    width: 25,
    left: 227,
  },
  frameItem: {
    width: 25,
    left: 227,
  },
  frameInner: {
    left: 189,
    width: 26,
  },
  ellipseIcon: {
    left: 114,
    width: 27,
  },
  frameChild1: {
    top: 90,
    height: 24,
    position: "absolute",
  },
  frameChild2: {
    left: 2,
    width: 25,
    top: 127,
    height: 26,
  },
  frameChild3: {
    height: 25,
    top: 55,
    position: "absolute",
  },
  frameChild4: {
    top: 167,
    left: 3,
    width: 25,
  },
  frameChild5: {
    top: 166,
    left: 40,
    width: 25,
  },
  frameChild6: {
    top: 127,
    height: 26,
    left: 39,
    width: 25,
  },
  frameChild7: {
    left: 77,
    top: 127,
    height: 26,
    width: 25,
  },
  frameChild8: {
    left: 153,
    top: 127,
    height: 26,
    width: 26,
  },
  frameChild9: {
    left: 191,
    top: 127,
    height: 26,
    width: 25,
  },
  frameChild10: {
    top: 127,
    height: 26,
    width: 25,
    left: 227,
  },
  rectangleView: {
    top: 0,
    borderRadius: 8,
    height: 41,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    width: 255,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  s: {
    height: 14,
    width: 7,
    left: 11,
  },
  m: {
    width: 12,
    left: 47,
    height: 14,
  },
  t: {
    left: 88,
    height: 14,
    width: 7,
  },
  w: {
    left: 124,
    width: 11,
    height: 14,
  },
  t1: {
    left: 164,
    height: 14,
    width: 7,
  },
  f: {
    left: 200,
    width: 8,
    height: 14,
  },
  s1: {
    height: 14,
    textAlign: "right",
    letterSpacing: 15,
    fontSize: FontSize.size_smi,
    top: 13,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorGray_200,
    position: "absolute",
  },
  text2: {
    height: 15,
    color: Color.colorWhite,
    top: 60,
    fontSize: FontSize.size_2xs,
    width: 7,
    left: 11,
  },
  text3: {
    color: Color.colorBlack,
    height: 15,
    top: 60,
    fontSize: FontSize.size_2xs,
    width: 8,
    left: 47,
  },
  text4: {
    left: 85,
    color: Color.colorBlack,
    height: 15,
    top: 60,
    fontSize: FontSize.size_2xs,
    width: 7,
  },
  text5: {
    left: 123,
    color: Color.colorBlack,
    height: 15,
    top: 60,
    fontSize: FontSize.size_2xs,
    width: 7,
  },
  text6: {
    left: 161,
    color: Color.colorBlack,
    height: 15,
    top: 60,
    fontSize: FontSize.size_2xs,
    width: 7,
  },
  text7: {
    height: 15,
    fontSize: FontSize.size_2xs,
    textAlign: "right",
    letterSpacing: 15,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
    top: 60,
    width: 7,
  },
  text8: {
    height: 15,
    color: Color.colorWhite,
    top: 60,
    fontSize: FontSize.size_2xs,
    left: 237,
    width: 7,
  },
  text9: {
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    textAlign: "right",
    letterSpacing: 15,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
    width: 7,
    left: 11,
  },
  text10: {
    color: Color.colorWhite,
    fontSize: FontSize.size_2xs,
    textAlign: "right",
    letterSpacing: 15,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
    width: 8,
    left: 47,
  },
  text11: {
    left: 82,
    top: 94,
    height: 15,
    color: Color.colorBlack,
  },
  text12: {
    top: 94,
    height: 15,
    color: Color.colorWhite,
  },
  text13: {
    left: 157,
    top: 94,
    height: 15,
  },
  text14: {
    left: 195,
    top: 94,
    height: 15,
    color: Color.colorWhite,
  },
  text15: {
    left: 232,
    top: 94,
    height: 15,
    color: Color.colorWhite,
  },
  text16: {
    left: 8,
    top: 134,
    color: Color.colorWhite,
    height: 14,
  },
  text17: {
    top: 134,
    color: Color.colorWhite,
  },
  text18: {
    left: 83,
    top: 134,
    color: Color.colorWhite,
    height: 14,
  },
  text19: {
    top: 134,
    color: Color.colorBlack,
    height: 14,
  },
  text20: {
    left: 159,
    top: 134,
    color: Color.colorWhite,
    height: 14,
  },
  text21: {
    left: 198,
    top: 134,
    color: Color.colorWhite,
    height: 14,
  },
  text22: {
    left: 234,
    top: 134,
    color: Color.colorWhite,
    height: 14,
  },
  text23: {
    top: 173,
    color: Color.colorWhite,
  },
  text24: {
    top: 211,
    color: Color.colorBlack,
  },
  text25: {
    left: 46,
    top: 173,
    color: Color.colorWhite,
    height: 14,
  },
  text26: {
    top: 211,
    color: Color.colorBlack,
  },
  text27: {
    top: 173,
  },
  text28: {
    top: 211,
  },
  text29: {
    left: 121,
    top: 173,
    height: 14,
  },
  text30: {
    left: 160,
    top: 173,
    color: Color.colorBlack,
    height: 14,
  },
  text31: {
    top: 173,
    left: 199,
    color: Color.colorBlack,
    height: 14,
  },
  text32: {
    left: 236,
    top: 173,
    color: Color.colorBlack,
    height: 14,
  },
  frameView: {
    top: -20,
    left: -28,
    width: 100,
    height: 100,
  },
  ellipseParent: {
    top: 138,
    left: 32,
    height: 225,
    width: 255,
    position: "absolute",
  },
  conradChicagoRestaContainer1: {
    top: 446,
    left: 33,
    width: 189,
    height: 18,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "900",
    textAlign: "left",
    position: "absolute",
  },
  calnItem: {
    top: 477,
    left: 27,
  },
  calnInner: {
    top: 587,
    left: 26,
  },
  conradChicagoResta3: {
    top: 490,
    color: "#528cf1",
    height: 17,
  },
  conradChicagoResta4: {
    top: 600,
    color: "#edad46",
    height: 15,
  },
  conradChicagoResta5: {
    top: 512,
  },
  conradChicagoResta6: {
    top: 622,
  },
  caln: {
    width: "100%",
    height: 772,
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Caln;
