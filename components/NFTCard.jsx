import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { CircleButton, RectButton } from "./Buttons";
import { SubInfo, NFTTitle, EthPrice } from "./SubInfo";

export const NFTCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <View style={styles.cardCover}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={styles.cardImage}
        />

        <CircleButton imgURL={assets.heart} right={10} top={10} />
      </View>

      <SubInfo />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    ...SHADOWS.dark,
  },

  cardCover: {
    width: "100%",
    height: 250,
  },

  cardImage: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
  },
});
