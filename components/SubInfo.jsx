import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SIZES, FONTS, COLORS, assets, SHADOWS } from "../constants";

export const NFTTitle = () => {
  return (
    <View>
      <Text>NFTTitle</Text>
    </View>
  );
};

export const EthPrice = () => {
  return (
    <View>
      <Text>EthPrice</Text>
    </View>
  );
};

export const ImageCmp = ({ imgUrl, index }) => {
  return (
    <View>
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={styles(index).imageCmp}
      />
    </View>
  );
};

export const People = () => {
  const peopleArray = [
    assets.person01,
    assets.person02,
    assets.person03,
    assets.person04,
  ];

  return (
    <View style={styles().people}>
      {peopleArray.map((imgUrl, index) => (
        <ImageCmp imgUrl={imgUrl} index={index} key={`Person-${index}`} />
      ))}
    </View>
  );
};

export const EndDate = () => {
  return (
    <View style={styles().endDate}>
      <Text style={styles().endingInText}>Ending in:</Text>
      <Text style={styles().endDateText}>12h 30m</Text>
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View style={styles().subInfo}>
      <People />
      <EndDate />
    </View>
  );
};

const styles = (index) =>
  StyleSheet.create({
    subInfo: {
      width: "100%",
      paddingHorizontal: SIZES.font,
      marginTop: -SIZES.extraLarge,
      flexDirection: "row",
      justifyContent: "space-between",
    },

    people: {
      flexDirection: "row",
    },

    imageCmp: {
      width: 48,
      height: 48,
      marginLeft: index === 0 ? 0 : -SIZES.font,
    },

    endDate: {
      paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.base,
      backgroundColor: COLORS.white,
      justifyContent: "center",
      alignItems: "center",
      ...SHADOWS.light,
      elevation: 1,
      maxWidth: "50%",
    },

    endingInText: {
      fontFamily: FONTS.regular,
      fontSize: SIZES.small,
      color: COLORS.primary,
    },

    endDateText: {
      fontFamily: FONTS.semiBold,
      fontSize: SIZES.medium,
      color: COLORS.primary,
    },
  });
