import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Reportn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.reportn}>
      <Text style={styles.analysisReport}>
        오늘의 분석 리포트가{"\n"}도착했어요!
      </Text>
      <View style={styles.reportContainer}>
        <Text style={styles.analysisTitle}>오늘의 분석 리포트</Text>
        <LinearGradient
          style={styles.analysisBar}
          locations={[0.19, 0.37, 0.59, 0.87, 1]}
          colors={[
            "rgba(254, 210, 93, 0.8)",
            "rgba(0, 193, 126, 0.8)",
            "rgba(73, 216, 246, 0.8)",
            "rgba(62, 155, 244, 0.8)",
            "rgba(255, 112, 116, 0.8)",
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
        <Text style={styles.emotionSummary}>
          TOP3 기쁨:40%. 불안:37% 슬픔:10%
        </Text>
        <Pressable
          style={styles.detailsButton}
          onPress={() => navigation.navigate("Dashn")}
        >
          <Text style={styles.detailsButtonText}>자세한 내용 보기</Text>
        </Pressable>
      </View>
      <Text style={styles.comment}>Comment</Text>
      <View style={styles.commentContainer}>
        <Text style={styles.commentTitle}>맘똑이의 코멘트</Text>
        <Text style={styles.commentText}>
          <Text style={styles.negativeThoughts}>부정적인 생각</Text>
          <Text>
            이 많이 드는 하루였네요. 일기를 보니 슬픔과 두려움의 퍼센트가
            절반이상을 차지해요. 무엇이 이런 감정을 들게 만들었는지 궁금해요.
            차분히 해결방안을 고민해봐요! 이를 글로써 적어보는 것도 도움이 될거에요.
          </Text>
        </Text>
      </View>
      <View style={styles.commentContainer}>
        <Text style={styles.commentTitle}>배우자의 코멘트</Text>
        <Text style={styles.commentText}>
          아직 상대방이 답변을 작성하지 않았어요.
        </Text>
      </View>
      <View style={styles.navigationBar}>
        <Pressable
          style={styles.navItem}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.navIcon}
            contentFit="cover"
            source={require("../assets/homeb.png")}
          />
          <Text style={styles.navText}>HOME</Text>
        </Pressable>
        <Pressable
          style={styles.navItem}
          onPress={() => navigation.navigate("Diary")}
        >
          <Image
            style={styles.navIcon}
            contentFit="cover"
            source={require("../assets/diaryp.png")}
          />
          <Text style={styles.navTextActive}>DIARY</Text>
        </Pressable>
        <Pressable
          style={styles.navItem}
          onPress={() => navigation.navigate("Calb")}
        >
          <Image
            style={styles.navIcon}
            contentFit="cover"
            source={require("../assets/calb.png")}
          />
          <Text style={styles.navText}>CAL</Text>
        </Pressable>
        <Pressable
          style={styles.navItem}
          onPress={() => navigation.navigate("Board")}
        >
          <Image
            style={styles.navIcon}
            contentFit="cover"
            source={require("../assets/dashb.png")}
          />
          <Text style={styles.navText}>BOARD</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reportn: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    alignItems: "center",
    paddingTop: 90, // Further increased paddingTop to move elements down
  },
  comment: {
    color: Color.colorMediumpurple_100,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.robotoBlack,
    marginBottom: 20,
    alignSelf: "flex-start",
    marginLeft: 20,
    marginTop: 40, // Further increased marginTop to move down further
  },
  analysisReport: {
    color: Color.colorGray_400,
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.robotoBlack,
    textAlign: "left",
    marginBottom: 20,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  reportContainer: {
    width: "90%",
    borderRadius: Border.br_2xs,
    borderColor: Color.colorGray_800,
    borderWidth: 1,
    backgroundColor: Color.colorGray_700,
    alignItems: "center",
    padding: 15,
    marginBottom: 40, // Further increased marginBottom to move down further
  },
  analysisTitle: {
    color: Color.colorGray_400,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoBold,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  analysisBar: {
    width: "100%",
    height: 29,
    borderRadius: Border.br_smi,
    marginBottom: 15,
  },
  emotionSummary: {
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 20,
    textAlign: "left",
    marginBottom: 15,
  },
  detailsButton: {
    borderRadius: Border.br_mid,
    backgroundColor: Color.colorMediumpurple_100,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  detailsButtonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  commentContainer: {
    width: "90%",
    borderRadius: Border.br_2xs,
    borderColor: Color.colorGray_800,
    borderWidth: 1,
    backgroundColor: Color.colorGray_700,
    padding: 15,
    marginBottom: 40, // Further increased marginBottom to move down further
  },
  commentTitle: {
    color: Color.colorGray_400,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoBold,
    marginBottom: 10,
  },
  commentText: {
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 20,
    textAlign: "left",
  },
  negativeThoughts: {
    color: "#65b3f6",
  },
  navigationBar: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: Color.colorGhostwhite_100,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: Color.colorGray_800,
  },
  navItem: {
    alignItems: "center",
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  navText: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interRegular,
    marginTop: 2,
  },
  navTextActive: {
    color: Color.colorMediumpurple_100,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interRegular,
    marginTop: 2,
  },
});

export default Reportn;
