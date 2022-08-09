import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { EthPrice } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";

export const DetailsBid = ({ bid }) => {
  return (
    <View style={styles.container}>
      <Image
        source={bid.image}
        resizeMode="contain"
        style={styles.bidderImage}
      />

      <View>
        <Text style={styles.bidderName}>Bid placed by {bid.name}</Text>
        <Text style={styles.bidDate}>{bid.date}</Text>
      </View>

      <EthPrice price={bid.price} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SIZES.base,
    paddingHorizontal: SIZES.base * 2,
  },

  bidderImage: {
    width: 48,
    height: 48,
  },

  bidderName: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },

  bidDate: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small - 2,
    color: COLORS.secondary,
    marginTop: 3,
  },
});
