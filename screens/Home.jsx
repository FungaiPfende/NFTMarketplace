import React, { useState } from "react";
import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native";

import { COLORS, NFTData } from "../constants";

import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={HomeHeader}
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
  },

  background2: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
