import * as React from "react";
import { Pressable, StyleSheet, Text, View, Animated, Easing } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Waitn = () => {
  const navigation = useNavigation();
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [fadeAnim]);

  return (
    <View style={styles.waitn}>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Reportn")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Animated.Text style={[styles.conradChicagoResta, { opacity: fadeAnim }]}>
        작성한 일기를 분석중이에요...
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  waitn: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  vector: {
    width: 150, // Adjust size as needed
    height: 150, // Adjust size as needed
    marginBottom: 20, // Space between the image and text
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  conradChicagoResta: {
    fontSize: FontSize.size_xl,
    lineHeight: 40,
    fontWeight: "900",
    fontFamily: FontFamily.robotoBlack,
    color: Color.colorGray_400,
    textAlign: "center", // Center text horizontally
  },
});

export default Waitn;
