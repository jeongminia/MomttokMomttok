import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const StatusBar1 = () => {
  return (
    <View style={[styles.statusbar, styles.statusbarPosition]}>
      <Image
        style={[styles.notchIcon, styles.statusbarPosition]}
        contentFit="cover"
        source={require("../assets/notch.png")}
      />
      <View style={[styles.leftSide, styles.leftSideLayout]}>
        <View style={[styles.statusbarTime, styles.leftSideLayout]}>
          <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.rightSide, styles.rightSidePosition]}>
        <Image
          style={[styles.statusbarBatteryIcon, styles.rightSidePosition]}
          contentFit="cover"
          source={require("../assets/-statusbarbattery.png")}
        />
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={[styles.iconMobileSignal, styles.timePosition]}
          contentFit="cover"
          source={require("../assets/icon--mobile-signal.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusbarPosition: {
    position: "absolute",
    left: "50%",
    top: 0,
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  timePosition: {
    top: 1,
    position: "absolute",
  },
  rightSidePosition: {
    height: 13,
    left: "50%",
    position: "absolute",
  },
  notchIcon: {
    marginLeft: -86,
    width: 172,
    height: 32,
    left: "50%",
    top: 0,
  },
  time: {
    left: 0,
    fontSize: FontSize.size_mid,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    height: 20,
    width: 54,
    top: 1,
  },
  statusbarTime: {
    marginLeft: -27,
    borderRadius: Border.br_5xl,
    top: 0,
  },
  leftSide: {
    marginLeft: -168,
    top: 14,
  },
  statusbarBatteryIcon: {
    marginLeft: 11.3,
    width: 27,
    top: 0,
  },
  wifiIcon: {
    width: 17,
    height: 12,
  },
  iconMobileSignal: {
    marginLeft: -38.7,
    width: 18,
    height: 12,
    left: "50%",
  },
  rightSide: {
    marginLeft: 91,
    top: 19,
    width: 77,
  },
  statusbar: {
    marginLeft: -195,
    width: 390,
    height: 47,
    overflow: "hidden",
    left: "50%",
    top: 0,
  },
});

export default StatusBar1;
