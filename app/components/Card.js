import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Icon, Divider } from "react-native-elements";
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native-gesture-handler";

import defaultStyles from "./../config/styles";

function Card({
  iconLeft,
  cardHeading = "",
  cardText = "",
  cardDate = "",
  onViewDetailIconPress,
}) {
  return (
    <View style={styles.container}>
      {iconLeft && (
        <>
          <Icon size={50} name="email" color={defaultStyles.colors.primary} />

          <Divider
            orientation="vertical"
            width={2}
            style={styles.separatorStyle}
            color={defaultStyles.colors.primary}
          />
        </>
      )}

      <View style={styles.contentContainer}>
        <View style={styles.contentHeadingContainer}>
          <Text style={styles.contentHeadingText} numberOfLines={1}>
            {cardHeading}
          </Text>
          <Icon
            containerStyle={styles.contentIcon}
            name="more"
            color={defaultStyles.colors.white}
            onPress={onViewDetailIconPress}
          />
        </View>

        <Text style={styles.contentText} numberOfLines={3}>
          {cardText}
        </Text>

        <Text style={styles.contentDate} numberOfLines={1}>
          {cardDate}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    minHeight: "20%",
    padding: defaultStyles.margin.small,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: defaultStyles.margin.medium,
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  iconStyle: {
    padding: defaultStyles.margin.small,
  },
  separatorStyle: {
    marginHorizontal: defaultStyles.margin.small,
  },
  contentContainer: {
    flex: 2,
    flexDirection: "column",
    backgroundColor: defaultStyles.colors.primary,
    borderRadius: defaultStyles.border.borderRadius,
    padding: defaultStyles.margin.small,
  },
  contentHeadingContainer: {
    flexDirection: "row",
    minHeight: 50,
    justifyContent: "space-between",
    color: defaultStyles.colors.white,
  },
  contentHeadingText: {
    color: defaultStyles.colors.white,
    fontWeight: defaultStyles.textTitle.fontWeight,
    fontSize: defaultStyles.textTitle.fontSize,
  },
  contentDate: {
    textAlign: "right",
    width: "100%",
    color: defaultStyles.colors.white,
  },
  contentText: {
    color: defaultStyles.colors.white,
    marginVertical: defaultStyles.margin.small,
  },
});

export default Card;