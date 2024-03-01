import { Box, HStack, Image, Text, VStack } from "native-base";
import React from "react";
import { BASE, Typho } from "../../utils/Color";
import { FONTS } from "../../utils/Fonts";
import ChartComponent from "./ChartComponent";
import { FontStyle } from "../../utils/FontStyle";
const ChartContainer = () => {
  const DataChart = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };
  return (
    <VStack pr={"2"} flex={0.5} justifyContent="space-between">
      <Box p="4" flex={0.49} bg={BASE.DarkBG2} rounded={"2xl"}>
        <Box borderBottomWidth={1} borderColor={BASE.DarkLine} pb={"2"}>
          <Text color="white" style={FontStyle.LargeSB}>
            Paling Banyak Di Pesan
          </Text>
        </Box>
        <VStack justifyContent="space-between" flex={1} pt="2">
          {[1, 2, 3, 4].map((index) => {
            return (
              <HStack key={index} space="md">
                <Image
                  rounded={"full"}
                  source={{
                    uri: "https://wallpaperaccess.com/full/317501.jpg",
                  }}
                  alt="Alternate Text"
                  size="xs"
                />
                <VStack>
                  <Text color={"white"} style={FontStyle.NormalM}>
                    Judul Makanan
                  </Text>
                  <Text color={Typho.Light} style={FontStyle.SmallM}>
                    80 order
                  </Text>
                </VStack>
              </HStack>
            );
          })}
        </VStack>
      </Box>
      <Box flex={0.49} bg={BASE.DarkBG2} rounded={"2xl"}>
        <Box py="2" px="4" borderBottomWidth={2} borderColor={BASE.DarkBG1}>
          <Text color="white" style={FontStyle.LargeSB}>
            Metode Pembayaran
          </Text>
        </Box>
        <ChartComponent />
      </Box>
    </VStack>
  );
};
export default ChartContainer;
