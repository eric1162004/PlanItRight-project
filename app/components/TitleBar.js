import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Icon, Image } from "react-native-elements";

import defaultStyles from "./../config/styles";

function TitleBar({
  title,
  logoImage,
  iconLeft,
  onLeftIconPress,
  iconRight,
  onRightIconPress,
  style,
}) {
  return (
    <View style={[styles.container, style]}>
      {logoImage && (
        <Image
          containerStyle={styles.imageLogoStyle}
          source={logoImage}
          style={{ width: 50, height: 50 }}
        />
      )}

      {iconLeft && (
        <Icon
          containerStyle={styles.iconStyle}
          name={iconLeft}
          color={defaultStyles.colors.white}
          onPress={onLeftIconPress}
        />
      )}
      {/* If iconLeft does not exist, add a placeholder on the left to keep title centered */}
      {!iconLeft && !logoImage && (
        <Icon
          containerStyle={{
            opacity: 0,
            paddingEnd: defaultStyles.margin.medium,
          }}
          name="add-call"
          color={defaultStyles.colors.white}
          onPress={onRightIconPress}
        />
      )}

      {title && <Text style={styles.titleText}>{title}</Text>}

      {iconRight && (
        <Icon
          containerStyle={styles.iconStyle}
          name={iconRight}
          color={defaultStyles.colors.white}
          onPress={onRightIconPress}
        />
      )}
      {/* If iconRight does not exist, add a placeholder on the right to keep title centered */}
      {!iconRight && (
        <Icon
          containerStyle={{
            opacity: 0,
            paddingEnd: defaultStyles.margin.medium,
          }}
          name="add-call"
          color={defaultStyles.colors.white}
          onPress={onRightIconPress}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: defaultStyles.colors.primary,
  },
  imageLogoStyle: {
    marginStart: defaultStyles.margin.small,
  },
  iconStyle: {
    padding: defaultStyles.margin.small,
  },
  titleText: {
    flex: 1,
    ...defaultStyles.textTitle,
    color: defaultStyles.colors.white,
    textAlign: "center",
    padding: defaultStyles.margin.medium,
  },
});

export default TitleBar;
