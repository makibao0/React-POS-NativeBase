import { Box, HStack, Input, Text, VStack } from "native-base";
import React from "react";
import { useSelector } from "react-redux";
import { FontStyle } from "../../../../utils/FontStyle";
import { BASE, Typho } from "../../../../utils/Color";
import { ICMessage, ICSearch } from "../../../../assets/icons/Index";
import Skeleton from "react-loading-skeleton";

const HeaderComponent = () => {
  const realTime = useSelector((state) => state.realTime.realTime);
  return (
    <HStack
      borderBottomWidth={1}
      pb="4"
      borderColor={BASE.DarkLine}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <VStack>
        <Text color={"white"} style={FontStyle.H1}>
          Lipai Store
        </Text>
        {realTime.length > 0 ? (
          <Text color={Typho.Light} style={FontStyle.LargeR}>
            {realTime}
          </Text>
        ) : (
          <Skeleton width={"200%"} />
        )}
      </VStack>
      <Box
        style={{
          height: 48,
          width: 220,
        }}
      >
        <Input
          borderColor={BASE.DarkLine}
          bg={BASE.FormBG}
          rounded={"md"}
          justifyContent={"center"}
          leftElement={
            <Box mt="2" justifyContent={"center"} ml="4">
              <ICSearch color="white" size="20" />
            </Box>
          }
          flex={1}
          style={FontStyle.NormalR}
          color={"white"}
          placeholderTextColor={Typho.Light}
          placeholder="Search Product"
        />
      </Box>
    </HStack>
  );
};

export default HeaderComponent;
