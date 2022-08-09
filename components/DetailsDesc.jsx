import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import { EthPrice, NFTTitle } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";

export const DetailsDesc = ({ data }) => {
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
          <Text style={styles.descText}>{data.description}</Text>
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
});
