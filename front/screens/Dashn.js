import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const Dashn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dashn}>
      <Text style={styles.text}>맘똑맘똑 시작하기</Text>
      <Text style={[styles.conradChicagoResta, styles.conradTypo3]}>
        한눈에 보는 감정분석 결과
      </Text>
      <Text style={[styles.conradChicagoResta1, styles.conradLayout]}>
        Report
      </Text>
      <View style={[styles.dashnChild, styles.dashnChildShadowBox]} />
      <LinearGradient
        style={[styles.dashnItem, styles.dashnBg]}
        locations={[0, 0, 1]}
        colors={["rgba(213, 213, 246, 0.94)", "#d49efb", "#b47cf3"]}
      />
      <Text style={[styles.conradChicagoResta2, styles.conradTypo2]}>
        자세한 내용 보기
      </Text>
      <Text style={[styles.conradChicagoResta3, styles.conradTypo1]}>
        일간 리포트
      </Text>
      <LinearGradient
        style={[styles.dashnInner, styles.dashnBg]}
        locations={[0.19, 0.37, 0.59, 0.87, 1]}
        colors={[
          "rgba(254, 210, 93, 0.8)",
          "rgba(0, 193, 126, 0.8)",
          "rgba(73, 216, 246, 0.8)",
          "rgba(62, 155, 244, 0.8)",
          "rgba(255, 112, 116, 0.8)",
        ]}
      />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <LinearGradient
        style={[styles.rectangleLineargradient, styles.dashnBg]}
        locations={[0, 0, 1]}
        colors={["rgba(213, 213, 246, 0.94)", "#d49efb", "#b47cf3"]}
      />
      <Text style={[styles.conradChicagoResta4, styles.conradTypo2]}>
        자세한 내용 보기
      </Text>
      <Text style={[styles.conradChicagoResta5, styles.conradTypo1]}>
        주간 리포트
      </Text>
      <View style={styles.lineParent}>
        <Image
          style={[styles.frameChild, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/line-8.png")}
        />
        <Image
          style={[styles.frameItem, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/line-9.png")}
        />
        <Image
          style={[styles.frameInner, styles.lineIconPosition]}
          contentFit="cover"
          source={require("../assets/line-10.png")}
        />
        <Image
          style={[styles.lineIcon, styles.lineIconPosition]}
          contentFit="cover"
          source={require("../assets/line-11.png")}
        />
        <Image
          style={[styles.frameChild1, styles.frameChildPosition]}
          contentFit="cover"
          source={require("../assets/line-12.png")}
        />
        <Image
          style={[styles.frameChild2, styles.frameChildPosition]}
          contentFit="cover"
          source={require("../assets/line-13.png")}
        />
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame1.png")}
        />
        <View style={[styles.frame, styles.frameLayout]}>
          <Text style={[styles.conradChicagoResta6, styles.conradTypo]}>
            04/02
          </Text>
          <Text style={[styles.conradChicagoResta7, styles.conradTypo]}>
            04/04
          </Text>
          <Text style={[styles.conradChicagoResta8, styles.conradTypo]}>
            04/05
          </Text>
          <Text style={[styles.conradChicagoResta9, styles.conradTypo]}>
            04/06
          </Text>
          <Text style={[styles.conradChicagoResta10, styles.conradTypo]}>
            04/07
          </Text>
          <View style={[styles.frame1, styles.frame1FlexBox]}>
            <Text style={styles.conradTypo}>04/01</Text>
            <Text style={[styles.conradChicagoResta12, styles.conradTypo]}>
              04/03
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.dashnChild1} />
      <LinearGradient
        style={[styles.dashnChild2, styles.dashnBg]}
        locations={[0, 0, 1]}
        colors={["rgba(213, 213, 246, 0.94)", "#d49efb", "#b47cf3"]}
      />
      <Text style={[styles.conradChicagoResta13, styles.rectangleViewPosition]}>
        자세한 내용 보기
      </Text>
      <Text style={[styles.conradChicagoResta14, styles.conradTypo1]}>
        월간 리포트
      </Text>
      <Image
        style={styles.image94Icon}
        contentFit="cover"
        source={require("../assets/image-94.png")}
      />
      <View style={[styles.instanceParent, styles.frame1FlexBox]}>
        <Pressable
          style={styles.component1Parent}
          onPress={() => navigation.navigate("MainPagen")}
        >
          <Image
            style={styles.component1Icon}
            contentFit="cover"
            source={require("../assets/homeb.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>HOME</Text>
        </Pressable>
        <View style={styles.component1Parent}>
          <Image
            style={styles.component1Icon}
            contentFit="cover"
            source={require("../assets/diaryb.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>DIARY</Text>
        </View>
        <Pressable style={styles.component1Parent}>
          <Image
            style={styles.component1Icon}
            contentFit="cover"
            source={require("../assets/calp.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>CAL</Text>
        </Pressable>
        <View style={styles.component1Parent}>
          <Image
            style={styles.component1Icon}
            contentFit="cover"
            source={require("../assets/dashp.png")}
          />
          <Text style={[styles.board, styles.homeTypo]}>BOARD</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conradTypo3: {
    textAlign: "left",
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "900",
  },
  conradLayout: {
    height: 17,
    position: "absolute",
  },
  dashnChildShadowBox: {
    width: 270,
    borderWidth: 1,
    borderColor: Color.colorGray_800,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_700,
    borderRadius: Border.br_2xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  dashnBg: {
    backgroundColor: "transparent",
    position: "absolute",
  },
  conradTypo2: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    fontSize: FontSize.size_smi,
    textAlign: "center",
    color: Color.colorWhite,
  },
  conradTypo1: {
    width: 118,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorGray_400,
    position: "absolute",
  },
  rectangleViewPosition: {
    left: 24,
    position: "absolute",
  },
  framePosition: {
    left: "50%",
    position: "absolute",
  },
  lineIconPosition: {
    top: 45,
    left: "50%",
    position: "absolute",
  },
  frameChildPosition: {
    top: 5,
    width: 38,
    left: "50%",
    position: "absolute",
  },
  frameLayout: {
    height: 10,
    overflow: "hidden",
  },
  conradTypo: {
    width: 26,
    color: Color.colorSilver_100,
    fontWeight: "700",
    fontSize: FontSize.size_6xs,
    height: 10,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  frame1FlexBox: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  homeTypo: {
    marginTop: 2,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  text: {
    top: 423,
    left: 9,
    lineHeight: 20,
    fontFamily: FontFamily.robotoRegular,
    width: 320,
    height: 32,
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  conradChicagoResta: {
    top: 77,
    fontSize: FontSize.size_6xl,
    lineHeight: 40,
    height: 70,
    width: 267,
    color: Color.colorGray_400,
    textAlign: "left",
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "900",
    left: 26,
    position: "absolute",
  },
  conradChicagoResta1: {
    top: 49,
    left: 28,
    width: 81,
    color: Color.colorMediumpurple_100,
    textAlign: "left",
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "900",
    height: 17,
    fontSize: FontSize.size_mid,
  },
  dashnChild: {
    top: 158,
    height: 160,
    left: 26,
    width: 270,
    position: "absolute",
  },
  dashnItem: {
    top: 267,
    left: 79,
    height: 30,
    width: 156,
    backgroundColor: "transparent",
    borderRadius: Border.br_mid,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  conradChicagoResta2: {
    top: 273,
    left: 23,
    height: 16,
    width: 267,
    position: "absolute",
  },
  conradChicagoResta3: {
    top: 179,
    left: 43,
    height: 16,
  },
  dashnInner: {
    top: 211,
    left: 40,
    borderRadius: Border.br_smi,
    width: 243,
    height: 28,
  },
  rectangleView: {
    top: 334,
    height: 236,
    width: 270,
    borderWidth: 1,
    borderColor: Color.colorGray_800,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_700,
    borderRadius: Border.br_2xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  rectangleLineargradient: {
    top: 519,
    left: 77,
    height: 30,
    width: 156,
    backgroundColor: "transparent",
    borderRadius: Border.br_mid,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  conradChicagoResta4: {
    top: 525,
    left: 21,
    height: 17,
    position: "absolute",
    width: 267,
  },
  conradChicagoResta5: {
    top: 355,
    left: 41,
    height: 16,
  },
  frameChild: {
    marginLeft: -112.15,
    height: 43,
    width: 38,
    top: 21,
    left: "50%",
    position: "absolute",
  },
  frameItem: {
    marginLeft: -74.75,
    height: 31,
    width: 37,
    top: 21,
    left: "50%",
    position: "absolute",
  },
  frameInner: {
    marginLeft: -37.35,
    height: 7,
    width: 38,
  },
  lineIcon: {
    marginLeft: -0.05,
    height: 25,
    width: 37,
  },
  frameChild1: {
    marginLeft: 37.35,
    height: 65,
  },
  frameChild2: {
    marginLeft: 74.75,
    height: 9,
  },
  frameIcon: {
    left: 13,
    width: 224,
    height: 90,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  conradChicagoResta6: {
    marginLeft: -106.15,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  conradChicagoResta7: {
    marginLeft: -31.45,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  conradChicagoResta8: {
    marginLeft: 5.95,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  conradChicagoResta9: {
    marginLeft: 43.35,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  conradChicagoResta10: {
    marginLeft: 80.65,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  conradChicagoResta12: {
    marginLeft: -20,
  },
  frame1: {
    width: 31,
    alignItems: "center",
    height: 10,
    overflow: "hidden",
    top: 0,
    left: 32,
    position: "absolute",
  },
  frame: {
    top: 95,
    left: 0,
    width: 212,
    position: "absolute",
  },
  lineParent: {
    top: 390,
    width: 250,
    height: 105,
    left: 32,
    position: "absolute",
  },
  dashnChild1: {
    top: 596,
    left: 27,
    height: 231,
    borderWidth: 1,
    borderColor: Color.colorGray_800,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_700,
    borderRadius: Border.br_2xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    width: 267,
    position: "absolute",
  },
  dashnChild2: {
    top: 778,
    left: 81,
    width: 152,
    height: 29,
    borderRadius: Border.br_mid,
    backgroundColor: "transparent",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  conradChicagoResta13: {
    top: 785,
    width: 265,
    height: 15,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    fontSize: FontSize.size_smi,
    textAlign: "center",
    color: Color.colorWhite,
  },
  conradChicagoResta14: {
    top: 613,
    left: 44,
    height: 14,
  },
  image94Icon: {
    top: 625,
    left: 88,
    borderRadius: 60,
    width: 145,
    height: 131,
    position: "absolute",
  },
  component1Icon: {
    width: 24,
    height: 24,
  },
  home: {
    color: Color.colorGray_200,
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
  board: {
    color: Color.colorMediumpurple_100,
  },
  instanceParent: {
    top: 864,
    left: -1,
    width: 322,
    alignItems: "center",
  },
  dashn: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 926,
    overflow: "hidden",
    flex: 1,
  },
});

export default Dashn;
