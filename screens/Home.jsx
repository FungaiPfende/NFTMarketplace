import React, { useState } from "react";
import { View, SafeAreaView, FlatList, StyleSheet } from "react-native";

import { COLORS, NFTData, SIZES } from "../constants";

import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";

export const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if (!value.length) return setNftData(NFTData);

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) {
      setNftData(filteredData);
    } else {
      setNftData(NFTData);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View style={styles.containerBackground}>
          <View style={styles.background1} />
          <View style={styles.background2} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  listContainer: { zIndex: 0 },

  containerBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },

  background1: {
    height: 300,
    backgroundColor: COLORS.primary,
    borderBottomRightRadius: SIZES.extraLarge,
    borderBottomLeftRadius: SIZES.extraLarge,
  },

  background2: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
