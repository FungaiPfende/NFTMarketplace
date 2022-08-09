import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SIZES, FONTS, COLORS, assets, SHADOWS } from "../constants";

export const NFTTitle = ({
  title,
  subTitle,
  titleSize,
  subTitleSize,
  ...props
}) => {
  return (
    <View>
      <Text style={[styles(titleSize).nftTitle, props]}>{title}</Text>
      <Text style={styles(subTitleSize).nftSubTitle}>{subTitle}</Text>
    </View>
  );
};

export const EthPrice = ({ price }) => {
  return (
    <View style={styles().priceContainer}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={styles().ethIcon}
      />
      <Text style={styles().ethPrice}>{price}</Text>
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
  const peopleArray = [assets.person02, assets.person03, assets.person04];

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

const styles = (index, titleSize, subTitleSize) =>
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
      ...SHADOWS.medium,
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
      ...SHADOWS.medium,
      borderRadius: SIZES.font,
      justifyContent: "center",
      alignItems: "center",
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

    nftTitle: {
      fontFamily: FONTS.semiBold,
      fontSize: titleSize,
      color: COLORS.primary,
    },

    nftSubTitle: {
      fontFamily: FONTS.regular,
      fontSize: subTitleSize,
      color: COLORS.primary,
    },

    priceContainer: {
      flexDirection: "row",
      alignItems: "center",
    },

    ethIcon: {
      width: 20,
      height: 20,
      marginRight: 2,
    },

    ethPrice: {
      fontFamily: FONTS.medium,
      fontSize: SIZES.font,
      color: COLORS.primary,
    },
  });
