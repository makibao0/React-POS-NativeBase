import {
  Box,
  FlatList,
  HStack,
  Pressable,
  Text,
  VStack,
  Image,
} from "native-base";

import React, { useEffect, useState } from "react";

import { FONTS } from "../../utils/Fonts";
import { Accent, BASE, Transparent, Typho } from "../../utils/Color";

import { ICOption } from "../../assets/icons/Index";
import axios from "axios";
import { FontStyle } from "../../utils/FontStyle";
const HeaderFlatlist = () => {
  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      borderBottomWidth={1}
      borderColor={BASE.DarkLine}
      p="4"
      bg={BASE.DarkBG2}
      borderTopRightRadius={"2xl"}
      borderTopLeftRadius={"2xl"}
    >
      <VStack flex={1} space="md">
        <Text style={FontStyle.NormalSB} color={"white"}>
          Order Report
        </Text>
        <Text style={FontStyle.SmallR} color={"white"}>
          Customer
        </Text>
      </VStack>
      <VStack flex={1} space="md" alignItems="center">
        <Text style={FontStyle.NormalSB} color={BASE.DarkBG2}>
          Order Report
        </Text>
        <Text style={FontStyle.SmallR} color={"white"}>
          Menu
        </Text>
      </VStack>
      <VStack flex={1} space="md" alignItems="center">
        <Text style={FontStyle.NormalSB} color={BASE.DarkBG2}>
          Order Report
        </Text>
        <Text style={FontStyle.SmallR} color={"white"}>
          Total Payment
        </Text>
      </VStack>
      <VStack flex={1} space="md" alignItems="center">
        <Pressable
          borderWidth={1}
          px={"2"}
          py="1"
          rounded={"md"}
          borderColor={BASE.DarkLine}
        >
          <HStack space="md" alignItems="center">
            <ICOption size="16" color="white" />
            <Text style={FontStyle.SmallR} color={"white"}>
              Filter Order
            </Text>
          </HStack>
        </Pressable>
        <Text style={FontStyle.SmallR} color={"white"}>
          Status
        </Text>
      </VStack>
    </HStack>
  );
};
const DataReport = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data.products);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      bg={BASE.DarkBG2}
      rounded={"2xl"}
      data={Data}
      // eslint-disable-next-line react/no-unstable-nested-components
      ListHeaderComponent={() => <HeaderFlatlist />}
      renderItem={({ item, index }) => (
        <HStack
          m="4"
          alignItems="center"
          justifyContent="space-between"
          space="md"
        >
          <HStack flex={1} space="md" alignItems="center">
            <Image
              rounded={"full"}
              source={{
                uri: item.images[0],
              }}
              alt="Alternate Text"
              size="xs"
            />
            <Box flex={1}>
              <Text numberOfLines={2} color={"white"} style={FontStyle.SmallR}>
                {item.brand}
              </Text>
            </Box>
          </HStack>

          <Box flex={1} alignItems="center">
            <Text style={FontStyle.SmallR} color={"white"}>
              {item.title}
            </Text>
          </Box>
          <Box flex={1} alignItems="center">
            <Text style={FontStyle.SmallR} color={"white"}>
              Rp. {item.price}
            </Text>
          </Box>
          <Box flex={1} alignItems="center">
            <Box
              alignItems="center"
              bg={Transparent.Green}
              py={"2"}
              px="4"
              rounded={"full"}
            >
              <Text opacity={1} color={Accent.Green} style={FontStyle.SmallR}>
                Completed
              </Text>
            </Box>
          </Box>
        </HStack>
      )}
      // Set the index of the item you want to stick at the top as the sticky header
      stickyHeaderIndices={[0]}
    />
  );
};

export default DataReport;
