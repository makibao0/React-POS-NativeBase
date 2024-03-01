import { Box, HStack } from "native-base";
import React from "react";
import { BASE } from "../../utils/Color";
import CardHeader from "./CardHeader";
import ChartContainer from "./ChartContainer";
import DataReport from "./DataReport";
import HeaderReport from "./HeaderReport";

const Report = () => {
  return (
    <HStack flex={1} bg={BASE.DarkBG1}>
      <Box flex={1} p="4">
        <HeaderReport />
        <CardHeader />
        <DataReport />
      </Box>
      <ChartContainer />
    </HStack>
  );
};

export default Report;
