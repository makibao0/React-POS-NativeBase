import { Box } from "native-base";
import React from "react";
import { BASE } from "../../../utils/Color";
import HeaderComponent from "./HomeComponent/HeaderComponent";
import ListCategory from "./HomeComponent/ListCategory";
import ProductContainer from "./ProductContainer";

const HomeContainer = () => {
  return (
    <Box flex={1} bg={BASE.DarkBG1} p="4" rounded="lg">
      <HeaderComponent />
      <ListCategory />
      <ProductContainer />
    </Box>
  );
};

export default HomeContainer;
