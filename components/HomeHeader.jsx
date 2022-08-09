import React from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";

import { COLORS, FONTS, SIZES, assets } from "../constants";

export const HomeHeader = ({ onSearch }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={assets.logo} resizeMode="contain" style={styles.logo} />

        <View style={styles.profileContainer}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={styles.profile}
          />

          <Image
            source={assets.badge}
            resizeMode="contain"
            style={styles.badge}
          />
        </View>
      </View>

      <View style={styles.greetingView}>
        <Text style={styles.helloUserText}>Hello, Alice 👋.</Text>
        <Text style={styles.followUpText}>Let's find a masterpiece.</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Image
            source={assets.search}
            resizeMode="contain"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search for NFTs"
            placeholderTextColor={COLORS.white}
            style={styles.searchInput}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    padding: SIZES.font,
    borderBottomLeftRadius: SIZES.extraLarge,
    borderBottomRightRadius: SIZES.extraLarge,
  },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    width: 90,
    height: 25,
  },

  profileContainer: {
    width: 45,
    height: 45,
  },

  profile: {
    width: "100%",
    height: "100%",
  },

  badge: {
    position: "absolute",
    width: 15,
    height: 15,
    bottom: 0,
    right: 0,
  },

  greetingView: {
    marginVertical: SIZES.font,
  },

  helloUserText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.font,
    color: COLORS.white,
  },

  followUpText: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
    color: COLORS.white,
    marginTop: SIZES.base / 2,
  },

  searchContainer: {
    marginTop: SIZES.font,
  },

  searchIcon: {
    width: 20,
    height: 20,
    marginRight: SIZES.base,
  },

  searchInput: {
    flex: 1,
    color: COLORS.white,
  },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderRadius: SIZES.font,
    backgroundColor: COLORS.gray,
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.small,
  },
});
