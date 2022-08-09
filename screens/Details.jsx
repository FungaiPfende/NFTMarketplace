import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
  StyleSheet,
} from "react-native";

import { COLORS, SIZES, FONTS, SHADOWS, assets } from "../constants";
import {
  CircleButton,
  RectButton,
  SubInfo,
  FocusedStatusBar,
  DetailsDesc,
  DetailsBid,
} from "../components";

const DetailsHeader = ({ data, navigation }) => (
  <View style={styles.detailsHeader}>
    <Image source={data.image} resizeMode="cover" style={styles.headerImage} />

    <CircleButton
      imgURL={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />
    <CircleButton
      imgURL={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);

export const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View style={styles.buttonContainer}>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ListHeaderComponent={
          <>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={styles.detailsDesc}>
              <DetailsDesc data={data} />
              {data.bids.length > 0 && (
                <Text style={styles.currentBid}>
                  {data.bids.length > 1 ? "Current Bids:" : "Current Bid:"}
                </Text>
              )}
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttonContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    paddingVertical: SIZES.font,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    zIndex: 1,
  },

  contentContainer: {
    paddingBottom: SIZES.extraLarge * 3,
  },

  detailsHeader: {
    width: "100%",
    height: 373,
  },

  headerImage: {
    width: "100%",
    height: "100%",
  },

  detailsDesc: {
    padding: SIZES.font,
  },

  currentBid: {
    fontSize: SIZES.font,
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },
});
