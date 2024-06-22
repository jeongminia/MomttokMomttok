import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Padding, Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent = ({
  component1,
  frame1171276726,
  component3,
  propBottom,
  propColor,
  propColor1,
  propColor2,
}) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("bottom", propBottom),
    };
  }, [propBottom]);

  const hOMEStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  const dIARYStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor1),
    };
  }, [propColor1]);

  const cALStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor2),
    };
  }, [propColor2]);

  return (
    <View style={[styles.instanceParent, frameViewStyle]}>
      <View style={[styles.component1Parent, styles.parentSpaceBlock]}>
        <Image
          style={styles.component1Icon}
          contentFit="cover"
          source={component1}
        />
        <Text style={[styles.home, styles.homeTypo, hOMEStyle]}>HOME</Text>
      </View>
      <View style={[styles.frameParent, styles.parentLayout]}>
        <Image
          style={styles.component1Icon}
          contentFit="cover"
          source={frame1171276726}
        />
        <Text style={[styles.diary, styles.homeTypo, dIARYStyle]}>DIARY</Text>
      </View>
      <View style={[styles.component3Parent, styles.parentSpaceBlock]}>
        <Image
          style={styles.component1Icon}
          contentFit="cover"
          source={component3}
        />
        <Text style={[styles.home, styles.homeTypo, cALStyle]}>CAL</Text>
      </View>
      <View style={[styles.component4Parent, styles.parentLayout]}>
        <Image
          style={styles.component1Icon}
          contentFit="cover"
          source={require("../assets/component-4.png")}
        />
        <Text style={[styles.home, styles.homeTypo]}>BOARD</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    width: 97,
    backgroundColor: Color.colorGhostwhite_100,
    top: 0,
    height: 75,
    position: "absolute",
  },
  homeTypo: {
    marginTop: 2,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
  },
  parentLayout: {
    width: 98,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorGhostwhite_100,
    top: 0,
    height: 75,
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
    left: 0,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    width: 97,
    backgroundColor: Color.colorGhostwhite_100,
    top: 0,
  },
  diary: {
    color: Color.colorMediumpurple,
  },
  frameParent: {
    left: 97,
  },
  component3Parent: {
    left: 195,
  },
  component4Parent: {
    left: 292,
  },
  instanceParent: {
    bottom: -3,
    width: 390,
    height: 75,
    position: "absolute",
    left: 0,
  },
});

export default FrameComponent;
