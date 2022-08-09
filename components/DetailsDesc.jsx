import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import { EthPrice, NFTTitle } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";

export const DetailsDesc = ({ data }) => {
  const [description, setDescription] = useState(
    data.description.slice(0, 150)
  );
  const [readMore, setReadMore] = useState(false);

  const handlePress = () => {
    if (!readMore) {
      setDescription(data.description);
      setReadMore(true);
    } else {
      setDescription(data.description.slice(0, 150));
      setReadMore(false);
    }
  };

  return (
    <>
      <View style={styles.nftTitle}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          fontSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />

        <EthPrice price={data.price} />
      </View>

      <View style={styles.descContainer}>
        <Text style={styles.descTitle}>Description:</Text>

        <View style={styles.descDetails}>
          <Text style={styles.descText}>
            {description}
            {!readMore && "..."}
            <Text style={styles.showOrHideText} onPress={handlePress}>
              {readMore ? " Show Less" : " Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  nftTitle: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  descContainer: {
    marginVertical: SIZES.extraLarge * 1.5,
  },

  descTitle: {
    fontSize: SIZES.font,
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },

  descDetails: {
    marginTop: SIZES.base,
  },

  descText: {
    fontSize: SIZES.small,
    fontFamily: FONTS.regular,
    color: COLORS.secondary,
    lineHeight: SIZES.large,
  },

  showOrHideText: {
    fontSize: SIZES.small,
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },
});
