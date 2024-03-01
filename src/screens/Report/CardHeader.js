import React from "react";
import { Box, HStack, Text, VStack } from "native-base";
import {
  ICCoin,
  ICCustomer,
  ICDown,
  ICOrder,
  ICUp,
} from "../../assets/icons/Index";
import { Accent, BASE, Transparent, Typho } from "../../utils/Color";

import { FONTS } from "../../utils/Fonts";
import { FontStyle } from "../../utils/FontStyle";

const CardHeader = () => {
  const Data = [
    {
      title: "Total Penjualan",
      Icon: <ICCoin size="24" color={Accent.Purple} />,
      persentasi: "+25,59%",
      total: "Rp. 25.000.000",
    },
    {
      title: "Total Order",
      Icon: <ICOrder size="24" color={Accent.Orange} />,
      persentasi: "-25,59%",
      total: "25.000",
    },
    {
      title: "Total Customer",
      Icon: <ICCustomer size="24" color={Accent.Blue} />,
      persentasi: "+15,59%",
      total: "140",
    },
  ];
  return (
    <HStack py="4" justifyContent="space-between" space={"2xl"}>
      {Data.map((item, index) => {
        return (
          <VStack
            flex={1}
            key={index}
            p="4"
            bg={BASE.DarkBG2}
            rounded={"xl"}
            space="md"
          >
            <HStack alignItems="center" space="md">
              <Box
                rounded={"xl"}
                p="2"
                bg={
                  item.persentasi.includes("+")
                    ? Transparent.Green
                    : Transparent.Red
                }
              >
                {item.Icon}
              </Box>
              <Text
                color={
                  item.persentasi.includes("+") ? Accent.Green : Accent.Red
                }
                style={FontStyle.NormalM}
              >
                {item.persentasi}
              </Text>
              <Box
                rounded={"full"}
                p="1"
                bg={
                  item.persentasi.includes("+")
                    ? Transparent.Green
                    : Transparent.Red
                }
              >
                {item.persentasi.includes("+") ? (
                  <ICUp size="16" color={Accent.Green} />
                ) : (
                  <ICDown size="16" color={Accent.Red} />
                )}
              </Box>
            </HStack>
            <Text style={FontStyle.LargeSB} color="white">
              {item.total}
            </Text>
            <Text style={FontStyle.SmallR} color={Typho.Light}>
              {item.title}
            </Text>
          </VStack>
        );
      })}
    </HStack>
  );
};

export default CardHeader;
