import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  ScrollView,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from '@react-navigation/native';
import { Border, FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const MainPagen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainPagen}>
      {/* 배경 그라데이션 */}
      <LinearGradient
        style={styles.backgroundGradient}
        locations={[0, 1]}
        colors={["#fff", "#f8f0fe"]}
      />
      {/* 인사말 텍스트 */}
      <View style={styles.greetingContainer}>
        <Text style={styles.titleText}>
          <Text style={styles.highlightText}>똑똑맘</Text>님,
        </Text>
        <Text style={styles.titleText}>안녕하세요.</Text>
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
      </View>
      {/* 날짜 박스 */}
      <View style={styles.dateBox}>
        <Text style={styles.dateText}>
          <Text style={styles.dateBoldText}>4월 20일</Text>
          <Text> 월요일</Text>
        </Text>
        <Text style={styles.dateDescription}>
          감정을 기록하고 분석결과를 확인하세요
        </Text>
        <LinearGradient
          style={[styles.buttonGradient, styles.button]}
          locations={[0, 0, 1]}
          colors={["#d5d5f6", "#d49efb", "#b47cf3"]}
        >
          <Pressable style={styles.button} onPress={() => navigation.navigate("Diaryn")}>
            <Text style={styles.buttonText}>일기 쓰러 가기</Text>
          </Pressable>
        </LinearGradient>
      </View>
      {/* 정보 박스 */}
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>
          생후 2개월 똑똑이
        </Text>
        <Text style={styles.infoSubtitle}>
          <Text style={styles.quoteText}>“</Text>
          <Text style={styles.highlightText}>옹아리</Text>
          <Text style={styles.quoteText}>를 시작할 나이"</Text>
        </Text>
        <Text style={styles.infoText}>
          2개월이 된 아이는 세상이 궁금해지기 시작해요! <Text style={styles.highlightText}>옹알이</Text>를 시도하진 않나요? 많이 격려해주세요. 또한 이 시기에 <Text style={styles.highlightText}>수면교육</Text> 또한 매우 중요합니다. 아이가 규칙적으로 잘 수 있도록 도와주세요.
        </Text>
        <LinearGradient
          style={[styles.buttonGradient, styles.button]}
          locations={[0, 0, 1]}
          colors={["#d5d5f6", "#d49efb", "#b47cf3"]}
        >
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>자세한 내용 보기</Text>
          </Pressable>
        </LinearGradient>
      </View>
      {/* 카드 스크롤뷰 */}
      <View style={styles.scrollViewContainer}>
        <Text style={styles.guideTitle}>
          똑똑맘을 위한 가이드
        </Text>
        <ScrollView
          style={styles.cardParent}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.frameScrollViewContent}
        >
          {/* 첫 번째 카드 */}
          <View style={[styles.card, styles.cardShadowBox]}>
            <ImageBackground
              style={styles.cardIcon}
              resizeMode="cover"
              source={require("../assets/image-88.png")}
            >
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardText}>
                  {`2개월차 엄마가 알아야할 정보`}
                </Text>
              </View>
            </ImageBackground>
          </View>
          {/* 두 번째 카드 */}
          <View style={[styles.card, styles.cardShadowBox]}>
            <ImageBackground
              style={styles.cardIcon}
              resizeMode="cover"
              source={require("../assets/image-89.png")}
            >
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardText}>{`소통을 잘하는 엄마 아빠 특징 4가지`}</Text>
              </View>
            </ImageBackground>
          </View>
          {/* 세 번째 카드 */}
          <View style={[styles.card, styles.cardShadowBox]}>
            <ImageBackground
              style={styles.cardIcon}
              resizeMode="cover"
              source={require("../assets/image-90.png")}
            >
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardText}>{`아이가 울거나 보챌때 어떻게 하시나요?`}</Text>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainPagen: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    padding: 16,
  },
  backgroundGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  greetingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    marginTop: 50, // 인사말 부분을 아래로 내리기 위해 추가
  },
  titleText: {
    fontSize: FontSize.size_6xl,
    fontWeight: "900",
    fontFamily: FontFamily.robotoBlack,
    color: Color.colorGray_400,
    marginRight: 8,
  },
  subtitleText: {
    fontSize: FontSize.size_6xl, // "안녕하세요" 텍스트를 똑똑맘님과 같은 크기로 조정
    fontWeight: "900",
    fontFamily: FontFamily.robotoBlack,
    color: Color.colorGray_400,
  },
  highlightText: {
    color: Color.colorMediumpurple_100,
  },
  ellipseIcon: {
    marginLeft: "auto",
    width: 50,
    height: 50,
  },
  dateBox: {
    backgroundColor: "#f8f0fe",
    borderRadius: Border.br_2xs,
    padding: 16,
    marginBottom: 24,
  },
  dateText: {
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.colorGray_400,
    marginBottom: 8,
  },
  dateBoldText: {
    fontWeight: "900",
    fontFamily: FontFamily.robotoBlack,
  },
  dateDescription: {
    textAlign: "center",
    color: Color.colorGray_400,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_smi,
    marginBottom: 8,
  },
  buttonGradient: {
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
  button: {
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    fontSize: FontSize.size_smi,
  },
  infoBox: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_2xs,
    borderColor: "rgba(0, 0, 0, 0.12)",
    borderWidth: 1,
    padding: 16,
    marginBottom: 24,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  infoTitle: {
    fontSize: FontSize.size_5xl,
    fontWeight: "900",
    fontFamily: FontFamily.robotoBlack,
    textAlign: "center",
    color: Color.colorGray_400,
    marginBottom: 8,
  },
  infoSubtitle: {
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.colorGray_400,
    marginBottom: 8,
  },
  quoteText: {
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
  },
  infoText: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorGray_300,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 24,
    marginBottom: 16,
  },
  scrollViewContainer: {
    flex: 1,
  },
  guideTitle: {
    fontSize: FontSize.size_5xl, // 글씨 크기를 키움
    fontWeight: "900",
    fontFamily: FontFamily.robotoBlack,
    textAlign: "left",
    color: Color.colorGray_400,
    marginBottom: 16,
    marginLeft: 16,
    marginTop: 16, // 배치를 아래로 내리기 위해 추가
  },
  cardParent: {
    width: "100%",
  },
  frameScrollViewContent: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 24,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  cardIcon: {
    alignItems: "center",
    height: 170,
    width: 152,
    borderRadius: Border.br_base,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  cardShadowBox: {
    marginLeft: 16,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(23, 37, 40, 0.1)",
    height: 170,
    width: 152,
    borderRadius: Border.br_base,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  cardTextContainer: {
    height: "37.65%",
    top: "62.35%",
    left: "0%",
    right: "0%",
    paddingVertical: Padding.p_base,
    backgroundColor: Color.colorGray_700,
    borderBottomLeftRadius: Border.br_base,
    borderBottomRightRadius: Border.br_base,
    paddingHorizontal: Padding.p_xl,
    position: "absolute",
    width: "100%",
    bottom: "0%",
  },
  cardText: {
    alignSelf: "stretch",
    color: Color.colorGray_500,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
  },
  iconPosition: {
    height: 177,
    top: -7,
    position: "absolute",
  },
  image90Icon: {
    top: -49,
    left: -28,
    width: 208,
    height: 225,
    position: "absolute",
  },
});

export default MainPagen;




