import { Platform, ViewStyle, TextStyle, StyleSheet } from "react-native";
import { isIPhoneNotchFamily } from "@freakycoder/react-native-helpers";

interface Style {
  titleTextStyle: TextStyle;
  leftComponentStyle: ViewStyle;
  rightComponentStyle: ViewStyle;
}

export function _container(
  height: number | string,
  width: number | string,
  backgroundColor: string,
  statusBarHidden: boolean,
): ViewStyle {
  return {
    width: width || "100%",
    ...Platform.select({
      ios: {
        top: 0,
        height: isIPhoneNotchFamily()
          ? height || 60
          : height || (statusBarHidden ? 50 : 70),
      },
      android: {
        top: 0,
        height: height || (statusBarHidden ? 60 : 70),
      },
    }),
    backgroundColor: backgroundColor || "white",
  };
}

export function _innerContainer(statusBarHidden: boolean): ViewStyle {
  return {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        top: isIPhoneNotchFamily() ? 16 : statusBarHidden ? 0 : 24,
      },
      android: {
        top: statusBarHidden ? 16 : 24,
      },
    }),
  };
}

export function _shadowStyle(shadowColor: string) {
  return {
    ...Platform.select({
      ios: {
        shadowRadius: 5,
        shadowOpacity: 0.15,
        shadowOffset: { width: 1, height: 7 },
        shadowColor: shadowColor || "#757575",
      },
      android: {
        elevation: 6,
      },
    }),
  };
}

export default StyleSheet.create<Style>({
  leftComponentStyle: {
    left: 16,
    position: "absolute",
  },
  rightComponentStyle: {
    right: 16,
    position: "absolute",
  },
  titleTextStyle: {
    fontSize: 18,
    textAlign: "center",
    color: "rgba(110, 157, 251, 1.0)",
  },
});
