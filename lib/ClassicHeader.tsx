import * as React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
/**
 * ? Local Imports
 */
import styles, {
  _container,
  _shadowStyle,
  _innerContainer,
} from "./ClassicHeader.style";

const hitSlop = {
  top: 30,
  left: 30,
  right: 30,
  bottom: 30,
};

interface IProps {
  hitSlops: any;
  title: string;
  shadowStyle: any;
  leftComponent: any;
  rightComponent: any;
  shadowColor: string;
  titleComponent: any;
  containerStyle: any;
  width: number | string;
  height: number | string;
  backgroundColor: string;
  leftComponentStyle: any;
  statusBarHidden: boolean;
  rightComponentStyle: any;

  leftComponentDisable: boolean;
  rightComponentDisable: boolean;
  leftComponentOnPress: () => void;
  rightComponentOnPress: () => void;
}

const ClassicHeader = (props: IProps) => {
  const {
    width,
    title,
    height,
    hitSlops,
    shadowStyle,
    shadowColor,
    leftComponent,
    rightComponent,
    containerStyle,
    titleComponent,
    backgroundColor,
    statusBarHidden,
    leftComponentStyle,
    rightComponentStyle,
    leftComponentDisable,
    leftComponentOnPress,
    rightComponentDisable,
    rightComponentOnPress,
  } = props;

  const renderLeftIconComp = () =>
    !leftComponentDisable &&
    (leftComponent || (
      <TouchableOpacity
        hitSlop={hitSlops}
        onPress={leftComponentOnPress}
        style={[styles.leftComponentStyle, leftComponentStyle]}
      >
        <Icon
          size={30}
          type="Ionicons"
          name="ios-arrow-back"
          color="rgba(110, 157, 251, 1.0)"
          {...props}
        />
      </TouchableOpacity>
    ));

  const renderRightIconComp = () =>
    !rightComponentDisable &&
    (rightComponent || (
      <TouchableOpacity
        hitSlop={hitSlops}
        onPress={rightComponentOnPress}
        style={[styles.rightComponentStyle, rightComponentStyle]}
      >
        <Icon
          size={30}
          color="white"
          type="ionicon"
          name="ios-menu"
          {...props}
        />
      </TouchableOpacity>
    ));

  const renderTitleComp = () =>
    titleComponent || <Text style={styles.titleTextStyle}>{title}</Text>;

  return (
    <SafeAreaView>
      <View
        style={[
          _container(height, width, backgroundColor, statusBarHidden),
          shadowStyle || _shadowStyle(shadowColor),
          containerStyle,
        ]}
      >
        <View style={_innerContainer(statusBarHidden)}>
          {renderLeftIconComp()}
          {renderTitleComp()}
          {renderRightIconComp()}
        </View>
      </View>
    </SafeAreaView>
  );
};

ClassicHeader.defaultProps = {
  hitSlops: hitSlop,
};

export default ClassicHeader;
