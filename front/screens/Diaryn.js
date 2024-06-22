import * as React from "react";
import { StyleSheet, View, Text, Pressable, TextInput, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const Diaryn = ({ navigation }) => {
  const [diaryText, setDiaryText] = React.useState("");

  return (
    <ScrollView contentContainerStyle={styles.diaryn}>
      <LinearGradient
        style={styles.diarynChild}
        locations={[0.06, 1]}
        colors={["#fff", "#e6c6ff"]}
      />
      <Text style={styles.diaryText}>Diary</Text>
      <Text style={styles.titleText}>오늘의 감정{"\n"}분석하기</Text>
      <Text style={styles.subTitleText}>일기를 공유할까요?</Text>
      <View style={[styles.shareBox, styles.shadowBox]}>
        <View style={styles.optionContainer}>
          <Image
            style={styles.optionIcon}
            source={require("../assets/lock-icon.png")}
            contentFit="contain"
          />
          <Text style={styles.optionText}>나만 볼래요</Text>
        </View>
        <View style={styles.optionContainer}>
          <Image
            style={styles.optionIcon}
            source={require("../assets/mail-icon.png")}
            contentFit="contain"
          />
          <Text style={styles.optionText}>공유 할래요</Text>
        </View>
      </View>
      <Pressable style={[styles.diaryBox, styles.shadowBox]}>
        <Text style={styles.diaryBoxTitle}>오늘의 하루는 어땠나요?</Text>
        <TextInput
          style={styles.diaryBoxPlaceholder}
          placeholder="(탭하여 작성)"
          value={diaryText}
          onChangeText={(text) => {
            if (text.length <= 500) setDiaryText(text);
          }}
          multiline={true}
        />
      </Pressable>
      <Text style={styles.charCountText}>{diaryText.length}/500자</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Waitn")}
      >
        <LinearGradient
          style={styles.buttonBg}
          locations={[0, 1]}
          colors={["#d49efb", "#b37bf3"]}
        />
        <Text style={styles.buttonText}>일기 작성 완료하기</Text>
      </Pressable>
      <View style={styles.navBar}>
        <View style={styles.navItem}>
          <Image
            style={styles.navIcon}
            contentFit="cover"
            source={require("../assets/homeb.png")}
          />
          <Text style={styles.navText}>HOME</Text>
        </View>
        <View style={styles.navItem}>
          <Image
            style={styles.navIcon}
            contentFit="cover"
            source={require("../assets/diaryp.png")}
          />
          <Text style={styles.navTextActive}>DIARY</Text>
        </View>
        <View style={styles.navItem}>
          <Image
            style={styles.navIcon}
            contentFit="cover"
            source={require("../assets/calb.png")}
          />
          <Text style={styles.navText}>CAL</Text>
        </View>
        <View style={styles.navItem}>
          <Image
            style={styles.navIcon}
            contentFit="cover"
            source={require("../assets/dashb.png")}
          />
          <Text style={styles.navText}>BOARD</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  diaryn: {
    flexGrow: 1,
    backgroundColor: Color.colorWhite,
    paddingBottom: 80, // Adding space for the bottom navigation bar
    paddingTop: 50, // Adjusted padding to bring content up
  },
  diarynChild: {
    height: 500,
    width: "100%",
    position: "absolute",
    top: 0,
  },
  diaryText: {
    fontSize: 40,
    fontWeight: "700",
    color: Color.colorMediumpurple_100,
    marginTop: 70, // Adjusted margin to bring content up
    textAlign: "left",
    paddingLeft: 20,
    marginBottom: 20, // Adjusted margin to space out elements
  },
  titleText: {
    fontSize: 35,
    fontWeight: "900",
    color: Color.colorGray_400,
    textAlign: "left",
    paddingLeft: 20,
    marginBottom: 15, // Adjusted margin to space out elements
  },
  subTitleText: {
    fontSize: FontSize.size_base,
    color: Color.colorGray_300,
    textAlign: "left",
    paddingLeft: 20,
    marginBottom: 15, // Adjusted margin to space out elements
  },
  shadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  shareBox: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10, // Reduced padding to shorten the height
    marginHorizontal: 20,
    marginTop: 25, // Adjusted margin to bring content up
    marginBottom: 15, // Adjusted margin to space out elements
  },
  optionContainer: {
    alignItems: "center",
    width: "40%", // Set width to allow images to fit within the container
  },
  optionIcon: {
    width: "30%", // Further reduced the icon size
    height: undefined,
    aspectRatio: 1, // Maintain the aspect ratio
  },
  optionText: {
    marginTop: 10,
    fontSize: FontSize.size_base,
    color: Color.colorGray_400,
  },
  diaryBox: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 25, // Adjusted margin to bring content up
    marginBottom: 15, // Adjusted margin to space out elements
    height: 150,
    justifyContent: "center",
  },
  diaryBoxTitle: {
    fontSize: FontSize.size_base,
    color: Color.colorGray_400,
  },
  diaryBoxPlaceholder: {
    fontSize: FontSize.size_sm,
    color: Color.colorGray_300,
    marginTop: 10,
    textAlignVertical: "top",
  },
  charCountText: {
    textAlign: "right",
    marginRight: 30,
    marginTop: 10,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_300,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 15, // Adjusted margin to space out elements
  },
  buttonBg: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: Border.br_xl,
  },
  buttonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    paddingVertical: 15,
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  navItem: {
    alignItems: "center",
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  navText: {
    marginTop: 5,
    fontSize: FontSize.size_3xs,
    color: Color.colorGray_200,
  },
  navTextActive: {
    marginTop: 5,
    fontSize: FontSize.size_3xs,
    color: Color.colorMediumpurple_100,
  },
});

export default Diaryn;
