import { HStack } from "native-base";
import React from "react";
import CartContainer from "./component/CartContainer";
import HomeContainer from "./component/HomeContainer";

const Home = () => {
  return (
    <HStack flex={1} justifyContent={"space-between"}>
      <HomeContainer />
      <CartContainer />
    </HStack>
  );
};

export default Home;
